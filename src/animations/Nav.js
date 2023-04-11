export const aparecerNav = {
  initial: {
    top: -100,
  },
  animate: {
    top: 0,
    staggerChildren: 0.5,
  },
  transition: {
    duration: 0.5,
  },
};
export const container = {
  hidden: { x: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const listItemEven = {
  hidden: {
    x: 1000,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const listItemOdd = {
  hidden: {
    x: -1000,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};
export const aparecerLinks = {
  initial: { bottom: -100 },
  animate: { bottom: 0 },
  transition: {
    duration: 0.2,
  },
};
