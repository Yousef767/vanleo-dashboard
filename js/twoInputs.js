let input = document.getElementById('file3');
let input2 = document.getElementById('file4');
let picsInner = document.getElementById('imgcont');
let picsInner2 = document.getElementById('imgcont2');

input.addEventListener("input", () => {
  putImages(input.files);
});

input2.addEventListener("input", () => {
  putImages2(input2.files);
});


function putImages(arr) {
  picsInner.innerHTML='';
  for (let i = 0; i < arr.length; i++) {
    picsInner.innerHTML += `<div class="pImage">
    <img src="${URL.createObjectURL(arr[i])}" alt="">
    <i class="fa-light fa-trash-can" data-name="${arr[i].name}"></i>
  </div>`;
  }

  let del = document.querySelectorAll('.pImages i');
  del.forEach((e)=>{
    e.addEventListener('click',()=>{
      e.parentElement.remove();
      removeName(e.dataset.name)
    })
  })
}
function putImages2(arr) {
  picsInner2.innerHTML='';
  for (let i = 0; i < arr.length; i++) {
    picsInner2.innerHTML += `<div class="pImage">
    <img src="${URL.createObjectURL(arr[i])}" alt="">
    <i class="fa-light fa-trash-can" data-name="${arr[i].name}"></i>
  </div>`;
  }

  let del = document.querySelectorAll('.pImages i');
  del.forEach((e)=>{
    e.addEventListener('click',()=>{
      e.parentElement.remove();
      removeName(e.dataset.name)
    })
  })
}

function removeName(name){
  let arr = Array.from(input.files)
  let filtered = arr.filter((e)=> e.name !== name);
  const dataTransfer = new DataTransfer();
  filtered.forEach(file => {
    dataTransfer.items.add(file);
  });
  input.files = dataTransfer.files;

}

function removeName2(name){
  let arr = Array.from(input.files)
  let filtered = arr.filter((e)=> e.name !== name);
  const dataTransfer2 = new DataTransfer();
  filtered.forEach(file => {
    dataTransfer2.items.add(file);
  });
  input.files = dataTransfer2.files;
}

