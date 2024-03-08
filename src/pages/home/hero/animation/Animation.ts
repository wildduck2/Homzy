import { gsap } from "gsap/all";

export const Animation = () => {
  const tl = gsap.timeline();

  tl.set(".hero__button span", { y: 50, opacity: 0 });

  tl.fromTo(
    ".col-1__title span",
    1,
    { x: -70 },
    { x: 0, delay: 1, stagger: 0.07 },
    "+=.4",
  );
  tl.fromTo(
    ".col-1__discription span",
    1,
    { x: -70 },
    { x: 0, stagger: 0.07 },
    "<.1",
  );
  tl.fromTo(".orange__shape", 1, { x: -150 }, { x: 0 }, "<.1");

  tl.fromTo(
    ".form__wrapper",
    0.8,
    { width: 150, x: -50 },
    { width: `100%`, x: 0 },
    "<.1",
  );
  tl.fromTo(".hero__button", 1.5, { x: -100 }, { x: 0 }, "-.1");
  tl.fromTo(
    ".hero__button",
    2,
    { width: 0, borderRadius: 100 },
    { width: "132", borderRadius: 5, clearProps: "all" },
    "<.3",
  );
  tl.fromTo(
    ".hero__button span",
    0.5,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 },
    "<1.9",
  );
  tl.fromTo(".map", 1, { x: -60 }, { x: 0 }, "<-.7");
  tl.fromTo(".search", 0.8, { opacity: 0 }, { opacity: 1 }, "<.2");

  tl.fromTo(
    ".box",
    1,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      onstart: () => {
        let n = 1;
        setInterval(() => {
          const item = document.querySelectorAll(".value__title");
          n += 1;
          item.forEach((item, index) => {
            if (index === 0) {
              if (n > 19) return;
              item!.innerHTML = `${n}K<span>+</span>`;
            }
            if (index === 1) {
              if (n > 12) return;
              item!.innerHTML = `${n}K<span>+</span>`;
            }
            if (index === 2) {
              if (n > 28) return;
              item!.innerHTML = `${n}<span>+</span>`;
            }
          });
        }, 60);
      },
    },
    "<.1",
  );

  tl.fromTo(
    ".hero__container .col-2",
    0.8,
    { y: 120, opacity: 0.5 },
    { y: 0, opacity: 1 },
    "<-.7",
  );
};
