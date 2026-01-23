import type { Directive } from "vue";

export type LazyLoadOptions = {
  once?: boolean;
  threshold?: number | number[];
  rootMargin?: string;
  animation?: "fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right";
  duration?: number;
  delay?: number;
};

const normalizeOptions = (
  value: LazyLoadOptions | undefined,
): Required<LazyLoadOptions> => ({
  once: value?.once ?? true,
  threshold: value?.threshold ?? 0.12,
  rootMargin: value?.rootMargin ?? "0px 0px -8% 0px",
  animation: value?.animation ?? "fade-up",
  duration: value?.duration ?? 520,
  delay: value?.delay ?? 0,
});

export const lazyLoad: Directive<HTMLElement, LazyLoadOptions | undefined> = {
  mounted(el, binding) {
    const options = normalizeOptions(binding.value);

    el.classList.add("lazy-load");
    el.dataset.lazyAnim = options.animation;
    el.style.setProperty("--lazy-duration", `${options.duration}ms`);
    el.style.setProperty("--lazy-delay", `${options.delay}ms`);

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.classList.add("is-visible");
          if (options.once) observer.unobserve(el);
        });
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      },
    );

    observer.observe(el);
  },
};
