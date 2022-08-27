import React,{ useEffect, useState }  from 'react'
import styles from "./Cart.module.css"
import { useNavigate } from "react-router-dom";


const Address = () => {

  const [form, setForm] = useState({});
  const [addressData,setAddressData] = useState([])
  const [change, setChange] = useState(false);
  const [add, setAdd] = useState(false);
  const navigate = useNavigate()

 



  const handleaddAddress = () => {
    setChange(false);
  };
  
  const handleSave = () => {
    setChange(true);

  };
  
  return (
    <div>
      {change || add ? (
        <div className={styles.addressdata}>
        
          <div className={styles.addressdata1}>
            <div>
              <img
                width="30px"
                src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"
              />
              <p>Home</p>
            </div>
            <p>Name</p>
            <p>
              mobile no
            </p>
            <p>Address</p>
            <p>Ratlam Madhya pradesh-457339</p>
          </div>
          
          <div onClick={handleaddAddress}>+ ADD NEW ADDRESS</div>
          <div 
          onClick={()=>navigate("/delivery")}
          >CONTINUE</div>
        </div>
      ) : ( 
    
    <div className={styles.address}>
          <p className={styles.addressPTag}>Add New Adddress</p>
          <div className={styles.addressform}>
            <form className={styles.form}>
              <input
                type="text"
                name="address"
                placeholder="Flat Number Building Name , Street/Locality"
                // onChange={(e)=>setBuilding(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Landmark(optional)"
                // onChange={(e)=>setLandmark(e.target.value)}
              />
              <br />
              <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                // onChange={(e)=>setPincode(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="locality"
                placeholder="Locality"
                // onChange={(e)=>setLocality(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="city"
                placeholder="City"
                // onChange={(e)=>setCity(e.target.value)}
              />
              <br />
              <input type="text" name="state" placeholder="State"
              // onChange={(e)=>setState(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="username"
                placeholder="Customer Name"
                // onChange={(e)=>setCustomer(e.target.value)}
              />
              <br />
              <input
                type="number"
                name="mobile"
                placeholder="10 Digit Mobile Number"
                // onChange={(e)=>setMobileno(e.target.value)}
              />
              <div className={styles.office}>
                <p><input type="checkbox" className={styles.addressfromCheckBox} />HOME</p>
                <p><input type="checkbox"  className={styles.addressfromCheckBox} />OFFICE</p>
                <p><input type="checkbox"  className={styles.addressfromCheckBox} />OTHER</p>
                 
              </div>
              <div>
              <div className={styles.savedata}>
              <p>CANCEL</p>
              <p  onClick={handleSave}>SAVE</p>
            </div>
              </div>
            </form>
            
          </div>
        </div>


 )
}
    </div>
  )
}

export default Address