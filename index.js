const btn=document.querySelector("#btn");
const input=document.querySelector("#num");
const numbe=document.querySelector("#guessnum");
const gcnt=document.querySelector("#guesscount");
const bx=document.querySelector(".box");
var count=1;
var val=Math.floor(Math.random()*100)+1;
console.log(val);
btn.addEventListener("click",()=>{

  if(input.value<1||input.value>100||input.value.length===0)
  {
    alert("Please enter value between 1 and 100");
  }
  else{
    const message=document.createElement("div");
    message.classList.add("new1");
     bx.appendChild(message);
     const beauty=document.querySelector(".new1");
     if(input.value<val)
    {
      beauty.innerHTML=`your value is too low!`;
      beauty.style.color='blue';
         }
    else if(input.value>val)
    {
      beauty.innerHTML=`your value is too big!`;
    beauty.style.color='red';
    }
    else 
    {
      beauty.innerHTML=`Hurray!! you guessed correct number`;
      beauty.style.color='green';
    }
    setTimeout(()=>{
        bx.removeChild(message)},2000);

  gcnt.textContent=`No.of guesses:${count}`;
  numbe.textContent+=input.value;
  numbe.textContent+=',';
  input.value='';
  count+=1;
}
});