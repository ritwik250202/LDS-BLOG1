import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What is LDS?</h1>
          <p className={styles.desc}>
          If you have been searching for a literary joyride full of thrill, discovery and awe - the LDS blog is the destination for your quest. If you are willing to get lost in the kaleidoscope of blogs, stories, poems, reviews and so much more - you are right on time. 
We, at LDS, strive to encapsulate the expansiveness of all things 'lit' via our works. From a novice reader to a literature nerd, we have something for all of you.
            <br />
            <br />
            New articles featuring on the blog are:
• PARTING
• FOR ME
• WHY IS INDIAN MUSIC SLOWLY DEGRADING AND LOSING ORIGINALITY?
• SMOSH : HOW TWO BEST FRIENDS CREATED AND DESTROYED A YOUTUBE EMPIRE
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          The rise and indispensability of the adjective 'bingeworthy' has diluted the exuberance and gratification one gets by the activity of supreme intellect - ' Reading'. LDS avows the adjective 'Read worthy'. The LDS blog is nothing less than an irresistible page turner serving you with diversity of content, brevity of thought and sublimity of language. From a novice reader to a literature nerd , we have something for all of you.The content for this week is as follows:
            <br />
            <br /> - Monday - Meri MAA
            <br />
            <br /> - Tuesday - Supermarket Flowers
            <br />
            <br /> - Friday - Magician of Marudhara
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
