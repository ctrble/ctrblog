export const staggeredContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const contentVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    rotate: 10,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    rotate: 0,
  },
};

export const wrapperVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  loaded: {
    opacity: 1,
    scale: 1,
  },
};

export const wrapperTransitions = {
  duration: 0.5,
  easing: 'ease-in-out',
};
