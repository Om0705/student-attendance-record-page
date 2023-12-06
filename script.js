const squares = document.querySelector('.squares');

for (let i = 1; i < 365; i++) {
  squares.insertAdjacentHTML('beforeend', `
    <li>
      <input type="checkbox" id="day${i}">
    </li>
  `);
}

squares.addEventListener('change', function (event) {
  const checkbox = event.target;
  if (checkbox.type === 'checkbox') {
    const day = checkbox.parentElement.getAttribute('data-day');
    const present = checkbox.checked;

    const square = checkbox.parentElement;
    if (present) {
      square.classList.add('checked');
      
    } else {
      square.classList.remove('checked');
    }

    // Your logic for handling present or absent for the specific day
    if (present) {
      console.log(`Day ${day}: Student was present`);
    } else {
      console.log(`Day ${day}: Student was absent`);
    }
  }
});