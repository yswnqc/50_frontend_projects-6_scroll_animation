const template = document.querySelector('.template');

const addBox = () => {
  const newBox = template.cloneNode(true);
  newBox.classList.remove('template');
  newBox.classList.remove('show');
  template.before(newBox);
};

const checkBoxes = () => {
  const trigger = window.innerHeight / 5 * 4;
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
  const shows = document.querySelectorAll('.show');
  console.log(shows.length, boxes.length);
  if (shows.length > boxes.length - 3) {
    addBox();
  } else {
    template.previousElementSibling.remove();
  }
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);

//change to infinite scroll down
//and remove elements if srcoll up
//need initial at least five items