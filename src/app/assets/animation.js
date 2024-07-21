

export const a_r_t = {
  hidden: {
    x: +100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const a_l_t = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const a_d_r_i = {
  hidden: {
    y: +100,
    x: 250,
    opacity: 0.4,
  },
  visible: (custom) => ({
    y: 0,
    x:0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};
export const a_d_l_i = {
  hidden: {
    y: -100,
    x: -250,
    opacity: 0.2,
  },
  visible: (custom) => ({
    y: 0,
    x:0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};
export const a_d_t = {
  hidden: {
    y: +200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};