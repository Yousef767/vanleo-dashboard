let showPopUp = document.querySelectorAll('#show-popUp');
let popUp = document.getElementById('popUp');
let closeBtn = document.getElementById('close');

showPopUp.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp.style.display='flex';
  });
})

closeBtn.addEventListener('click',()=>{
  popUp.style.display='none';
});
