
var chart =  null
var BTN_Khoi = document.getElementById('chartKhoi').addEventListener('click',function(){
    var phongNguRef= firebase.database().ref('PhongNgu').child('Khoi');
    var phongKhachRef = firebase.database().ref('PhongKhach').child('Khoi');
    var phongBepRef = firebase.database().ref('PhongBep').child('Khoi');
    var phongKhoRef = firebase.database().ref('PhongKho').child('Khoi');
            phongNguRef.once('value', function(snapshot) {
                khoiPhongNgu = snapshot.val();
            phongKhachRef.once('value', function(snapshot) {
                khoiPhongKhach = snapshot.val();
            phongBepRef.once('value', function(snapshot) {
                khoiPhongBep = snapshot.val();
            phongKhoRef.once('value', function(snapshot) {
                khoiPhongKho = snapshot.val();

                if (chart) {
                    chart.destroy(); // Hủy biểu đồ cũ nếu có
                }                

chart = new Chart("bieudo", {
    type: "bar",
        data: {
            labels:['Khí Gas'],
            datasets: [{
                label: 'Phòng Khách',
                data: [khoiPhongKhach],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                fill: false
            }, {
                label: 'Phòng Ngủ',
                data: [khoiPhongKhach],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                fill: false
            }, {
                label: 'Phòng Bếp',
                data: [khoiPhongBep],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                fill: false
            }, {
                label: 'Phòng Kho',
                data: [khoiPhongKho],
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                fill: false
            }]
        },
        options:{
            Response:true,
            title:{
            display:true,
            text:'Khí Gas',
            fontSize:25
            },
            legend:{
            display: true,
            position:'top',
            labels:{
                fontColor:'#000'
            }
            },
            layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
            },
            tooltips:{
            enabled:true
            }
      }
    });
            });
        });
    });
});
});

var BTN_Nhietdo = document.getElementById('chartNhietdo').addEventListener('click', function () {
    // Lấy tham chiếu đến canvas và div chứa nó
          var phongNguRef_4 = firebase.database().ref('PhongNgu').child('Nhietdo');
          var phongKhachRef_4 = firebase.database().ref('PhongKhach').child('Nhietdo');
          var phongBepRef_4 = firebase.database().ref('PhongBep').child('Nhietdo');
          var phongKhoRef_4 = firebase.database().ref('PhongKho').child('Nhietdo');
          phongNguRef_4.once('value', function(snapshot) {
              nhietdoPhongNgu = snapshot.val();
              
                  phongKhachRef_4.once('value', function(snapshot) {
                      nhietdoPhongKhach = snapshot.val();
                    
                  phongBepRef_4.once('value', function(snapshot) {
                      nhietdoPhongBep = snapshot.val();
                      
                  phongKhoRef_4.once('value', function(snapshot) {
                      nhietdoPhongKho = snapshot.val();
                      
      
                if (chart) {
                        chart.destroy(); // Hủy biểu đồ cũ nếu có
                    }                 
      
    chart =  new Chart("bieudo", {
          type: "bar",
              data: {
                  labels: ['Nhiệt độ'],
                  datasets: [{
                      label: 'Phòng Khách',
                      data: [nhietdoPhongKhach],
                      backgroundColor: "rgba(255, 99, 132, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Ngủ',
                      data: [nhietdoPhongNgu],
                      backgroundColor: "rgba(54, 162, 235, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Bếp',
                      data: [nhietdoPhongBep],
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Kho',
                      data: [nhietdoPhongKho],
                      backgroundColor: "rgba(255, 206, 86, 0.6)",
                      fill: false
                  }]
              },
          options:{
            Response:true,
              title:{
              display:true,
              text:'Nhiệt độ',
              fontSize:25
              },
              legend:{
              display: true,
              position:'top',
              labels:{
                  fontColor:'#000'
              }
              },
              layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
              tooltips:{
              enabled:true
            }
        }
          });
                  });
              });
          });
      });
});


