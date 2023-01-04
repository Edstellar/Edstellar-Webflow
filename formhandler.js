// let fullName,
//   workMail,
//   companyName,
//   jobTitle,
//   phoneNumber,
//   country,
//   needs,
//   codePhone;

// console.log("vs")

// let bookADemoSubmit = document.querySelector("[app='submit_demo']");
// let errorBox = document.querySelector("#error-box");

// bookADemoSubmit.addEventListener("click", () => {
//   fullName = document.querySelector("[name='full_name']").value;
//   workMail = document.querySelector("[name='work_mail']").value;
//   companyName = document.querySelector("[name='company_name']").value;
//   jobTitle = document.querySelector("[name='job_title']").value;
//   phoneNumber = document.querySelector("[type='tel']").value;
//   codePhone = document.querySelector("#dialCode").value;
//   country = document.querySelector(".country-selector span").innerText;
//   needs = document.querySelector("[name='training-needs']").value;

//   let formSubmit = {
//     fullName: fullName,
//     workMail: workMail,
//     companyName: companyName,
//     jobTitle: jobTitle,
//     phoneNumber: phoneNumber,
//     codePhone: codePhone,
//     country: country,
//     needs: needs,
//   };

//   let headersList = {
//     Accept: "*/*",
//     "Content-Type": "application/json",
//   };

//   let bodyContent = JSON.stringify({
//     user: {
//       full_name: fullName,
//       email: workMail,
//       company_name: companyName,
//       country: country,
//       phone_number: {
//         number: phoneNumber,
//         code: codePhone,
//       },
//       job_title: jobTitle,
//       training_needs: needs,
//     },
//   });

//   if (fullName !== "" && workMail !== "" && companyName !== "" && country !== "" && phoneNumber !== "" && codePhone !== "" && jobTitle !== "" && needs !== "") {
//     errorBox.style.display = "none";
//     fetch("https://test-portal.edstellar.com/api/v1/auth/book_demo", {
//     method: "POST",
//     body: bodyContent,
//     headers: headersList,
//   })
//     .then((response) => response.json())
//     .then(() => (window.location = "/thank-you-edstellar"));
//   } else {
//     errorBox.style.display = "block";
//   }

// });
