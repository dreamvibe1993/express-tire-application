import React from 'react';
import { LabelSecondary } from "../Label/Secondary/LabelSecondary";

import styles from "./tab.module.scss";

export const Tab = ({ address, budgets, coords, id, setCoords }) => {
  return (
    <div className={styles.tab}>
      <input
        type="radio"
        name="tab"
        id={id}
        className={styles.tab__input}
        onClick={() => setCoords(coords)}
      />

      <label className={styles.tab__label} htmlFor={id}>
        <p className={styles.description}>{address}</p>
        <LabelSecondary budgets={budgets} />
      </label>
    </div>
  );
};
