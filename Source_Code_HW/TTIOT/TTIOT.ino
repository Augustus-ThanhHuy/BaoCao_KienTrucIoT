//Khai báo các thư viện cần thiết
#include <WiFi.h>
#include <FirebaseESP32.h>
#include "DHT.h"
#include "MQ135.h"


const char* ssid = "mapmap";
const char* password = "20111501";

#define DATABASE_URL "esp32-firebase-be203-default-rtdb.firebaseio.com"
#define API_KEY "AIzaSyAM-vAAigAsCzb37XSVO4-SUcJlrJtaUMI"

#define analogPin 33  //chân nhận dữ liệu của MQ-135
#define MQ2_PIN 32    //chân nhận dữ liệu của MQ-2
#define DHTPIN 12     //chân nhận dữ liệu của DHT11
// chân kết nối đến các thiết bị 
#define PIN_BC 14
#define PIN_ML 27
#define PIN_LKK 26

FirebaseData fbdo;
FirebaseConfig config;
FirebaseAuth auth;

#define DHTTYPE DHT11   //Loại cảm biến DHT11
DHT dht(DHTPIN, DHTTYPE);
MQ135 mq135_sensor = MQ135(analogPin);

void setup() {
  Serial.begin(9600);
  //Kết nối đến WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  //Kết nối đến Firebase
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Ket Noi Thanh Cong Den Firebase");
  } else {
    Serial.printf("Ket Noi Khong Thanh Cong. Loi: %s\n", config.signer.signupError.message.c_str());
  }

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  dht.begin();

  pinMode(DHTPIN,INPUT);
  pinMode(MQ2_PIN,INPUT);
  pinMode(PIN_BC, OUTPUT);
  pinMode(PIN_ML,OUTPUT);
  pinMode(PIN_LKK,OUTPUT);

}

// Chương trình điều khiển các thiết bị
void getStatus(){
  String path ="/PhongKhach/thietbi";
  Firebase.getString(fbdo,path + "/loc");
  int tb1 = fbdo.stringData().toInt();
    if(tb1 > 0){
      digitalWrite(PIN_LKK, HIGH);
      Serial.println("May loc khong khi da duoc bat");
    }else{
      digitalWrite(PIN_LKK, LOW);
      Serial.println("May loc khong khi da duoc tat");
    }
  
  Firebase.getString(fbdo,path + "/maylanh");
  int tb2 = fbdo.stringData().toInt();
    if(tb2 > 0){
      digitalWrite(PIN_ML, HIGH);
      Serial.println("May lanh da duoc bat");
    }else{
      digitalWrite(PIN_ML, LOW);
      Serial.println("May lanh da duoc tat");
    }
  Firebase.getString(fbdo,path + "/baochay");
  int tb3 = fbdo.stringData().toInt();
    if (tb3 > 0){
      digitalWrite(PIN_BC, HIGH);
      Serial.println("Canh bao phat hien chay");
    }else{
      digitalWrite(PIN_BC, LOW);
      Serial.println("Khong phat hien chay");
    }
}


void loop() {
  getStatus();
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  float correctedPPM = mq135_sensor.getCorrectedPPM(temperature, humidity);  // Hiệu chỉnh giá trị PPM dựa trên nhiệt độ, độ ẩm.
  int gasValue = analogRead(MQ2_PIN);
 
  Serial.print("Nhiet Do: ");
  Serial.print(temperature);
  Serial.print("\t Do Am: ");
  Serial.print(humidity);
  Serial.print("\t Corrected PPM: ");
  Serial.print(correctedPPM);
  Serial.println("ppm");
  Serial.print("\t Nong do khi gas: ");
  Serial.print(gasValue);
  Firebase.setFloat(fbdo, "PhongKhach/Bui", correctedPPM);
  Firebase.setFloat(fbdo, "PhongKhach/Nhietdo", temperature);
  Firebase.setFloat(fbdo, "PhongKhach/Doam", humidity);
  Firebase.setInt(fbdo, "PhongKhach/Khoi", gasValue);

// Cảnh báo khi khí gas vượt ngưỡng hoặc nhiệt độ quá cáo
  while (gasValue > 1800 || temperature > 50){
    Serial.println("Canh bao chay");
    digitalWrite(PIN_BC, HIGH);
    delay(200);
    digitalWrite(PIN_BC, LOW);
    delay(200);
    gasValue = analogRead(MQ2_PIN);
    temperature = dht.readTemperature();
  }

  delay(1000);
}