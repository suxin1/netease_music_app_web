import React, { Component } from "react";
import SoundTrack from "../index";

export default {
  title: "Component/SoundTrack",
  Component: SoundTrack,
};

class SoundVisualElement extends Component {
  constructor() {
    super();
    this.audio = React.createRef();

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();

    this.analyzer = this.audioCtx.createAnalyser();
    this.fftSize = 512;
  }

  componentDidMount() {
    this.sourceNode = this.audioCtx.createMediaElementSource(
      this.audio.current
    );
    this.sourceNode.connect(this.analyzer);
    this.analyzer.connect(this.audioCtx.destination);
  }

  render() {
    return (
      <>
        <audio
          ref={this.audio}
          controls
          crossOrigin="anonymous"
          src="//m8.music.126.net/21180815163607/04976f67866d4b4d11575ab418904467/ymusic/515a/5508/520b/f0cf47930abbbb0562c9ea61707c4c0b.mp3?infoId=92001"
        ></audio>
        <SoundTrack analyzer={this.analyzer} />
      </>
    );
  }
}

export const SoundVisual = () => <SoundVisualElement />;
