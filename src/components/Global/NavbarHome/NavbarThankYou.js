import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link href="https://www.learnbay.co/">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              priority={true}
              loading="eager"
              height="60"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
