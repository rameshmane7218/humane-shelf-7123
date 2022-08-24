import React from "react";
import styles from "../../pages/Cart.module.css";
export const Total = (subTotal)=>{
    const Total = localStorage.getItem("subtotal") || subTotal.total
    

    return (
        <div className={styles.prdata}>
            <div className={styles.discount}>
                <p>Item Total(MRP)</p>
                <p>₹{Total}</p>
            </div>
            <div className={styles.discount}>
                <p>Price Discount</p>
                <p>-₹ {(Total*0.15).toFixed(2)}</p>
            </div>
            <hr />
            <div className={styles.discount}>
                <p>Shipping Fee</p>
                <p>₹0</p>
            </div>
            <div className={styles.discount}>
                <p>Packaging and Handling Chargesⓘ</p>
                <p>₹5</p>
            </div>
            <hr />
            <div className={styles.paid}>
                <p>To be paid</p>
                <p>₹{Total-Total*0.15}</p>
            </div>
            <div className={styles.paid1}>
                <p>To be paid</p>
                <p>₹{Total-Total*0.15}</p>
            </div>
        </div>
    )
}