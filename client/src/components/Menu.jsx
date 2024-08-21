import React from 'react';
import styles from './design.module.css';

const Menu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li>GitHub</li>
        <li>Om mig</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
};

export default Menu;