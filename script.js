/*
const pic = document.querySelector(".pic_activ")
pic.addEventListener('mouseenter', e => {
    pic.style.opacity="0.6" 
  });
*/
  let pets = document.querySelector(".pets_pic")
  pets.onmouseover = function(event) {
    let target = event.target;
    target.style.opacity="0.6" 
  };

  pets.onmouseout = function(event) {
    let target = event.target;
    target.style.opacity="1.0" 
  };

