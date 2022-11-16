export const spaces = {
  0: 0,
  s2: "0.125rem",
  s4: "0.25rem",
  s6: "0.375rem",
  s8: "0.5rem",
  s10: "0.625rem",
  s12: "0.75rem",
  s16: "1rem",
  s20: "1.25rem",
  s24: "1.5rem",
  s28: "1.75rem",
  s32: "2rem",
  s48: "3rem",
  s64: "4rem",
  s80: "5rem",
};

export type Space = keyof typeof spaces;
export type Spaces = typeof spaces;
