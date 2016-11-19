import { getStatus } from 'bpost';

// Assuming we have these elements on the DOM.
const input = document.getElementById(`input`);
const button = document.getElementById(`submit`);
const result = document.getElementById(`result`);

button.addEventListener(`click`, () => {
  getStatus(input.value).then(res => result.innerHTML = res.name);
});
