window.addEventListener("load", () => {
  // tabs content
  let tabContent = document.querySelector("[wrapper='tabs-content']");

  // tab menu variables
  let faqTab = document.querySelector("[tab='faq']");
  let blogTab = document.querySelector("[tab='blogs']");
  let caseTab = document.querySelector("[tab='case']");
  let ratingTab = document.querySelector("[tab='rating']");
  let richTab = document.querySelector("[tab='rich']");

  // tab content variables
  let faqTabContent = document.querySelector("[tab-content='faq']");
  let blogsTabContent = document.querySelector("[tab-content='blogs']");
  let caseTabContent = document.querySelector("[tab-content='case']");
  let ratingTabContent = document.querySelector("[tab-content='ratings']");
  let richTabContent = document.querySelector("[tab-content='rich']");

  // empty collection divs (from Webflow)
  let faqEmpty = faqTabContent.querySelector(".w-dyn-empty");
  let blogsEmpty = blogsTabContent.querySelector(".w-dyn-empty");
  let caseEmpty = caseTabContent.querySelector(".w-dyn-empty");
  let ratingEmpty = ratingTabContent.querySelector(".w-dyn-empty");
  let richEmpty = richTabContent.querySelector(".w-dyn-bind-empty");

  // check if empty divs exist in each tab content
  function checkFaq() {
    if (faqEmpty !== null) {
      faqTab.style.display = "none";
      faqTab.setAttribute("data", "empty-tab");
      faqTabContent.classList.remove("w--tab-active");
      faqTabContent.setAttribute("data", "empty");
    } else {
      faqTabContent.setAttribute("data", "nonempty");
      faqTab.setAttribute("data", "non-empty-tab");
    }
  }
  function checkBlog() {
    if (blogsEmpty !== null) {
      blogTab.style.display = "none";
      blogTab.setAttribute("data", "empty-tab");
      blogsTabContent.classList.remove("w--tab-active");
      blogsTabContent.setAttribute("data", "empty");
    } else {
      blogsTabContent.setAttribute("data", "nonempty");
      blogTab.setAttribute("data", "non-empty-tab");
    }
  }
  function checkCases() {
    if (caseEmpty !== null) {
      caseTab.style.display = "none";
      caseTab.setAttribute("data", "empty-tab");
      caseTabContent.classList.remove("w--tab-active");
      caseTabContent.setAttribute("data", "empty");
    } else {
      caseTabContent.setAttribute("data", "nonempty");
      caseTab.setAttribute("data", "non-empty-tab");
    }
  }
  function checkRatings() {
    if (ratingEmpty !== null) {
      ratingTab.style.display = "none";
      ratingTab.setAttribute("data", "empty-tab");
      ratingTabContent.classList.remove("w--tab-active");
      ratingTabContent.setAttribute("data", "empty");
    } else {
      ratingTabContent.setAttribute("data", "nonempty");
      ratingTab.setAttribute("data", "non-empty-tab");
    }
  }

  function checkRich() {
    if (richEmpty !== null) {
      richTab.style.display = "none";
      richTab.setAttribute("data", "empty-tab");
      richTabContent.classList.remove("w--tab-active");
      richTabContent.setAttribute("data", "empty");
    } else {
      richTabContent.setAttribute("data", "nonempty");
      richTab.setAttribute("data", "non-empty-tab");
    }
  }

  function checkAllTabs() {
    if (
      faqEmpty !== null &&
      blogsEmpty !== null &&
      caseEmpty !== null &&
      ratingEmpty !== null &&
      richEmpty !== null
    ) {
      tabContent.style.display = "none";
    }
  }

  checkBlog();
  checkFaq();
  checkCases();
  checkRatings();
  checkRich();
  checkAllTabs();

  // look for divs that they're not empty

  let nonEmptyDivs = document.querySelectorAll("[data='nonempty']");
  let nonEmptyTabs = document.querySelectorAll("[data='non-empty-tab']");

  // remove current class from each item
  nonEmptyTabs.forEach((n) => {
    n.classList.remove("w--current");
  });

  // add current and active classes to first item in tab content
  nonEmptyDivs[0].classList.add("w--tab-active");
  nonEmptyTabs[0].classList.add("w--current");
});
