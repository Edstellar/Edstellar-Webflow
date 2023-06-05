window.addEventListener("load",(()=>{let e=document.querySelector(".filter_header"),t=document.querySelector(".section-head.with-search"),r=document.querySelector("#picked-dropdown"),n=document.querySelector("#picked-sort-dropdown").children,c=Array.from(n);window.addEventListener("click",(e=>{try{
// console.log(e.target);
c.forEach((e=>{let t=document.getElementsByClassName("w-dropdown-link w--current");
// el[0].innerHTML = ""; //
r.innerHTML=t[0].textContent}))}catch{console.log("Catched - dropdown source error. Non-relative.")}}));
// console.log(pickedSortDropdown.children);
setInterval((function(){let r=document.querySelector(".filter_tags-wrapper");document.querySelector("#filter-count--value").innerHTML=r.children.length,r.children.length<1?(e.style.display="none",t.style.marginBottom="3.75em"):(e.style.display="flex",t.style.marginBottom="1.25em")}),100);document.querySelector("#training-type-list");let l=document.querySelector("#categories-list"),o=document.querySelector("#subcategories-list"),i=(document.querySelectorAll('[name="training"]'),Array.from(document.querySelectorAll('[name="category"]'))),a=Array.from(document.querySelectorAll('[name="subcategory"]')),u=document.querySelectorAll("input[filter='training']"),d=document.querySelectorAll("input[filter='category']");setInterval((function(){let e=document.querySelectorAll("input[filter='training']:checked"),t=document.querySelectorAll("input[filter='category']:checked");document.querySelectorAll("input[filter='subcategory']:checked");if(e.length<1){i.filter((e=>"category"===e.getAttribute("name"))).forEach((e=>{l.append(e)}))}if(t.length<1){a.filter((e=>"subcategory"===e.getAttribute("name"))).forEach((e=>{o.append(e);
// console.log("here");
}))}}),500);window.addEventListener("click",(()=>{}));let g=[],y=[];u.forEach((e=>{e.addEventListener("change",(t=>{if(t.target.checked){let t=e.getAttribute("training"),r=i.filter((e=>e.getAttribute("type")===t));r.forEach((e=>{g.push(e)})),l.innerHTML="",r.forEach((e=>{l.append(e)})),g.forEach((e=>{l.append(e)}))}else{let t=e.getAttribute("training"),r=g.filter((e=>e.getAttribute("type")!==t));g=r,
// console.log(leftItems);
l.innerHTML="",r.forEach((e=>{l.append(e)}))}}))})),d.forEach((e=>{e.addEventListener("change",(t=>{
// console.log(typeInputs);
if(t.target.checked){let r=e.getAttribute("data-label"),n=a.filter((e=>e.getAttribute("category")===r)),c=t.target.attributes[0].value;document.querySelector(`input[training='${c}']`).checked=!0,n.forEach((e=>{y.push(e)})),o.innerHTML="",n.forEach((e=>{o.append(e)})),y.forEach((e=>{o.append(e)}))}else{let r=e.getAttribute("data-label"),n=y.filter((e=>e.getAttribute("category")!==r)),c=t.target.attributes[0].value;document.querySelector(`input[training='${c}']`).checked=!1,y=n,
// console.log(leftSubItems);
o.innerHTML="",n.forEach((e=>{o.append(e)}))}}))}))}));
