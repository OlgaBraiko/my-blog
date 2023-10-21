import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import ScreenEgg from "../ScreenEgg";

const socialNetworks = [
  {
    href: "#",
    icon: AiFillYoutube,
  },
  {
    href: "https://github.com/OlgaBraiko",
    icon: AiFillGithub,
  },
  {
    href: "#",
    icon: AiFillTwitterCircle,
  },
  {
    href: "#",
    icon: AiFillInstagram,
  },
];
const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork, index) => (
          <li key={index} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              target="_blank"
              className={styles.list}
              rel="noreferrer">
              {React.createElement(socialNetwork.icon, {
                color: "black",
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
