import React, { Component } from "react";
import propTypes from "prop-types";

export default class SoundTrack extends Component {
  animationFlag = true;

  componentDidMount() {
    this.renderFrame();
  }

  componentWillUnmount() {
    console.log(this.props);
    this.animationFlag = false;
  }

  renderFrame = () => {
    const { analyzer } = this.props;
    if (this.animationFlag) requestAnimationFrame(this.renderFrame);

    if (analyzer && !this.dataArray) {
      const dataLength = analyzer.frequencyBinCount;
      this.dataArray = new Uint8Array(dataLength);
    }

    analyzer.getByteFrequencyData(this.dataArray);
    console.log(this.dataArray);
  };

  render() {
    return <div>sound track</div>;
  }
}
