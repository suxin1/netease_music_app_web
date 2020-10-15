import React from "react";

import Page from "../components/Page";

export default {
  title: "Layout",
  component: Page,
};

export const Page1 = (args) => (
  <Page {...args}>
    <h1>页面盒子</h1>
  </Page>
);
Page.args = {};
