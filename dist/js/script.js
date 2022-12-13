"use strict";

(() => {
  "use strict";

  let e = window.innerWidth - document.body.clientWidth;

  function t() {
    document.body.style.marginRight = e + "px", document.querySelector(".anchor-wrapper").style.display = "none", document.body.classList.add("lock");
  }

  function n() {
    setTimeout(() => {
      document.body.style.marginRight = "0px", document.body.classList.remove("lock"), document.querySelector(".anchor-wrapper").style.display = "";
    }, 300);
  }

  function l(e, t, n) {
    const l = document.querySelectorAll(e);
    l.forEach(e => {
      l[0].classList.add("showAccordText"), l[0].nextElementSibling.style.maxHeight = l[0].nextElementSibling.scrollHeight + "px", l[0].firstElementChild.classList.add(t), l[0].classList.add(n), e.addEventListener("click", function () {
        l.forEach(e => {
          e.hasAttribute("data-homeAccord") && (e.classList.remove("showAccordText"), e.nextElementSibling.style.maxHeight = "0px", e.firstElementChild.classList.remove(t), e.classList.remove(n));
        }), this.classList.toggle("showAccordText"), this.firstElementChild.classList.toggle(t), this.classList.toggle(n), this.classList.contains("showAccordText") ? this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px" : this.nextElementSibling.style.maxHeight = "0px";
      });
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    !function () {
      const e = document.querySelector(".burger-btn"),
            l = document.querySelector(".mobile-close-button"),
            i = document.querySelector(".mobile-overlay"),
            o = document.querySelector(".mobile-wrapper");

      function s() {
        i.classList.toggle("active"), o.classList.toggle("active");
      }

      document.querySelectorAll(".mobile-item "), e.addEventListener("click", () => {
        s(), t();
      }), [l, i].forEach(e => {
        e.addEventListener("click", t => {
          t.target != i && e != l || (n(), s());
        });
      });
    }(), t(), n(), l(".h-th-accord__titleRow", "active-accordeon"), l(".ds3__titleRow", "ds3-iconActive", "ds3__titleActive"), function () {
      const e = document.querySelector(".carousel-main"),
            t = document.querySelector(".slider-row "),
            n = document.querySelectorAll(".slider-image");

      try {
        let l = getComputedStyle(t).width,
            i = parseInt(l) / n.length * 100 / parseInt(l) + "%";

        function o() {
          e.style.justifyContent = "flex-start", t.style.transform = `translate(-${i})`;
        }

        setInterval(o, 5e3), t.addEventListener("transitionend", () => {
          t.append(t.firstElementChild), t.style.transition = "none", t.style.transform = "translate(0)", setTimeout(() => {
            t.style.transition = "all 2.5s";
          });
        });
        const s = document.querySelectorAll(".ind");
        let c = 1;

        function r(e) {
          e > s.length && (c = 1), s.forEach(e => {
            e.classList.remove("active");
          }), s[c - 1].classList.add("active");
        }

        function a() {
          setInterval(() => {
            r(c += 1);
          }, 5e3);
        }

        r(), a();
      } catch (d) {}
    }(), function (e, t, n, l, i) {
      const o = document.querySelector(".counter-row"),
            s = document.querySelector(".counter-digit__1"),
            c = document.querySelector(".counter-digit__2"),
            r = document.querySelector(".counter-digit__3"),
            a = document.querySelector(".counter-digit__4");
      window.addEventListener("scroll", function e() {
        try {
          if (o.getBoundingClientRect().top < window.innerHeight - 150) {
            let t = (t, n, l) => {
              let i,
                  o = 0,
                  s = t,
                  c = n;
              i = setInterval(() => {
                o += s, l.innerHTML = o, o >= c && clearInterval(i), window.removeEventListener("scroll", e);
              }, 2e3 / (c / s));
            };

            t(1, 9, s), t(40, 2040, c), t(2, 94, r), t(1, 29, a);
          }
        } catch (e) {}
      });
    }(), function (e, t, n) {
      const l = document.querySelector("[data-contacts]"),
            i = document.querySelectorAll(".h9__input"),
            o = document.querySelector(".h9__textarea");
      l.addEventListener("submit", e => {
        e.preventDefault();
        let t = 0;
        i.forEach(e => {
          e.value.length > 0 && o.value.length > 0 && (t++, console.log(t), t == i.length && (l.lastElementChild.classList.remove("active-warn"), l.lastElementChild.classList.add("active-form"), l.lastElementChild.innerHTML = "сообщение отправлено", setTimeout(() => {
            l.reset();
          }, 1500)));
        }), i.forEach(e => {
          0 != e.value.length && 0 != o.value.length || (l.lastElementChild.innerHTML = "заполните все поля", l.lastElementChild.classList.add("active-warn"));
        }), l.addEventListener("input", e => {
          e.preventDefault(), l.lastElementChild.classList.remove("active-form"), l.lastElementChild.classList.remove("active-warn"), l.lastElementChild.innerHTML = "отправить сообщение";
        });
      });
    }(), function (e, t) {
      const n = document.querySelector("[data-submit]"),
            l = document.querySelectorAll(".h10-top__input");
      n.addEventListener("submit", e => {
        e.preventDefault();
        let t = 0;
        l.forEach(e => {
          e.value.length > 0 && (t++, console.log(t), t == l.length && (n.lastElementChild.classList.remove("active-warn"), n.lastElementChild.classList.add("active-form"), n.lastElementChild.innerHTML = "Подписка!", setTimeout(() => {
            n.reset();
          }, 1500)));
        }), l.forEach(e => {
          0 == e.value.length && (n.lastElementChild.innerHTML = "ваш email?", n.lastElementChild.classList.add("active-warn"));
        }), n.addEventListener("input", e => {
          e.preventDefault(), n.lastElementChild.classList.remove("active-form"), n.lastElementChild.classList.remove("active-warn"), n.lastElementChild.innerHTML = "подписаться";
        });
      });
    }(), function (e) {
      const t = document.querySelectorAll("a"),
            n = document.querySelector(e);
      let l = 0;

      function i(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        const n = document.querySelector(e);
        let l = window.pageYOffset,
            i = n.offsetTop - t - l,
            o = null;
        window.requestAnimationFrame(function e(t) {
          o || (o = t);
          let n = t - o;
          var s, c;
          window.scrollTo(0, (s = n, c = l, -i / 2 * (Math.cos(Math.PI * s / 1e3) - 1) + c)), n < 1e3 && window.requestAnimationFrame(e);
        });
      }

      window.addEventListener("scroll", function () {
        let e = window.pageYOffset,
            t = window.innerHeight,
            i = document.documentElement.scrollHeight;
        document.body.getBoundingClientRect().top > l && e >= t - e || e + t == i ? n.classList.add("anchor-active") : n.classList.remove("anchor-active"), l = document.body.getBoundingClientRect().top;
      }), t.forEach(e => {
        e.addEventListener("click", function (t) {
          let n = e.getAttribute("href");
          e.hasAttribute("data-link") && (t.preventDefault(), i(n)), e.hasAttribute("data-delay") && (t.preventDefault(), setTimeout(() => {
            i(n, 80);
          }, 300));
        });
      });
    }(".anchor-wrapper");
  });
})();