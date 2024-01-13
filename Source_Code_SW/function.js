// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#call');
let btn2 = document.querySelector('#btn2');
let audio;
var sourceHTML = window.location.href;

btn1.addEventListener('click', () => {
    img1.src = 'image/chay_2.png'; 
    playSound('image/chuong.mp3');
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({baochay: 1});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({baochay: 1});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({baochay: 1});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({baochay: 1});
    }
});
btn2.addEventListener('click', ()=>{
    img1.src = 'image/chay_1.png';
    stopSound();
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({baochay: 0});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({baochay: 0});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({baochay: 0});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({baochay: 0});
    }
})

// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#led');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'image/turn_on.png';
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({maylanh: 1});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({maylanh: 1});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({maylanh: 1});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({maylanh: 1});
    } 
})

btn4.addEventListener('click', ()=>{
    img2.src = 'image/turn_off.png';
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({maylanh: 0});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({maylanh: 0});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({maylanh: 0});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({maylanh: 0});
    } 

})


// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#loc');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
    img3.src = 'image/so1.png' ;
    slider.value = 30;
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({loc: 1});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({loc: 1});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({loc: 1});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({loc: 1});
    } 

})
btn6.addEventListener('click', ()=>{
    img3.src = 'image/mayloc_chuabac.png';
    slider.value = 0;
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({loc: 0});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({loc: 0});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({loc: 0});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({loc: 0});
    } 

})


    let slider = document.getElementById("myRange1");
    slider.oninput = function() {
      if (slider.value < 30){
        img3.src ="image/mayloc_chuabac.png";
        if (sourceHTML.includes("pKhach.html")) {
            firebase.database().ref("PhongKhach").child("thietbi").update({loc: 0});
        }
        if (sourceHTML.includes("pBep.html")) {
            firebase.database().ref("PhongBep").child("thietbi").update({loc: 0});
        }
        if (sourceHTML.includes("pNgu.html")) {
            firebase.database().ref("PhongNgu").child("thietbi").update({loc: 0});
        }
        if (sourceHTML.includes("pKho.html")) {
            firebase.database().ref("PhongKho").child("thietbi").update({loc: 0});
        } 
    }
      if (slider.value >= 30){
        img3.src = "image/so1.png";
        if (sourceHTML.includes("pKhach.html")) {
            firebase.database().ref("PhongKhach").child("thietbi").update({loc: 1});
        }
        if (sourceHTML.includes("pBep.html")) {
            firebase.database().ref("PhongBep").child("thietbi").update({loc: 1});
        }
        if (sourceHTML.includes("pNgu.html")) {
            firebase.database().ref("PhongNgu").child("thietbi").update({loc: 1});
        }
        if (sourceHTML.includes("pKho.html")) {
            firebase.database().ref("PhongKho").child("thietbi").update({loc: 1});
        } 
      }
      if(slider.value >= 60){
        img3.src ="image/so2.png";
        if (sourceHTML.includes("pKhach.html")) {
            firebase.database().ref("PhongKhach").child("thietbi").update({loc: 2});
        }
        if (sourceHTML.includes("pBep.html")) {
            firebase.database().ref("PhongBep").child("thietbi").update({loc: 2});
        }
        if (sourceHTML.includes("pNgu.html")) {
            firebase.database().ref("PhongNgu").child("thietbi").update({loc: 2});
        }
        if (sourceHTML.includes("pKho.html")) {
            firebase.database().ref("PhongKho").child("thietbi").update({loc: 2});
        } 
        
      }
      if(slider.value >= 90){
        img3.src="image/so3.png"
        if (sourceHTML.includes("pKhach.html")) {
            firebase.database().ref("PhongKhach").child("thietbi").update({loc: 3});
        }
        if (sourceHTML.includes("pBep.html")) {
            firebase.database().ref("PhongBep").child("thietbi").update({loc: 3});
        }
        if (sourceHTML.includes("pNgu.html")) {
            firebase.database().ref("PhongNgu").child("thietbi").update({loc: 3});
        }
        if (sourceHTML.includes("pKho.html")) {
            firebase.database().ref("PhongKho").child("thietbi").update({loc: 3});
        } 
      }
    }

function checkSmokeLevel() {
    let rooms = ["PhongKhach", "PhongNgu", "PhongBep", "PhongKho"];
    
    rooms.forEach(function(room) {
        let smokeRef = firebase.database().ref(room).child('Khoi');
        let temperatureRef = firebase.database().ref(room).child('Nhietdo');

        smokeRef.once('value')
            .then(function(smokeSnapshot) {
                let smokeValue = smokeSnapshot.val();
                
                temperatureRef.once('value')
                    .then(function(temperatureSnapshot) {
                        let temperatureValue = temperatureSnapshot.val();
                        
                        if (smokeValue > 1800 || temperatureValue > 40) {
                            btn1.click();
                        }
                    });
            });
    });
}

setInterval(checkSmokeLevel, 1000);

function playSound(soundPath) {
    audio = new Audio(soundPath);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

//sildebar
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

if(window.innerWidth < 768){
  sidebar.classList.add("close");
}else{
  sidebar.classList.remove("close");
  
}