let inputs = document.querySelectorAll('.control');
inputs.forEach((e)=>{
  e.addEventListener('input',()=>{
    e.parentElement.lastElementChild.innerHTML=e.files[0].name;
  })
})