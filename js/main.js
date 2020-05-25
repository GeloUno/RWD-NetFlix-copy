const buttonTabs = document.querySelectorAll('.tab-item');
const tabConntent = document.querySelectorAll('.tab-content-item');

console.log('test');

function butonTabClicked(e) {
  removeBorder();
  removeContent();

  this.classList.toggle('tab-border');
  let itemShow = document.querySelector(`#${this.id}-content`);
  itemShow.classList.add('show');
}

function removeBorder() {
  buttonTabs.forEach(buttonBorder => {
    buttonBorder.classList.remove('tab-border');
  });
}
function removeContent() {
  tabConntent.forEach(item => {
    console.log(item);
    item.classList.remove('show');
  });
}

buttonTabs.forEach(item => {
  item.addEventListener('click', butonTabClicked);
});
