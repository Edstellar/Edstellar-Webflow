window.addEventListener("load", () => {

  let filterHeader = document.querySelector(".filter_header");
  let sectionHeadWithSearch = document.querySelector(
    ".section-head.with-search"
  );

  let pickedSort = document.querySelector("#picked-dropdown");
  let pickedSortDropdown = document.querySelector(
    "#picked-sort-dropdown"
  ).children;
  let pickedSortDropdownArr = Array.from(pickedSortDropdown);

  window.addEventListener("click", (e) => {
    try {
      // console.log(e.target);
      pickedSortDropdownArr.forEach((n) => {
        let el = document.getElementsByClassName("w-dropdown-link w--current");
        // el[0].innerHTML = ""; //
        pickedSort.innerHTML = el[0].textContent;
      });
    } catch {
      console.log("Catched - dropdown source error. Non-relative.");
    }
  });

  // console.log(pickedSortDropdown.children);

  const interval = setInterval(function () {
    let activeFiltersBox = document.querySelector(".filter_tags-wrapper");
    let activeFiltersCounter = document.querySelector("#filter-count--value");
    activeFiltersCounter.innerHTML = activeFiltersBox.children.length;
    if (activeFiltersBox.children.length < 1) {
      filterHeader.style.display = "none";
      sectionHeadWithSearch.style.marginBottom = "3.75em";
    } else {
      filterHeader.style.display = "flex";
      sectionHeadWithSearch.style.marginBottom = "1.25em";
    }
  }, 100);

  let trainingTypeList = document.querySelector("#training-type-list");
  let trainingCategoriesList = document.querySelector("#categories-list");
  let trainingSubcategoriesList = document.querySelector("#subcategories-list");

  // let subcategoriesArray = Array.from(trainingSubcategoriesList);

  let typeItems = document.querySelectorAll('[name="training"]'); // training items
  let categoryItems = Array.from(
    document.querySelectorAll('[name="category"]')
  ); // category items
  let subCategoryItems = Array.from(
    document.querySelectorAll('[name="subcategory"]')
  ); // subcategory items

  let typeInputs = document.querySelectorAll("input[filter='training']");
  let categoryInputs = document.querySelectorAll("input[filter='category']");

  const intervalD = setInterval(function () {
    let typeInputsLength = document.querySelectorAll(
      "input[filter='training']:checked"
    );
    let categoryInputsLength = document.querySelectorAll(
      "input[filter='category']:checked"
    );
    let subcategoryInputsLength = document.querySelectorAll(
      "input[filter='subcategory']:checked"
    );

    if (typeInputsLength.length < 1) {
      let filtered = categoryItems.filter(
        (n) => n.getAttribute("name") === "category"
      );

      filtered.forEach((n) => {
        trainingCategoriesList.append(n);
      });
    }

    if (categoryInputsLength.length < 1) {
      let filtered = subCategoryItems.filter(
        (n) => n.getAttribute("name") === "subcategory"
      );

      filtered.forEach((n) => {
        trainingSubcategoriesList.append(n);
        // console.log("here");
      });
    }
  }, 500);

  window.addEventListener("click", () => {});

  let pickedCategories = [];
  let pickedSubCategories = [];

  typeInputs.forEach((n) => {
    n.addEventListener("change", (e) => {
      if (e.target.checked) {
        let label = n.getAttribute("training");
        let filtered = categoryItems.filter(
          (n) => n.getAttribute("type") === label
        );
        filtered.forEach((n) => {
          pickedCategories.push(n);
        });
        trainingCategoriesList.innerHTML = "";
        filtered.forEach((n) => {
          trainingCategoriesList.append(n);
        });

        pickedCategories.forEach((n) => {
          trainingCategoriesList.append(n);
        });
      } else {
        let label = n.getAttribute("training");
        let leftItems = pickedCategories.filter(
          (n) => n.getAttribute("type") !== label
        );

        pickedCategories = leftItems;
        // console.log(leftItems);
        trainingCategoriesList.innerHTML = "";

        leftItems.forEach((n) => {
          trainingCategoriesList.append(n);
        });
      }
    });
  });

  categoryInputs.forEach((n) => {
    n.addEventListener("change", (e) => {
      // console.log(typeInputs);
      if (e.target.checked) {
        let categoryLabel = n.getAttribute("data-label");
        let filtered = subCategoryItems.filter(
          (n) => n.getAttribute("category") === categoryLabel
        );
        let pickedCategory = e.target.attributes[0].value;
        let relatedInput = document.querySelector(
          `input[training='${pickedCategory}']`
        );
        relatedInput.checked = true;

        filtered.forEach((n) => {
          pickedSubCategories.push(n);
        });
        trainingSubcategoriesList.innerHTML = "";
        filtered.forEach((n) => {
          trainingSubcategoriesList.append(n);
        });

        pickedSubCategories.forEach((n) => {
          trainingSubcategoriesList.append(n);
        });
      } else {
        let categoryLabel = n.getAttribute("data-label");
        let leftSubItems = pickedSubCategories.filter(
          (n) => n.getAttribute("category") !== categoryLabel
        );
        let pickedCategory = e.target.attributes[0].value;
        let relatedInput = document.querySelector(
          `input[training='${pickedCategory}']`
        );
        relatedInput.checked = false;
        pickedSubCategories = leftSubItems;
        // console.log(leftSubItems);
        trainingSubcategoriesList.innerHTML = "";

        leftSubItems.forEach((n) => {
          trainingSubcategoriesList.append(n);
        });
      }
    });
  });
});
