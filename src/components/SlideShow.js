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
            src="https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img1"
            className={styles.img}
          />
          <p className="legend">Bed Room</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img2"
          />
          <p className="legend">Living Room</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img3"
          />
          <p className="legend">Bath Room</p>
        </div>
      </Carousel>
    );
  }
}

export default SlideShow;
