import { Button, Icon } from "@shopify/polaris";
import styles from "./navbar.module.scss";
import { CartIcon, NotificationIcon, PersonIcon } from "@shopify/polaris-icons";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import logo from "@/assets/logo.svg";

export default function Navbar() {
  const router = useRouter(); // Get the router instance for navigation

  // Handle the logout action
  const handleLogout = () => {
    // Clear user data from localStorage (or any other session data)
    localStorage.removeItem("userRole"); // Remove the stored user role

    // Optionally, you can clear other session-related data if needed
    // localStorage.removeItem("userData");

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <Image src={logo} alt="logo" />
      
      <div className={styles.iconContainer}>
        {/* Cart, Notification, and Person icons */}
        <Icon source={CartIcon} tone="inherit" />
        <Icon source={NotificationIcon} tone="inherit" />
        <Icon source={PersonIcon} tone="inherit" />
        
        {/* New Order Button */}
        <Button variant="primary" size="large">
          New Order
        </Button>

        {/* Logout Button */}
        <Button variant="secondary" size="large" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
