import React from "react";
import { Icon } from "@shopify/polaris";
import Link from "next/link"; // Import Link from Next.js
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
          {/* Dashboard */}
          <li className={styles.navItem}>
            <Link href="/admin/dashboard/" className={styles.navLink}>
              <Icon source={HomeIcon} />
              <span className={styles.navText}>Dashboard</span>
            </Link>
          </li>

          {/* Product Catalog */}
          <li className={styles.navItem}>
            <Link href="/admin/product/" className={styles.navLink}>
              <Icon source={ListBulletedIcon} />
              <span className={styles.navText}>Product Catalog</span>
            </Link>
          </li>

          {/* Product Templates */}
          <li className={styles.navItem}>
            <Link href="/admin/producttemplates" className={styles.navLink}>
              <Icon source={StoreIcon} />
              <span className={styles.navText}>Product Templates</span>
            </Link>
          </li>

          {/* Orders */}
          <li className={styles.navItem}>
            <Link href="/admin/orders" className={styles.navLink}>
              <Icon source={StoreIcon} />
              <span className={styles.navText}>Orders</span>
            </Link>
          </li>

          {/* Store Connect */}
          <li className={styles.navItem}>
            <Link href="/admin/storeconnect" className={styles.navLink}>
              <Icon source={StoreIcon} />
              <span className={styles.navText}>Store Connect</span>
            </Link>
          </li>

          {/* Mockup Generator */}
          <li className={styles.navItem}>
            <Link href="/admin/mockupgenerator" className={styles.navLink}>
              <Icon source={StoreIcon} />
              <span className={styles.navText}>Mockup Generator</span>
            </Link>
          </li>

          {/* Store Credits */}
          <li className={styles.navItem}>
            <Link href="/admin/storecredit" className={styles.navLink}>
              <Icon source={StoreIcon} />
              <span className={styles.navText}>Store Credits</span>
            </Link>
          </li>

          {/* Custom Branding */}
          <li className={styles.navItem}>
            <Link href="/admin/custombranding" className={styles.navLink}>
              <Icon source={StoreIcon} />
              <span className={styles.navText}>Custom Branding</span>
            </Link>
          </li>

          {/* Resources */}
          <li className={styles.navItem}>
            <Link href="/admin/resources" className={styles.navLink}>
              <Icon source={StoreOnlineIcon} />
              <span className={styles.navText}>Resources</span>
            </Link>
          </li>

          {/* Settings */}
          <li className={styles.navItem}>
            <Link href="/admin/settings" className={styles.navLink}>
              <Icon source={SettingsIcon} />
              <span className={styles.navText}>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
