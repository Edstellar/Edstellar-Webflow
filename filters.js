// (function () {
//   function r(e, n, t) {
//     function o(i, f) {
//       if (!n[i]) {
//         if (!e[i]) {
//           var c = "function" == typeof require && require;
//           if (!f && c) return c(i, !0);
//           if (u) return u(i, !0);
//           var a = new Error("Cannot find module '" + i + "'");
//           throw ((a.code = "MODULE_NOT_FOUND"), a);
//         }
//         var p = (n[i] = { exports: {} });
//         e[i][0].call(
//           p.exports,
//           function (r) {
//             var n = e[i][1][r];
//             return o(n || r);
//           },
//           p,
//           p.exports,
//           r,
//           e,
//           n,
//           t
//         );
//       }
//       return n[i].exports;
//     }
//     for (
//       var u = "function" == typeof require && require, i = 0;
//       i < t.length;
//       i++
//     )
//       o(t[i]);
//     return o;
//   }
//   return r;
// })()(
//   {
//     1: [
//       function (require, module, exports) {
//         var COMPLETE = "complete",
//           CANCELED = "canceled";
//         function raf(e) {
//           if ("requestAnimationFrame" in window)
//             return window.requestAnimationFrame(e);
//           setTimeout(e, 16);
//         }
//         function setElementScroll(e, t, n) {
//           Math.max(0, t),
//             Math.max(0, n),
//             e.self === e
//               ? e.scrollTo(t, n)
//               : ((e.scrollLeft = t), (e.scrollTop = n));
//         }
//         function getTargetScrollLocation(e, t) {
//           var n,
//             l,
//             i,
//             o,
//             r,
//             a,
//             s,
//             c = e.align,
//             f = e.target.getBoundingClientRect(),
//             d = c && null != c.left ? c.left : 0.5,
//             u = c && null != c.top ? c.top : 0.5,
//             g = c && null != c.leftOffset ? c.leftOffset : 0,
//             m = c && null != c.topOffset ? c.topOffset : 0,
//             h = d,
//             p = u;
//           if (e.isWindow(t))
//             (a = Math.min(f.width, t.innerWidth)),
//               (s = Math.min(f.height, t.innerHeight)),
//               (l = f.left + t.pageXOffset - t.innerWidth * h + a * h),
//               (i = f.top + t.pageYOffset - t.innerHeight * p + s * p),
//               (l -= g),
//               (i -= m),
//               (l = e.align.lockX ? t.pageXOffset : l),
//               (i = e.align.lockY ? t.pageYOffset : i),
//               (o = l - t.pageXOffset),
//               (r = i - t.pageYOffset);
//           else {
//             (a = f.width), (s = f.height), (n = t.getBoundingClientRect());
//             var E = f.left - (n.left - t.scrollLeft),
//               S = f.top - (n.top - t.scrollTop);
//             (l = E + a * h - t.clientWidth * h),
//               (i = S + s * p - t.clientHeight * p),
//               (l -= g),
//               (i -= m),
//               (l = Math.max(Math.min(l, t.scrollWidth - t.clientWidth), 0)),
//               (i = Math.max(Math.min(i, t.scrollHeight - t.clientHeight), 0)),
//               (l = e.align.lockX ? t.scrollLeft : l),
//               (i = e.align.lockY ? t.scrollTop : i),
//               (o = l - t.scrollLeft),
//               (r = i - t.scrollTop);
//           }
//           return { x: l, y: i, differenceX: o, differenceY: r };
//         }
//         function animate(e) {
//           var t = e._scrollSettings;
//           if (t) {
//             var n = t.maxSynchronousAlignments,
//               l = getTargetScrollLocation(t, e),
//               i = Date.now() - t.startTime,
//               o = Math.min((1 / t.time) * i, 1);
//             if (t.endIterations >= n)
//               return (
//                 setElementScroll(e, l.x, l.y),
//                 (e._scrollSettings = null),
//                 t.end(COMPLETE)
//               );
//             var r = 1 - t.ease(o);
//             if (
//               (setElementScroll(
//                 e,
//                 l.x - l.differenceX * r,
//                 l.y - l.differenceY * r
//               ),
//               i >= t.time)
//             )
//               return (
//                 t.endIterations++,
//                 t.scrollAncestor && animate(t.scrollAncestor),
//                 void animate(e)
//               );
//             raf(animate.bind(null, e));
//           }
//         }
//         function defaultIsWindow(e) {
//           return e.self === e;
//         }
//         function transitionScrollTo(e, t, n, l, i) {
//           var o,
//             r = !t._scrollSettings,
//             a = t._scrollSettings,
//             s = Date.now(),
//             c = { passive: !0 };
//           function f(e) {
//             (t._scrollSettings = null),
//               t.parentElement &&
//                 t.parentElement._scrollSettings &&
//                 t.parentElement._scrollSettings.end(e),
//               n.debug && console.log("Scrolling ended with type", e, "for", t),
//               i(e),
//               o &&
//                 (t.removeEventListener("touchstart", o, c),
//                 t.removeEventListener("wheel", o, c));
//           }
//           a && a.end(CANCELED);
//           var d = n.maxSynchronousAlignments;
//           return (
//             null == d && (d = 3),
//             (t._scrollSettings = {
//               startTime: s,
//               endIterations: 0,
//               target: e,
//               time: n.time,
//               ease: n.ease,
//               align: n.align,
//               isWindow: n.isWindow || defaultIsWindow,
//               maxSynchronousAlignments: d,
//               end: f,
//               scrollAncestor: l,
//             }),
//             ("cancellable" in n && !n.cancellable) ||
//               ((o = f.bind(null, CANCELED)),
//               t.addEventListener("touchstart", o, c),
//               t.addEventListener("wheel", o, c)),
//             r && animate(t),
//             o
//           );
//         }
//         function defaultIsScrollable(e) {
//           return (
//             "pageXOffset" in e ||
//             ((e.scrollHeight !== e.clientHeight ||
//               e.scrollWidth !== e.clientWidth) &&
//               "hidden" !== getComputedStyle(e).overflow)
//           );
//         }
//         function defaultValidTarget() {
//           return !0;
//         }
//         function findParentElement(e) {
//           if (e.assignedSlot) return findParentElement(e.assignedSlot);
//           if (e.parentElement)
//             return "body" === e.parentElement.tagName.toLowerCase()
//               ? e.parentElement.ownerDocument.defaultView ||
//                   e.parentElement.ownerDocument.ownerWindow
//               : e.parentElement;
//           if (e.getRootNode) {
//             var t = e.getRootNode();
//             if (11 === t.nodeType) return t.host;
//           }
//         }
//         module.exports = function (e, t, n) {
//           if (e) {
//             "function" == typeof t && ((n = t), (t = null)),
//               t || (t = {}),
//               (t.time = isNaN(t.time) ? 1e3 : t.time),
//               (t.ease =
//                 t.ease ||
//                 function (e) {
//                   return 1 - Math.pow(1 - e, e / 2);
//                 }),
//               (t.align = t.align || {});
//             var l = findParentElement(e),
//               i = 1,
//               o = t.validTarget || defaultValidTarget,
//               r = t.isScrollable;
//             t.debug &&
//               (console.log("About to scroll to", e),
//               l ||
//                 console.error(
//                   "Target did not have a parent, is it mounted in the DOM?"
//                 ));
//             for (var a = []; l; )
//               if (
//                 (t.debug && console.log("Scrolling parent node", l),
//                 o(l, i) &&
//                   (r ? r(l, defaultIsScrollable) : defaultIsScrollable(l)) &&
//                   (i++, a.push(l)),
//                 !(l = findParentElement(l)))
//               ) {
//                 s(COMPLETE);
//                 break;
//               }
//             return a.reduce(
//               (n, l, i) => transitionScrollTo(e, l, t, a[i + 1], s),
//               null
//             );
//           }
//           function s(e) {
//             --i || (n && n(e));
//           }
//         };
//       },
//       {},
//     ],
//     2: [
//       function (require, module, exports) {
//         window.scrollIntoView = require("./scrollIntoView");
//       },
//       { "./scrollIntoView": 1 },
//     ],
//   },
//   {},
//   [2]
// );

