import bpost from 'bpost';

// Assuming we have these elements on the DOM.
const ID = document.getElementById(`input`).value;
const button = document.getElementById(`submit`);
const result = document.getElementById(`result`);

const pkg = bpost(ID);

button.addEventListener(`click`, () => {
  pkg.getStatus().then(res => result.innerHTML = res.name);
});
