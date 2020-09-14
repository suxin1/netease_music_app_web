import React from "react";

import {Logo} from "../Logo";

export default {
  title: "VC/Logo",
  component: Logo,
}

export const LogoAnime = (args) => <Logo {...args} />;
LogoAnime.args = {
  size: "20vw"
};


export const LogoSize2 = (args) => <Logo {...args} />;
LogoAnime.args = {
  size: "40vw"
};
