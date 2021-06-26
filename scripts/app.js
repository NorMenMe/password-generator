// ↓↓↓ selecting html elements

const btn = document.querySelector(`button`);
const listItem = document.querySelector(`li`);
const inputNumber = document.querySelector(`#passLength`);
const checkbox = document.querySelector(`#flexCheckDefault`);
const container = document.querySelector(`.container`);

// ↓↓↓ given variables

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";
const mixedCase = true;

// ↓↓↓ generating random function

function getRandomInt() {
  return Math.floor(Math.random() * charset.length);
}

// ↓↓↓ generating password function

function getPass(length, mixedCase = checkbox.checked) {
  let output = "";

  for (let i = 0; i < length; i++) {
    let randomNum = getRandomInt();

    // ↓↓↓ adding to output the character at random-index inside 'charset'
    output += charset.charAt(randomNum);
  }

  // ↓↓↓ every third number of the counter get convert to upper case
  if (mixedCase) {
    let result = "";
    for (let i = 0; i < output.length; i++) {
      if (i % 3 === 0) {
        result += output[i].toUpperCase();
      } else {
        result += output[i];
      }
    }

    return result;
  }

  return output;
}

// ↓↓↓ events

window.addEventListener(`load`, () => {
  listItem.textContent = getPass(inputNumber.value);
});

btn.addEventListener(`click`, () => {
  listItem.textContent = getPass(inputNumber.value);
});

container.addEventListener(`change`, () => {
  listItem.textContent = getPass(inputNumber.value);
});
