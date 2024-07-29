import type { DefaultsInstance } from "vuetify";

/**
 * A few defaults that I like
 */
export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 0,
  },
  VIcon: {
    color: twColors.gray[500],
  },
  VBtn: {
    color: "primary",
    variant: "flat",
    height: 38,
    rounded: "lg",
    size: "small",
  },
  VTextField: {
    color: "primary",
    variant: "outlined",
    density: "comfortable",
  },
};
