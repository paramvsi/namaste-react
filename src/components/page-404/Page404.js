import React from "react";
import styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colSm12}>
            <div className={styles.colSm10}>
              <div className={styles.four_zero_four_bg}>
                <h1 className={styles.textCenter}>404</h1>
              </div>

              <div className={styles.contant_box_404}>
                <h3 className={styles.h2}>Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/" className={styles.link_404}>
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;
