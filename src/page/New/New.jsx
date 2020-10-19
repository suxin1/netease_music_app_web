import React, { Component } from "react";

import { Page } from "../../components/Page";
import { SoundVisualElement } from "../../components/SundTrack/TestComponent";

export class New extends Component {
  render() {
    return (
      <Page topWhiteSpace>
        <SoundVisualElement />
        <div className="dd">这是消息页面</div>
      </Page>
    );
  }
}
