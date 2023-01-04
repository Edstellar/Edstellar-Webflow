window.addEventListener("load", () => {
  let allFaqWrapper = document.querySelector("#all-faqs-wrapper");
  let restFaqWrapper = document.querySelector("#hide-if-searched");

  let faqTabs = document.querySelector("#faq-by-category");
  let tabsContent = document.querySelector(".tabs-content");
  let faqSubcategories = document.querySelector("#faq-category-sub");

  let faqTms = document.querySelectorAll("#faq-tms");
  let faqPayments = document.querySelectorAll("#payments");
  let faqSecond = document.querySelectorAll("#second");
  let faqThird = document.querySelectorAll("#third");
  let faqLast = document.querySelectorAll("#last");

  const checkFaqSearch = setInterval(function () {
    let faqInput = document.querySelector("#all-faq-search").value;
    console.log(faqInput.length);
    if (faqInput.length > 0) {
      allFaqWrapper.style.display = "block";
      restFaqWrapper.style.display = "none";
    } else {
      allFaqWrapper.style.display = "none";
      restFaqWrapper.style.display = "block";
    }
  }, 100);

  faqTabs.insertBefore(faqSubcategories, tabsContent);

  let subLinks = Array.from(faqSubcategories.children);
  console.log(subLinks);
  subLinks.forEach((n) => {
    n.addEventListener("click", (e) => {
      subLinks.forEach((n) => {
        n.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  subLinks[0].addEventListener("click", () => {
    faqTms.forEach((n) => {
      n.style.display = "flex";
      faqPayments.forEach((n) => {
        n.style.display = "none";
      });
      faqSecond.forEach((n) => {
        n.style.display = "none";
      });
      faqThird.forEach((n) => {
        n.style.display = "none";
      });
      faqLast.forEach((n) => {
        n.style.display = "none";
      });
    });
  });

  subLinks[1].addEventListener("click", () => {
    faqPayments.forEach((n) => {
      n.style.display = "flex";
      faqTms.forEach((n) => {
        n.style.display = "none";
      });
      faqSecond.forEach((n) => {
        n.style.display = "none";
      });
      faqThird.forEach((n) => {
        n.style.display = "none";
      });
      faqLast.forEach((n) => {
        n.style.display = "none";
      });
    });
  });
  subLinks[2].addEventListener("click", () => {
    faqSecond.forEach((n) => {
      n.style.display = "flex";
      faqPayments.forEach((n) => {
        n.style.display = "none";
      });
      faqTms.forEach((n) => {
        n.style.display = "none";
      });
      faqThird.forEach((n) => {
        n.style.display = "none";
      });
      faqLast.forEach((n) => {
        n.style.display = "none";
      });
    });
  });
  subLinks[3].addEventListener("click", () => {
    faqThird.forEach((n) => {
      n.style.display = "flex";
      faqPayments.forEach((n) => {
        n.style.display = "none";
      });
      faqTms.forEach((n) => {
        n.style.display = "none";
      });
      faqSecond.forEach((n) => {
        n.style.display = "none";
      });
      faqLast.forEach((n) => {
        n.style.display = "none";
      });
    });
  });
  subLinks[4].addEventListener("click", () => {
    faqLast.forEach((n) => {
      n.style.display = "flex";
      faqPayments.forEach((n) => {
        n.style.display = "none";
      });
      faqTms.forEach((n) => {
        n.style.display = "none";
      });
      faqSecond.forEach((n) => {
        n.style.display = "none";
      });
      faqThird.forEach((n) => {
        n.style.display = "none";
      });
    });
  });
});
