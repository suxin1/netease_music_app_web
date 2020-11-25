import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 0;
  position: relative;
`;

const CollapseBox = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.open ? "100px" : "0px")};
  background: yellow;
  overflow: hidden;
  transition: height 200ms linear;
  /* padding: 20px 10px; */
  border-bottom: 2px solid red;
`;

export class Collapse extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    open: false,
  };

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Box>
          <CollapseBox open={open}>
            <div>
              ddddddddddddddddddddddddddddfjlkas f aksdj flaj dfjalsdk
              jflkasjd;flajdsf askdfj lasdjfasjdklf jalsdkfj asdfld kas jfljasd
              kas jfljasd fladslfkja ;lsdfjlkas dfl adsfl
            </div>
          </CollapseBox>
          <button onClick={this.handleClick} type="button">
            展开
          </button>
        </Box>
      </>
    );
  }
}
