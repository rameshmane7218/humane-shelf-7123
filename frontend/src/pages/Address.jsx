import React,{ useEffect, useState }  from 'react'
import styles from "./Cart.module.css"
import { useNavigate } from "react-router-dom";


const Address = () => {

  const [home, setHome] =useState("")
  const [office, setOffice] =useState("")
  const [other, setOther] =useState("")
  const [building, setBuilding] =useState("")
  const [landmark, setLandmark] =useState("")
  const [pincode, setPincode] =useState("")
  const [locality, setLocality] =useState("")
  const [city, setCity] =useState("")
  const [state, setState] =useState("")
  const [customer, setCustomer] =useState("")
  const [mobileno, setMobileno] =useState("")
 

  const [change, setChange] = useState(false);
  const [add, setAdd] = useState(false);
  const navigate = useNavigate()


  const handleaddAddress = () => {
    setChange(false);
  };

  const handleSave = (e) => {
    e.preventDefault()
  setChange(true);
  localStorage.setItem("home",JSON.stringify(home))
  localStorage.setItem("office",JSON.stringify(office))
  localStorage.setItem("other",JSON.stringify(other))
   localStorage.setItem("landmark",JSON.stringify(landmark))
   localStorage.setItem("building",JSON.stringify(building))
   localStorage.setItem("mobileno",JSON.stringify(mobileno))
   localStorage.setItem("pincode",JSON.stringify(pincode))
   localStorage.setItem("locality",JSON.stringify(locality))
   localStorage.setItem("city",JSON.stringify(city))
   localStorage.setItem("customer",JSON.stringify(customer))
   localStorage.setItem("state",JSON.stringify(state))
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
              <p>{home || office || other}</p>
            </div>
            <p>{customer}</p>
            <p>
              {mobileno}
            </p>
            <p>{building} {locality} {landmark}</p>
            <p>{city} {state}-{pincode}</p>
          </div>
          
          <div onClick={handleaddAddress}>+ ADD NEW ADDRESS</div>
          <div 
          onClick={()=>navigate("/ordersummary")}
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
                onChange={(e)=>setBuilding(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Landmark(optional)"
                onChange={(e)=>setLandmark(e.target.value)}
              />
              <br />
              <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                onChange={(e)=>setPincode(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="locality"
                placeholder="Locality"
                onChange={(e)=>setLocality(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={(e)=>setCity(e.target.value)}
              />
              <br />
              <input type="text" name="state" placeholder="State"
              onChange={(e)=>setState(e.target.value)}
              />
              <br />
              <input
                type="text"
                name="username"
                placeholder="Customer Name"
                onChange={(e)=>setCustomer(e.target.value)}
              />
              <br />
              <input
                type="number"
                name="mobile"
                placeholder="10 Digit Mobile Number"
                onChange={(e)=>setMobileno(e.target.value)}
              />
              <div className={styles.office}>
                <p><input type="checkbox" className={styles.addressfromCheckBox} name="home" onChange={(e)=>setHome(e.target.value ="Home")}/>HOME</p>
                <p><input type="checkbox"  className={styles.addressfromCheckBox} name="office" onChange={(e)=>setOffice(e.target.value ="Office")}/>OFFICE</p>
                <p><input type="checkbox"  className={styles.addressfromCheckBox} name="other" onChange={(e)=>setOther(e.target.value ="Other")}/>OTHER</p>
                 
              </div>
              <div>
              <div className={styles.savedata}>
              <p>CANCEL</p>
              <p type="submit" onClick={handleSave}>SAVE</p>
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