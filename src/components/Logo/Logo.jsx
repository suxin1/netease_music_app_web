import React from 'react';
import "./index.css";

import {logoAnimation} from "./anime";

class Index extends React.Component {
  componentDidMount() {
    const logo = logoAnimation();
    logo.play();
  }

  render() {
    return (
      <div className="main-logo">
        <div className="logo-animation-wrapper">
          <div className="logo-animation">
            <div className="anime-logo">
              <div className="anime-logo-signs">
                <div className="logo-letter letter-a">
                  <svg className="bounced" viewBox="0 0 200 240" width="200" height="240">
                    <path className="line"
                          d="M30 20h130c9.996 0 10 40 10 60v140H41c-11.004 0-11-40-11-60s-.004-60 10-60h110"/>
                  </svg>
                </div>
                <div className="logo-letter letter-n">
                  <svg className="bounced" viewBox="0 0 200 240" width="200" height="240">
                    <path className="line"
                          d="M170 220V60c0-31.046-8.656-40-19.333-40H49.333C38.656 20 30 28.954 30 60v160"/>
                  </svg>
                </div>
                <div className="logo-letter letter-i">
                  <svg className="bounced" viewBox="0 0 60 240" width="60" height="240">
                    <path className="line"
                          d="M30 20v200"
                          data-d2="M30 100v120"
                    />
                  </svg>
                </div>
                <div className="logo-letter letter-m">
                  <svg className="bounced" viewBox="0 0 340 240" width="340" height="240" fill="none"
                       fill-rule="evenodd">
                    <path className="line"
                          d="M240,220 L240,60 C240,28.954305 231.344172,20 220.666667,20 C171.555556,20 254.832031,20 170,20 C85.1679688,20 168.444444,20 119.333333,20 C108.655828,20 100,28.954305 100,60 L100,220"
                          data-d2="M310,220 L310,60 C310,28.954305 301.344172,20 290.666667,20 C241.555556,20 254.832031,110 170,110 C85.1679688,110 98.4444444,20 49.3333333,20 C38.6558282,20 30,28.954305 30,60 L30,220"
                          data-d3="M310,220 L310,60 C310,28.954305 301.344172,20 290.666667,20 C241.555556,20 254.832031,20 170,20 C85.1679688,20 98.4444444,20 49.3333333,20 C38.6558282,20 30,28.954305 30,60 L30,220"
                    />
                  </svg>
                </div>
                <div className="logo-letter letter-e">
                  <svg className="bounced" viewBox="0 0 200 240" width="200" height="240">
                    <path className="line"
                          d="M50 140h110c10 0 10-40 10-60s0-60-10-60H40c-10 0-10 40-10 60v80c0 20 0 60 10 60h130"/>
                  </svg>
                </div>
                <div className="bounce">
                  <svg viewBox="0 0 1000 260" width="1000" height="260" fill="none">
                    <path
                      d="M630,240 C630,111.154418 608.971354,40 530.160048,40 C451.348741,40 430,127.460266 430,210"/>
                  </svg>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
