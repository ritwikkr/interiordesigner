import React from "react";
import styles from "../style/Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects} id="ourproject">
      <div className={styles.head}>
        <h1 className={styles.h1}>Our Projects</h1>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.project}>
            <div className={styles.image}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1460520718904-TQXCZ3AVZKKHT6WHD2HR/image-asset.jpeg?format=750w"
                alt="project1"
                className={styles.pic}
              />
            </div>
            <div className={styles.title}>Current Projects</div>
          </div>
          <div className={styles.project}>
            <div className={styles.image}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1460521590756-FEO8TA0IFRT37Q2G9ORP/image-asset.jpeg?format=750w"
                alt="project2"
                className={styles.pic}
              />
            </div>
            <div className={styles.title}>Residential</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.project}>
            <div className={styles.image}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1443400496135-W25IEGSFAQEKJ04NYYBD/Screenshot+2015-09-27+19.00.05.png?format=500w"
                alt="project1"
                className={styles.pic}
              />
            </div>
            <div className={styles.title}>Hospitality</div>
          </div>
          <div className={styles.project}>
            <div className={styles.image}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1443413163868-DJNHIHX0M5GG4FHVCGZT/IMG_3079.JPG?format=500w"
                alt="project2"
                className={styles.pic}
              />
            </div>
            <div className={styles.title}>
              Product Design & Custom Fabrication
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.project}>
            <div className={styles.image}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5411ffcfe4b065f40cc78e37/1410545335020-M4SVJRAJZNO9IZD52G9I/image-asset.jpeg?format=750w"
                alt="project1"
                className={styles.pic}
              />
            </div>
            <div className={styles.title}>Multi Family</div>
          </div>
          <div className={styles.project}>
            <div className={styles.image}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/55bc7122e4b057acabaf7290/1460521660693-VXUBNO78I7SD55GHS9FD/image-asset.jpeg?format=750w"
                alt="project2"
                className={styles.pic}
              />
            </div>
            <div className={styles.title}>Commercial</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
