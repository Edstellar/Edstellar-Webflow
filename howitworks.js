// navigation bar in expert page

let options = {
  threshold: 1.0,
};

let triggers = Array.from(document.querySelectorAll(".how-it-works--step"));
let targets = document.querySelector(".how-it-works--main-content").children;

triggers[0].addEventListener("click", () => {
  targets[0].scrollIntoView();
});
triggers[1].addEventListener("click", () => {
  targets[1].scrollIntoView();
});
triggers[2].addEventListener("click", () => {
  targets[2].scrollIntoView();
});
triggers[3].addEventListener("click", () => {
  targets[3].scrollIntoView();
});
triggers[4].addEventListener("click", () => {
  targets[4].scrollIntoView();
});
triggers[5].addEventListener("click", () => {
  targets[5].scrollIntoView();
});

const firstStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepOneNumber = document.querySelector("#step-1");
      stepOneNumber.classList.remove("non-saturate");
      stepOneNumber.nextElementSibling.classList.remove("in-active");
      // console.log(entry);
    } else {
      let stepOneNumber = document.querySelector("#step-1");
      stepOneNumber.classList.add("non-saturate");
      stepOneNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const secondStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepTwoNumber = document.querySelector("#step-2");
      stepTwoNumber.classList.remove("non-saturate");
      stepTwoNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepTwoNumber = document.querySelector("#step-2");
      stepTwoNumber.classList.add("non-saturate");
      stepTwoNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const thirdStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepThreeNumber = document.querySelector("#step-3");
      stepThreeNumber.classList.remove("non-saturate");
      stepThreeNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepThreeNumber = document.querySelector("#step-3");
      stepThreeNumber.classList.add("non-saturate");
      stepThreeNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const fourthStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepFourNumber = document.querySelector("#step-4");
      stepFourNumber.classList.remove("non-saturate");
      stepFourNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepFourNumber = document.querySelector("#step-4");
      stepFourNumber.classList.add("non-saturate");
      stepFourNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const fifthStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepFiveNumber = document.querySelector("#step-5");
      stepFiveNumber.classList.remove("non-saturate");
      stepFiveNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepFiveNumber = document.querySelector("#step-5");
      stepFiveNumber.classList.add("non-saturate");
      stepFiveNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const sixthStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepSixNumber = document.querySelector("#step-6");
      stepSixNumber.classList.remove("non-saturate");
      stepSixNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepSixNumber = document.querySelector("#step-6");
      stepSixNumber.classList.add("non-saturate");
      stepSixNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

firstStep.observe(document.querySelector("#registration"));
secondStep.observe(document.querySelector("#configure"));
thirdStep.observe(document.querySelector("#design"));
fourthStep.observe(document.querySelector("#post"));
fifthStep.observe(document.querySelector("#leave"));
sixthStep.observe(document.querySelector("#employees"));
