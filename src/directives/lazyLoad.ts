import type { Directive } from "vue";

export const lazyLoad: Directive<HTMLElement, void> = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.visibility = "visible";
          observer.unobserve(el);
        }
      });
    });

    el.style.visibility = "hidden";
    observer.observe(el);
  },
};