window.addEventListener("load", () => {
  // let courseSearchTrigger = document.querySelector("#course-search-trigger");
  // let coursesFilter = document.querySelector("#filters");
  // let courseSearchInput = document.querySelector("#course-search-input");
  // let searchTrigger = document.querySelector("#search-tirgger");
  // let searchMirrorInput = document.querySelector("#mirrored-input");

  // let searchMain = document.querySelector("#course-search-input");

  // let scrollAnchor = document.querySelector(".scroll-anchor");

  // searchMain.addEventListener("input", () => {
  //   searchMirrorInput.value = "";
  // });

  // let scrollBtn = document.querySelector("#scroll-btn");

  // window.addEventListener("keypress", (event) => {
  //   if (event.key === "Enter") {
  //     window.scrollIntoView(coursesFilter, {
  //       time: 300,
  //     });
  //     courseSearchInput.focus();
  //   }
  // });

  // scrollBtn.addEventListener("click", () => {
  //   window.scrollIntoView(coursesFilter, {
  //     time: 300,
  //   });
  //   courseSearchInput.focus();
  // });

  // let showAll = document.querySelector("#show-all");
  // let categoryPillsBox = document.querySelector(".category-tags-wrapper");

  // categoryPillsBox.insertBefore(showAll, categoryPillsBox.firstChild);

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
