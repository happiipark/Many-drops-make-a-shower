import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span classNmae="something">CSS Module!2</span>
    </div>
  );
};

export default CSSModule;
