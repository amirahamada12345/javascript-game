var img=[
'images/1.jpg',
'images/2.jpg',
'images/3.jpg',
'images/4.jpg',
'images/5.jpg',
'images/6.jpg',
'images/7.jpg',
'images/8.jpg'
]




var correct= new Audio('images/Correct Sound Effect _ Bgm & Sound Effect (192 kbps).mp3')
var rong= new Audio('images/Windows error _ sound effect (192 kbps).mp3')

/*................................repeat imgs............................*/
function  picagain(){

  var pg=document.getElementById('main');

  for( let i=0;i<img.length;i++){
     pg.innerHTML +='<div><img src="'+img[i]+'"></div>';
  }
}

picagain()
picagain()





var Divsimg=document.getElementsByTagName('div');
var flag=true;/*............check just 2img open................*/
var divsarr=[];
var counter=0;
function choose2divs(){
  if(flag){
  this.firstChild.style.opacity='1';/*..........show one div.............*/
    if(divsarr.length==0)  /*.................choose 2 divs................*/
    {
      divsarr[0]=this;
    }

    else if(divsarr.length==1)

    {
      divsarr[1]=this;
    }
    if(divsarr.length==2)
    {

      flag=false;

      setTimeout(check,1000)
    
    }

  }else{

    return;
  }


}

for( let i=0;i<Divsimg.length;i++){

  Divsimg[i].addEventListener('click',choose2divs)
  
}



/*.....................function check..............*/
function  check(){
  if(divsarr[0].firstChild.getAttribute('src')==
  divsarr[1].firstChild.getAttribute('src')){
   correct.play()
   counter++;
if(counter==8)
{
alert("congratulation")

}

  }

  else{

    divsarr[0].firstChild.style.opacity=0;
    divsarr[1].firstChild.style.opacity=0;
    rong.play()
  }

  divsarr=[];
  flag=true;


}

setTimeout(function(){
  for( let i=0;i<Divsimg.length;i++){
    Divsimg[i].removeEventListener('click',  choose2divs); 
       }
       
  
      var d =document.createElement("button");
      d.setAttribute("onclick","location.reload()")
      d.textContent="GameAgain";
       document.getElementById("click").appendChild(d);
  
  },30000);



  var timesec = 30;
var Timer = setInterval(function(){
  if(timesec <= 0){
    clearInterval(Timer);
    document.getElementById("Game").innerHTML = "Game over";

  } else {
    document.getElementById("Game").innerHTML = timesec + " second";
  }
  timesec -= 1;
}, 1000)
