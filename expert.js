// navigation bar in expert page

let options = {
  threshold: 1.0,
};

const about = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-about");
      navLink.classList.add("active");
      // console.log(entry);
    } else {
      let navLink = document.querySelector("#expert-about");
      navLink.classList.remove("active");
    }
  });
}, options);

const trains = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-trains");
      navLink.classList.add("active");
      // console.log(entry.target);
    } else {
      let navLink = document.querySelector("#expert-trains");
      navLink.classList.remove("active");
    }
  });
}, options);

const experience = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-experience");
      navLink.classList.add("active");
      // console.log(entry.target);
    } else {
      let navLink = document.querySelector("#expert-experience");
      navLink.classList.remove("active");
    }
  });
}, options);

const education = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-education");
      navLink.classList.add("active");
      // console.log(entry.target);
    } else {
      let navLink = document.querySelector("#expert-education");
      navLink.classList.remove("active");
    }
  });
}, options);

const history = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-skills");
      navLink.classList.add("active");
      // console.log(entry.target);
    } else {
      let navLink = document.querySelector("#expert-history");
      navLink.classList.remove("active");
    }
  });
}, options);

const projects = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-projects");
      navLink.classList.add("active");
      // console.log(entry.target);
    } else {
      let navLink = document.querySelector("#expert-projects");
      navLink.classList.remove("active");
    }
  });
}, options);

const articles = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sideBar = document.querySelector(".profile--sidebar-elements");
      let allNavLinks = Array.from(sideBar.getElementsByTagName("a"));
      allNavLinks.forEach((n) => {
        n.classList.remove("active");
      });
      let navLink = document.querySelector("#expert-articles");
      navLink.classList.add("active");
      // console.log(entry.target);
    } else {
      let navLink = document.querySelector("#expert-articles");
      navLink.classList.remove("active");
    }
  });
}, options);

about.observe(document.querySelector("#about"));
trains.observe(document.querySelector("#trains"));
experience.observe(document.querySelector("#experience"));
education.observe(document.querySelector("#education"));
history.observe(document.querySelector("#skills"));
projects.observe(document.querySelector("#projects"));
articles.observe(document.querySelector("#articles"));
