function runCounter() {
  var Cont = { val: 0 },
    NewVal1 = 100;
  NewVal2 = 10453;
  NewVal3 = 63;

  gsap.to(Cont, 5, {
    scrollTrigger: ".milestones-wrapper",
    val: NewVal1,
    roundProps: "val",
    onUpdate: function () {
      document.getElementById("counter1").innerHTML = Cont.val;
    },
  });

  gsap.to(Cont, 5, {
    scrollTrigger: ".milestones-wrapper",
    val: NewVal2,
    roundProps: "val",
    onUpdate: function () {
      document.getElementById("counter2").innerHTML = Cont.val;
    },
  });

  gsap.to(Cont, 5, {
    scrollTrigger: ".milestones-wrapper",
    val: NewVal3,
    roundProps: "val",
    onUpdate: function () {
      document.getElementById("counter3").innerHTML = Cont.val;
    },
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      runCounter();
      let lnk = document.createElement("link");
      lnk.type = "text/css";
      lnk.href = "https://jh1t6w.csb.app/animation.css";
      lnk.rel = "stylesheet";
      lnk.setAttribute("data", "animation");
      document.getElementsByTagName("head")[0].appendChild(lnk);
      // console.log(typeof lnk);
      return;
    } else {
      let head = document.getElementsByTagName("head")[0];
      let animationCss = head.lastChild;
      let attribute = animationCss.getAttribute("data");

      if (attribute === "animation") {
        head.removeChild(animationCss);
      } else {
      }
    }
  });
});

observer.observe(document.querySelector(".milestones-wrapper"));
