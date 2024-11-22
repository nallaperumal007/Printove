import React from "react";
import styles from "./Wallet.module.css";

const Wallet: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Billing: Printrove USD Wallet</h1>

      <form className={styles.form}>
        {/* USD Wallet */}
        <div className={styles.formGroup}>
          <label htmlFor="walletAmount" className={styles.label}>USD Wallet</label>
          <input
            type="number"
            id="walletAmount"
            placeholder="Enter Amount"
            className={styles.input}
          />
        </div>

        {/* Billing Info */}
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className={styles.input}
            />
          </div>
        </div>

        {/* Address */}
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label htmlFor="addressLine1" className={styles.label}>Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              placeholder="Enter address line 1"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country" className={styles.label}>Country</label>
            <select id="country" className={styles.select}>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>
        </div>

        {/* Payment Methods */}
        <div className={styles.paymentMethods}>
          <p className={styles.label}>Payment Methods</p>
          <div className={styles.paymentIcons}>
            <img src="/visa.png" alt="Visa" className={styles.icon} />
            <img src="/stripe.png" alt="Stripe" className={styles.icon} />
            <img src="/paypal.png" alt="PayPal" className={styles.icon} />
          </div>
        </div>

        {/* Card Details */}
        <div className={styles.cardDetails}>
          <h2 className={styles.subheading}>Card Details</h2>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label htmlFor="cardName" className={styles.label}>Card Holder Name</label>
              <input
                type="text"
                id="cardName"
                placeholder="Name on the card"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber" className={styles.label}>Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter card number"
                className={styles.input}
              />
            </div>
          </div>
          <br/>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label htmlFor="expiryDate" className={styles.label}>Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvv" className={styles.label}>CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className={styles.input}
              />
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Next Step</button>
      </form>
    </div>
  );
};

export default Wallet;
