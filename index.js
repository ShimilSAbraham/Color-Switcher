let bg = "#343434";

// i-blue,j-pink,k-green-,l-orange,m-purple
let i=0,j=0,cool_switch = document.querySelector(".switch");

let blue="#0275d8",pink="#ff00ff",green="#45e521",orange="#ff6600",l_purple="#d500f9",purple="#7f00ff";
let red="#E23636"
let sky="#00e5ff";
let yellow = "#ffc107";

let colors = [blue,green,yellow,purple,orange,red,pink,l_purple,sky];
let names = ["blue","green","yellow","purple","orange","red","pink","l_purple","sky"];

let math = colors.length;

cool_switch.addEventListener("click",function(){
  i=(i+1)%(math*2);
  if(i%2==0)
    {
      if(j<(math-1))
        {
            let img = 'img/'+names[j+1]+'.png';
            console.log(img);
     cool_switch.style.background = colors[j+1];
          document.querySelector(".head").style.color = colors[j+1];
          document.querySelector(".image").style.backgroundImage = `url(${img})`;
        }
      else
        {
            let b = 'img/blue.png';
       cool_switch.style.background = colors[0]; 
          document.querySelector(".head").style.color = colors[0];
          document.querySelector(".image").style.backgroundImage = `url(${b})`;
        }
      document.querySelector("body").style.background = bg;
      j++;
      if(j==math)
        j=0;
    }
  else
    {
      document.querySelector("body").style.background = colors[j];
   cool_switch.style.background = bg;  document.querySelector(".head").style.color = bg;
   document.querySelector(".image").style.backgroundImage = "url('')";
   document.querySelector(".image").style.transition = "all 0.5s";
    }
});