var BTN_Doam = document.getElementById('chartDoam').addEventListener('click',function(){
          var phongNguRef_2= firebase.database().ref('PhongNgu').child('Doam');
          var phongKhachRef_2 = firebase.database().ref('PhongKhach').child('Doam');
          var phongBepRef_2 = firebase.database().ref('PhongBep').child('Doam');
          var phongKhoRef_2 = firebase.database().ref('PhongKho').child('Doam');
          phongNguRef_2.once('value', function(snapshot) {
              doamPhongNgu = snapshot.val();
                  phongKhachRef_2.once('value', function(snapshot) {
                      doamPhongKhach = snapshot.val();
                  phongBepRef_2.once('value', function(snapshot) {
                      doamPhongBep = snapshot.val();
                  phongKhoRef_2.once('value', function(snapshot) {
                      doamPhongKho = snapshot.val();
    
                if (chart) {
                        chart.destroy(); // Hủy biểu đồ cũ nếu có
                    }
      
    chart =  new Chart("bieudo", {
          type: "bar",
              data: {
                  labels: ['Độ Ẩm'],
                  datasets: [{
                      label: 'Phòng Khách',
                      data: [doamPhongKhach],
                      backgroundColor: "rgba(255, 99, 132, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Ngủ',
                      data: [doamPhongNgu],
                      backgroundColor: "rgba(54, 162, 235, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Bếp',
                      data: [doamPhongBep],
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Kho',
                      data: [doamPhongKho],
                      backgroundColor: "rgba(255, 206, 86, 0.6)",
                      fill: false
                  }]
              },
          options:{
            Response:true,
              title:{
                display:true,
                text:'Độ ẩm',
                fontSize:25
            },
              legend:{
                display: true,
                position:'top',
                labels:{
                  fontColor:'#000'
                }
            },
              layout:{
              padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
            },
              tooltips:{
                enabled:true
            }
        }
          });
                  });
              });
          });
      });
    });

var BTN_Bui = document.getElementById('chartBui').addEventListener('click',function(){
        var phongNguRef_3= firebase.database().ref('PhongNgu').child('Bui');
        var phongKhachRef_3 = firebase.database().ref('PhongKhach').child('Bui');
        var phongBepRef_3 = firebase.database().ref('PhongBep').child('Bui');
        var phongKhoRef_3 = firebase.database().ref('PhongKho').child('Bui');
        phongNguRef_3.once('value', function(snapshot) {
            buiPhongNgu = snapshot.val();
                phongKhachRef_3.once('value', function(snapshot) {
                    buiPhongKhach = snapshot.val();
                phongBepRef_3.once('value', function(snapshot) {
                    buiPhongBep = snapshot.val();
                phongKhoRef_3.once('value', function(snapshot) {
                    buiPhongKho = snapshot.val();  
                    
                    if (chart) {
                            chart.destroy(); // Hủy biểu đồ cũ nếu có
                        }
    
    chart = new Chart("bieudo", {
        type: "bar",
            data: {
                labels: ['PPM'],
                datasets: [{
                    label: 'Phòng Khách',
                    data: [buiPhongKhach],
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                    fill: false
                }, {
                    label: 'Phòng Ngủ',
                    data: [buiPhongNgu],
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    fill: false
                }, {
                    label: 'Phòng Bếp',
                    data: [buiPhongBep],
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    fill: false
                }, {
                    label: 'Phòng Kho',
                    data: [buiPhongKho],
                    backgroundColor: "rgba(255, 206, 86, 0.6)",
                    fill: false
                }]
            },
        options:{
            Response:true,
            title:{
                display:true,
                text:'PPM',
                fontSize:25
            },
        
            legend:{
                display: true,
                position:'top',
                labels:{
                fontColor:'#000'
                }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
            tooltips:{
                enabled:true
            }
      }
        });
                });
            });
        });
    });
    });  

