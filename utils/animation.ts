import { Variant } from "framer-motion";

export const slider = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },

  out: {
    x: "100vw",
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
export const sidebar = {
  hidden: {
    x: "100vw",
    overflow: "hidden",
  },
  show: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  },

  out: {
    x: "100vw",
    transition: {
      delay: 0.2,
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
