import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../style/SlideShow.module.css";

class SlideShow extends Component {
  render() {
    return (
      <Carousel className={styles.carousel}>
        <div className={styles.div}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1443401321201-YUK6JB52OL6EMK1CHBW1/IMG_0292.JPG?format=500w"
            alt="img1"
            className={styles.img}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1443401337948-M58M2A7WT967T3Z3OGEG/IMG_0904.JPG?format=500w"
            alt="img2"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1443401405280-I9F5TZPNY8WSIGHW1L59/IMG_0070.JPG?format=300w"
            alt="img3"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default SlideShow;
