const sentences = [
   "The stars twinkled brightly in the silent night sky.",
  "She opened the old book and found a hidden note inside.",
  "Without warning, the cat jumped onto the keyboard.",
  "Time flies when you're doing something you enjoy.",
  "He forgot his umbrella on the bus again.",
  "The wind whispered softly through the tall trees.",
  "We laughed until our stomachs hurt.",
  "Every morning begins with a fresh cup of coffee.",
  "Learning something new every day keeps life exciting.",
  "The quiet room was filled with the sound of typing."
];
let target=document.querySelector("#target");
let sent='';
let words;
function getSentence()
{

  num= Math.floor(Math.random() * sentences.length);
  para=document.createElement("p");
  para.innerText=sentences[num];
  sent=sentences[num];
   words=sent.trim().split(/\s+/);
  target.innerHTML="";
  target.appendChild(para);

}
let min=0;
let secs=0;
let timer=0;
let typed=false;
let interval;
let time=document.querySelector("#time");
const input=document.querySelector("input");
const wpm=document.querySelector("#wpm");


input.addEventListener("input",()=>{
  if(typed==false)
  {
    typed=true;
     interval=setInterval(() => {
      timer++;
    }, 1000);
  }
 
    if(input.value.trim()===sent.trim())
    {
      clearInterval(interval);
      console.log(timer);
      min=Math.floor(timer/60);
      secs=timer%60;
      time.innerText+=` ${min}min ${secs}sec`;
      wpm.innerText+=`${Math.round((words.length/timer)*60)} WPM`;
    }
});
window.addEventListener("load",()=>{
  getSentence();
  min=0;
  secs=0;
  timer=0;
  typed=false;
  time.innerText='Time: ';
  wpm.innerText='WPM: ';
});
const reload=document.querySelector("button");
reload.addEventListener("click",()=>{
  location.reload();
});

