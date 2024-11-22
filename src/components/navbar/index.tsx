import { Button, Icon } from "@shopify/polaris";
import styles from "./navbar.module.scss";

import { CartIcon, NotificationIcon, PersonIcon } from "@shopify/polaris-icons";
import Image from "next/image";

import logo from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={logo} alt="logo" />
        <div className={styles.iconContainer}>
          <Icon source={CartIcon} tone="inherit" />
          <Icon source={NotificationIcon} tone="inherit" />
          <Icon source={PersonIcon} tone="inherit" />
          <Button variant="primary" size="large">
            New Order
          </Button>
        </div>
      </div>
    </>
  );
}
