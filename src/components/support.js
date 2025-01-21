import React,{useState} from "react";
//css
import "../css/support.css"

function Support() {
  const [content, setContent] = useState({
      name:'',
      email:'',
      phoneNumber:'+1',
      companyName:'',
      explanation:'',
  });
  const sendInfo = () =>{
      setContent()
      alert("Content Sent succesfully")

  }

  return(
  <form className="supportContainer" action={()=>sendInfo()}>
    <div className="supportContainer__title">CUSTOMER SUPPORT</div>
    <div className="supportContainer__description">We’re committed to providing exceptional support and service. Whether you need help with a product, have questions about maintenance, or need assistance with your order, our team is here to assist you every step of the way.</div>
    <div className="supportContainer__form">
      <div className="supportContainer__form__title">APPLICATION</div>
      <div className="supportContainer__form__inputContainer">
        <label for='name'  className="supportContainer__form__inputContainer__subtitle" >Full Name </label>
        <input  type="text"  name="name"
          className="supportContainer__form__inputContainer__input"/>
      </div>
      <div className="supportContainer__form__inputContainer">
          <label for="email" className="supportContainer__form__inputContainer__subtitle" >Email </label>
          <input  type="email" name="email" 
              className="supportContainer__form__inputContainer__input"/>
      </div>
      <div className="supportContainer__form__inputContainer">
          <label for="phone" className="supportContainer__form__inputContainer__subtitle" >Phone Number </label>
          <input  name="phone" type="number"
          className="supportContainer__form__inputContainer__input"/>
      </div>

      <div className="supportContainer__form__inputContainer">
          <label for="description" className="supportContainer__form__inputContainer__subtitle" >Please explain the reason your trying to contact us as detaild as possible. </label>
          <input type="text" name="description" 
          className="supportContainer__form__inputContainer__secondInput"/>
      </div>
      <div className="supportContainer__form__inputContainer">
          <span className="supportContainer__form__inputContainer__subtitle"> </span>
          <button type="submit" className="supportContainer__form__inputContainer__button supportContainer__form__inputContainer__button--hover">SUBMIT</button>
      </div>
    </div>
  </form>

  );
}

export default Support;
