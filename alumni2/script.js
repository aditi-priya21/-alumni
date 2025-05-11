
let button = document.querySelectorAll('.createbtn.selectedbtn');
let button2 = document.querySelectorAll('.createbtn');

button2.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = "index2.html";
  });
});

button.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = "index3.html";
  });
});