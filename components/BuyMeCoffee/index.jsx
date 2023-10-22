import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
          href="https://buy.stripe.com/5kA7sL9574SG7xCf23"
          target="_blank"
          className={styles.buyCoffeeButton}
          rel="noopener">
          Buy me a coffe...
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
