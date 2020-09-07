import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";
import { DarkToggle } from "../Theme";
import styles from "./styles.module.css";

const Logo = require("../../assets/Logo.svg");
const HeaderTrim = require("../../assets/HeaderTrim.svg");

export default function Header({ isRoot = false }: { isRoot?: boolean }) {
  const router = useRouter();
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.centeredRow}>
            <Link href="/">
              <a className={styles.centeredRow}>
                <img src={Logo} alt="Logo" className={styles.logo} />
                <span className={styles.headerName}>Matt Elphick</span>
              </a>
            </Link>
            <div>
              <Link href="/about">
                <a
                  className={classnames(styles.headerLink, {
                    [styles.current]: router.pathname.startsWith("/about"),
                  })}
                >
                  About
                </a>
              </Link>
              <Link href="/posts">
                <a
                  className={classnames(styles.headerLink, {
                    [styles.current]: router.pathname.startsWith("/posts"),
                  })}
                >
                  Posts
                </a>
              </Link>
            </div>
            <DarkToggle />
          </div>
          {isRoot ? (
            <div className={styles.centeredRow}>
              <div className={styles.headerDesc}>
                Hey, I’m Matt, a full-stack developer who enjoys working with
                people to make products to solve problems.
              </div>
              <div className={styles.headerSocials}>
                <a
                  href="https://github.com/maael"
                  className={styles.headerSocialIcon}
                >
                  <UseAnimations animation={github} size={35} />
                </a>
                <a
                  href="https://linkedin.com/melphick"
                  className={styles.headerSocialIcon}
                >
                  <UseAnimations animation={linkedin} size={35} />
                </a>
                <a
                  href="mailto:matthew.a.elphick@gmail.com"
                  className={styles.headerSocialIcon}
                >
                  <UseAnimations animation={mail} size={35} />
                </a>
                <a
                  href="https://cv.mael.tech"
                  className={styles.headerSocialCVIcon}
                >
                  CV
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <img src={HeaderTrim} alt="HeaderTrim" className={styles.headerTrim} />
    </div>
  );
}
