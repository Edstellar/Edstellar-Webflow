function resizeTable() {
  let tableTitle = document.querySelector("#table-title");
  let edstellarTitle = document.querySelector(".edstellar");
  let otherTitle = document.querySelector(".other");
  let companyTitle = document.querySelector(".companies");

  let tHeader = document.querySelector("#t-title");
  let tEdstellar = document.querySelector(".t-edstellar");
  let tOther = document.querySelector(".t-other");
  let tCompanies = document.querySelector(".t-companies");

  let tableTitleWidth = window.getComputedStyle(tableTitle).width;
  let edstellarTitleWidth = window.getComputedStyle(edstellarTitle).width;
  let otherTitleWidth = window.getComputedStyle(otherTitle).width;
  let companyTitleWidth = window.getComputedStyle(companyTitle).width;

  tHeader.style.width = tableTitleWidth;
  tEdstellar.style.width = edstellarTitleWidth;
  tOther.style.width = otherTitleWidth;
  tCompanies.style.width = companyTitleWidth;

  console.log(tableTitleWidth);
}

window.addEventListener("load", resizeTable);
window.addEventListener("resize", resizeTable);
