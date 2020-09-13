import {MINIMAL_VIEWPORTS} from "@storybook/addon-viewport";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      iphone12: {
        name: 'iphone 12',
        styles: {
          width: '533px',
          height: '801px',
          padding: 0,
        },
      },
    },
  },
};
