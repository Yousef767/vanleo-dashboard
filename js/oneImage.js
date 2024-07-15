
document.addEventListener("DOMContentLoaded", () => {
  let input2 = document.getElementById("file4");
  let picsInner2 = document.getElementById("imgcont2");


  input2.addEventListener(
    "input",
    debounce(() => {
      putImages(input2.files, picsInner2, true);
      updateFiles(input2, picsInner2, "img");
    }, 300)
  );


  function putImages(files, container, reset = false, type = "img") {
    if (!reset) container.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      let element =
        type === "img"
          ? `<img src="${URL.createObjectURL(files[i])}" alt="">`
          : `<video src="${URL.createObjectURL(files[i])}" controls></video>`;
      container.innerHTML += `<div class="pImage">
        ${element}
        <i class="fa-light fa-trash-can" data-name="${files[i].name}"></i>
      </div>`;
    }
  }

  async function updateFiles(inputElement, container, type) {
    const elements = container.querySelectorAll(`.pImage ${type}`);
    const delButtons = container.querySelectorAll(".pImage i");
    delButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        updateFiles(inputElement, container, type);
      });
    });
    const dataTransfer = new DataTransfer();
    for (const element of elements) {
      const filename = element.nextElementSibling.dataset.name;
      const response = await fetch(element.src);
      const blob = await response.blob();
      const newFile = new File([blob], filename, { type: blob.type });
      dataTransfer.items.add(newFile);
    }
    inputElement.files = dataTransfer.files;
    console.log(inputElement.files);
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  updateFiles(input2, picsInner2, "img");;
});
