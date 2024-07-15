
let raws = document.querySelector(".raws");
let addBtn = document.querySelector('#addBtn');


  addBtn.addEventListener('click',()=>{
    raws.innerHTML += 
    `
      <div class="twoIns">
                <i class="fa-solid fa-trash"></i>
                <div class="input">
                  <input type="text" placeholder="Title">
                </div>
                <div class="input">
                  <input type="text" placeholder="Value">
                </div>
              </div>
    `
    delInput();
  })

function delInput(){
  let del = document.querySelectorAll('.twoIns .fa-trash');
  del.forEach((e)=>{
    e.addEventListener('click',()=>{
      e.parentElement.remove();
    })
  })
}
delInput();