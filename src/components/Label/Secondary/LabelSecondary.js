import React from 'react';

import styles from "./label.module.scss";

export const LabelSecondary = ({ budgets }) => {
  return (
    <div className={styles.labelSecondaryContainer}>
      {
        budgets.map((budget, index) => (
          <div key={Date.now() + index} className={styles.labelSecondary}>
            <span>{budget}</span>
          </div>
        ))
      }
    </div>
  )
};
