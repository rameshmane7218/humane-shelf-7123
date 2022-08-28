import React from "react";
import styles from "../../pages/Cart.module.css";
export const Total = ({ getCartItems }) => {
  return (
    <div className={styles.prdata}>
      <div className={styles.discount}>
        <p>Item Total(MRP)</p>
        <p>₹{getCartItems.withoutDiscountPrice}</p>
      </div>
      <div className={styles.discount}>
        <p>Price Discount</p>
        <p>
          -₹{" "}
          {Number(getCartItems.withoutDiscountPrice) -
            Number(getCartItems.withDiscountPrice)}
        </p>
      </div>
      <hr />
      <div className={styles.discount}>
        <p>Shipping Fee</p>
        <p>₹0</p>
      </div>
      {/* <div className={styles.discount}>
        <p>Packaging and Handling Chargesⓘ</p>
        <p>₹5</p>
      </div> */}
      <hr />
      <div className={styles.paid}>
        <p>To be paid</p>
        <p>₹{getCartItems.withDiscountPrice}</p>
      </div>
      <div className={styles.paid1}>
        <p>Total Savings</p>
        <p>
          ₹
          {Number(getCartItems.withoutDiscountPrice) -
            Number(getCartItems.withDiscountPrice)}
        </p>
      </div>
    </div>
  );
};
