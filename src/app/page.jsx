import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.jpg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Literary and Debating Society.
        </h1>
        <p className={styles.desc}>
          LDS - Black and white is what you see.
        </p>
        <Button url="/portfolio" text="See Our Events"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
