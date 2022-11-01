let a = document.querySelector("#numO");
let b = document.querySelector("#numT");
let c = document.querySelector("#numTh");
let res = document.querySelector(".result");
let span = document.querySelector(".num");
let text = document.querySelector(".text");
let check = document.querySelector("button");

check.addEventListener("click", () => {
  let result = parseInt(b.value ** 2 - 4 * a.value * c.value);
  if (a.value !== "" && b.value !== "" && c.value !== "" && result !== NaN) {
    console.log(result);
    if (result > 0) {
      span.textContent = result;
      text.textContent = "الجذران حقيقيان مختلفان";
    } else if (result < 0) {
      span.textContent = result;
      text.textContent = "الجذران مركبان غير حقيقيان";
    } else if (result === 0) {
      span.textContent = result;
      text.textContent = "الجذران حقيقيان متشابهان";
    };
  } else {
    span.textContent = "Erorr";
    text.textContent = "برجاء التأكد من إدخال القيم بشكل صحيح";
  };
});