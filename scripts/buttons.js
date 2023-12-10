//Для того, чтобы кнопка категории статьи сохраняла цвет 
//до выбора другой категории
const categoryButtons = document.querySelectorAll('.cat');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});