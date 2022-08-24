import React from 'react'
// import axios from "axios"
import { useState,useEffect } from 'react'
import styles from "./Cart.module.css"
import { Total } from "../components/CartComponents/Total";
import Button from "../components/CartComponents/Button";




const cartdata =[
    {
        _id : 1,
        productName:"Paracetamol",
        price: 4564,
        shortDesc: 451,
        strikedPrice : 5452,

    },
    {
        _id : 2,
        productName:"ABCd",
        price: 456,
        shortDesc: 451,
        strikedPrice : 545,

    }
]
const Cart = () => {

    const handleCheckout = ()=>{
        // navigate("/address");
        // localStorage.setItem("subtotal",JSON.stringify(subTotal))
        
    }
    const button = {
        bg: "#ff6f61",
        text: "CHECKOUT",
        width: "98%",
        br: "0px",
        color: "#ffffff",
        height: "50px",
        fontSize: "18px",
      };

  return (
    <div className={styles.BlogContainer}>
        
        {/* left side */}
        
        <div className={styles.leftcart}>
        <div>
          <p>Items NOT Requiring Prescription ({cartdata.length})</p>
          {cartdata.map((el)=>(
          <div key={el._id} className={styles.cartdata}>
            <div>
              <h3>{el.productName}</h3>
              <h3>{el.price}</h3>
            </div>
            <div>
              <p>{el.shortDesc}</p>
              <s>MRP{el.strikedPrice}</s>
            </div>
            <div>
              <div 
            //   onClick={()=>{
            //     let obj={_id:el._id,username:state.username,obj:el._id}
            //     dispatch(removecart(obj))
            //   axios.post("https://unit-6projectbackend.herokuapp.com/removequant",
            //   {_id:el._id,username:state.username,obj:el._id})
            //   .then((data)=>{
            //     setCartData(data.data[0].cats)
            //     setfalse(true)
            //   })  
            //   }    
            //  } 
              
              className={styles.deleteCart}>
                <img
                  width={"5%"}
                  height={"80%"}
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                />
                <p>Remove</p>
              </div>

              <div className={styles.deletecart}>
                <img
                //   onClick={() =>{setCount({...count,[el._id]:count[el._id]-1})
                // }}
                  src="https://www.1mg.com/images/minus-cart.svg"
                />
                <p>COUNT</p>
                <img
            //     onClick={() =>{setCount({...count,[el._id]:count[el._id]+1})
            //   }}
                  src="https://www.1mg.com/images/plus-cart.svg"
                />
              </div>
            </div>
          </div>
           ))}
        </div>
       
      </div>
        

        {/* right side */}
        <div className={styles.BlogRightContainer}>
        <div className={styles.careplan}>
          <img
            width={"100px"}
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
          />
          <p>You can save extra ₹23 on this order</p>
          <h4>Become a member</h4>
          <p>Care plan membership <span className={styles.BlogCutPrice} >₹165</span> ₹549 / 3 months</p>
          <div className={styles.knowmore}>
            <div>
              <p>Know More</p>
            </div>
            <div>
              <p>Add to cart</p>
            </div>
          </div>
          <hr />
          <div className={styles.coupon}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" />
              <h4>Apply Coupon</h4>
            </div>
            <div>
              <img
                width="25px"
                heigth="25px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90vvlMUz57tkjGsbZaZ-wpfjur6Epkp_6Pg&usqp=CAU"
              />
            </div>
          </div>
        </div>
        <div className={styles.health}>
          <div>
            <p>Check the health of your vital organs</p>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Book Good Health Silver Package for just ₹649
            </label>
            <p className={styles.Bloghealthpara}>
              Get the tests done easily from your home. This package will help
              you in identifying potential disorders and deficiencies at an
              early stage.
            </p>
            <p>Pay later on home sample collection</p>
          </div>
        </div>
        <div className={styles.coins}>
          <div className={styles.coinsdata}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" />
              <p>My NeuCoins</p>
            </div>
            <div>
              <p>Balance: 0 NeuCoin</p>
            </div>
          </div>
          <hr />
          <div className={styles.neucoins}>
            <p>4 NeuCoins to be earned on this order*</p>
            <p>Extra 23 NeuCoins for care Plan members</p>
            <p>Add care plan to cart</p>
          </div>
        </div>
        <div><Total/></div>
        <div className={styles.deliverylocation}>
          <div className={styles.location}>
            <p>Your delivery location</p>
            <p>New Delhi</p>
          </div>
          <div className={styles.location1}>
          <Button styles={button} onClick={handleCheckout}/>
          </div>
        </div>
      </div>


        </div>
  )
}

export default Cart