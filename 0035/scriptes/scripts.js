let rRange=document.querySelector('#R-range');

let gRang=document.querySelector('#G-range');

let bRang=document.querySelector('#B-range');


let body=document.querySelector('body');

let randomBtn=document.querySelector('#random')



function colorValue(){

    let redValus=rRange.value;
    let greenValus=gRang.value;
    let blueValues=bRang.value;
    body.style.backgroundColor="rgb("+redValus+ "," +greenValus + "," +blueValues+")";

}



rRange.addEventListener('input',function(){

colorValue()

});





gRang.addEventListener('input',function(){
    
colorValue()


})


bRang.addEventListener('input',function(){


    colorValue()

})





randomBtn.addEventListener('click',function(){

  let redNumber=Math.floor(Math.random()*255);
  let greenNaber=Math.floor(Math.random()*255);
  let blueNaber=Math.floor(Math.random()*255);

  rRange.value=redNumber;
  gRang.value=greenNaber;
  bRang.value=blueNaber;


  
  body.style.backgroundColor="rgb("+redNumber+ "," +greenNaber + "," +blueNaber+")";


});





















































    // body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    

















































































// let rRang = document.querySelector('#R-range');
// let gRang = document.querySelector('#G-range');
// let bRang = document.querySelector('#B-range');
// let randomBtn = document.getElementById('random');
// let bodyTag = document.querySelector('#body');



// function colorValue() {

//     let redValus = rRang.value;
//     let greenValus = gRang.value;
//     let blueValues = bRang.value;
//     bodyTag.style.backgroundColor = "rgb(" + redValus + "," + greenValus + "," + blueValues + ")";
// }

// function randomBtnvalue(){

//     let redNumber = Math.floor(Math.random() * 255);
//     let blueNabers = Math.floor(Math.random() * 255);
//     let greenNabers = Math.floor(Math.random() * 255);

//     rRang.value = redNumber;
//     bRang.value = blueNabers;
//     gRang.value = greenNabers;

//     bodyTag.style.backgroundColor = "rgb(" + redNumber + "," + blueNabers + "," + greenNabers + ")";

// }


// rRang.addEventListener('input', function () {

//     colorValue()

// });

// gRang.addEventListener('input', function () {



//     colorValue()

// });


// bRang.addEventListener('input', function () {

//     colorValue()


// });


// randomBtn.addEventListener('click', function () {

//     // let colorvalue = 'rgb :' + rRang.value + ', ' + gRang.value + ', ' + bRang.value;
//     randomBtnvalue()
// });





