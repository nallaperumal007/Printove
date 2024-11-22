import React from "react";
import { Icon } from "@shopify/polaris";
import styles from "./Sidebar.module.scss";

// Import Shopify Polaris icons
import {
  HomeIcon,
  ListBulletedIcon,
  StoreIcon,
  StoreOnlineIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Icon source={HomeIcon} />
            <span className={styles.navText}>Dashboard</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={ListBulletedIcon} />
            <span className={styles.navText}>Product Catalog</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={StoreIcon} />
            <span className={styles.navText}>Product templates</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={StoreIcon} />
            <span className={styles.navText}>Orders</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={StoreIcon} />
            <span className={styles.navText}>Store Connect</span>
          </li>
         
          <li className={styles.navItem}>
            <Icon source={StoreIcon} />
            <span className={styles.navText}>Mockup Generator </span>
          </li>
          <li className={styles.navItem}>
            <Icon source={StoreIcon} />
            <span className={styles.navText}>Store Credits</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={StoreIcon} />
            <span className={styles.navText}>Custom Branding</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={StoreOnlineIcon} />
            <span className={styles.navText}>Resources</span>
          </li>
          <li className={styles.navItem}>
            <Icon source={SettingsIcon} />
            <span className={styles.navText}>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
