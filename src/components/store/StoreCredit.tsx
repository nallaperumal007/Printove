import React from "react";
import styles from "./StoreCredit.module.scss";
import { Icon } from "@shopify/polaris";
import { SearchIcon } from '@shopify/polaris-icons';

// Define the type for items in the balance history
interface BalanceHistoryItem {
  date: string;
  id: string;
  type: string;
  payment: string;
  amount: string;
}

const StoreCredit: React.FC = () => {
  const balanceHistory: BalanceHistoryItem[] = [
    { date: "Today at 6:55am", id: "#2050", type: "Bill Cycle", payment: "Paid", amount: "$3,648.00" },
    { date: "Today at 6:55am", id: "#2049", type: "Bill Cycle", payment: "Paid", amount: "$8,343.00" },
    { date: "Today at 6:55am", id: "#2048", type: "Credits", payment: "Paid", amount: "$4,747.00" },
    { date: "Today at 6:55am", id: "#2047", type: "Bill Cycle", payment: "Paid", amount: "$9,983.00" },
    { date: "Today at 6:55am", id: "#2046", type: "Credits", payment: "Paid", amount: "$2,634.00" },
    { date: "Today at 6:55am", id: "#2045", type: "Credits", payment: "Paid", amount: "$825.00" },
  ];

  return (
    <div className={styles.storeCreditContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Store Credit</h1>
        <button className={styles.rechargeButton}>Recharge Now</button>
      </header>
      <div className={styles.mainContent}>
        {/* Left Section - Balance History */}
        <div className={styles.balanceSection}>
          <h1>Balance History</h1>
          <br />
          <p className={styles.balanceAmount}>$39.39</p>
        </div>
      </div>
      <br />

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Section - Balance History */}
        <div className={styles.balanceSection}>
          <h1>Balance History</h1>
          <br />

          {/* Balance History Table */}
          <div className={styles.tableContainer}>
            <div className={styles.buttonRow}>
              <button className={styles.iconButton}>Credit</button>
              <button className={styles.iconButton}>Payment</button>
              <button className={styles.iconButton}>Remittance</button>
              <button className={styles.iconButton}>Invoice</button>
              <button className={styles.iconButton}>+</button>

              <button className={styles.iconButton}>
                <Icon source={SearchIcon} />
              </button>
              <button className={styles.iconButton}>List Icon</button>
              <button className={styles.iconButton}>Up & Down Arrow</button>
            </div>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Date Issued</th>
                  <th>Bill Number</th>
                  <th>Bill Type</th>
                  <th>Payment Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {balanceHistory.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item.date}</td>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>
                      <span className={styles.paidStatus}>{item.payment}</span>
                    </td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section - Payment & User Info */}
        <div className={styles.paymentSection}>
          <div className={styles.paymentCard}>
            <h3>Payment Method</h3>
            <p>
              <strong>VISA</strong> **** **** **** 1234
            </p>
            <p>expires on 12/08</p>
          </div>
          <div className={styles.userInfoCard}>
            <h3>Name</h3>
            <p>Maheshwaran</p>
            <h3>Customer Email</h3>
            <p>maheshwaran@gmail.com</p>
            <h3>Shipping Address</h3>
            <p>Maheshwaran, Harrington Street, Parrys Corner, Chennai - 02</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCredit;
