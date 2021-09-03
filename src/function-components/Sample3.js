import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Sample3.scss";

const CARD_LENGTH = 16;

let isAllValidateDone = false;
let forIsAllValidateDoneTemp = 0;

export default function Sample3() {
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("man");
  const [userAge, setUserAge] = useState("");
  const [userCardNo, setUserCardNo] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [styleValidMail, setValidMail] = useState({border : "1px solid red"})
  const [styleValidPhone, setStyleValidPhone] = useState({border: "1px solid red"})
  const [styleValidName, setStyleValidName] = useState({border: '1px solid red'})
  const [styleValidAge, setStyleValidAge] = useState({border: "1px solid red"})
  const [styleValidCardNo, setStyleValidCardNo] = useState({border: "1px solid red"})

  
  const handleSubmit = (event) => {
  
    event.preventDefault();
    console.log("submit=======");
    console.log(userEmail);
    console.log(userPhone);
    console.log(userName);
    console.log(userGender);
    console.log(userAge);
    console.log(userCardNo);
    console.log("==========submit");
  };
  useEffect(() => {
    if (validateEmail(userEmail) === false) {
      setValidMail({border: '1px solid red'})
    }
    else {
      setValidMail({border: ''})
    }

    if (validatePhone(userPhone) === false) {
      setStyleValidPhone({border: '1px solid red'})
    }
    else {
      setStyleValidPhone({border: ''})
    }

    if (validateUserName(userName) === false) {
      setStyleValidName({border: '1px solid red'})
    }
    else {
      setStyleValidName({border: ''})
    }

    if (validateAge(userAge) === false) {
      setStyleValidAge({border: '1px solid red'})
    }
    else {
      setStyleValidAge({border: ''})
    }

    if (validateCardNo(userCardNo) === false) {
      setStyleValidCardNo({border: '1px solid red'})
    }
    else {
      setStyleValidCardNo({border: ''})
    }

    

    if (
      validateEmail(userEmail) === true &&
      validatePhone(userPhone) === true &&
      validateUserName(userName) === true &&
      validateAge(userAge) === true &&
      validateCardNo(userCardNo) === true
    ) {
      setSubmitDisabled(false);
    }

    if (
      validateEmail(userEmail) === false ||
      validatePhone(userPhone) === false ||
      validateUserName(userName) === false ||
      validateAge(userAge) === false ||
      validateCardNo(userCardNo) === false
    ) {
      setSubmitDisabled(true);
    }
  }, [userEmail, userPhone, userName,userAge, userCardNo]);
  // return boolean
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) === true) {

      console.log("email good");
      return true;
    } else {
      return false;
    }
  };

  // return boolean,  set phoneNumber
  const validatePhone = (phone) => {
    // true: 01x-xxxx-xxxx
    let patternPhone = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
    let nowPhone = phone;

    if (patternPhone.test(nowPhone) === false) {
      return false;
    } else {
      return true;
    }
  };
  const validateUserName = (nowUserName) => {
    let nowName = nowUserName;
    if (nowName.length <=0) {
      return false
    }
    else {
      return true;
    }
  }
  const validateAge = (age) => {
    let nowAge = age;
    if (nowAge <= 0) {

      return false;
    }


    return true;
  };

  const validateCardNo = (cardNo) => {
    let nowCardNo = cardNo;
    if (nowCardNo.length === CARD_LENGTH) {

      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
            style={styleValidMail}
            placeholder="abc@gmail.com"
          />
          <br />
          <input
            type="tel"
            value={userPhone}
            onChange={(event) => {
              setUserPhone(event.target.value);
              
            }}
            style={styleValidPhone}
            placeholder="010-1234-5678"
          />
          <br />
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            style={styleValidName}
            placeholder="최장훈"
          />
          <br />
          <section className="gender-radio">
            <span>man</span>
            <input
              type="radio"
              value="man"
              onChange={(event) => setUserGender(event.target.value)}
              name="gender"
              defaultChecked
            />
            <span>woman</span>
            <input type="radio" value="woman" onChange={(event) => setUserGender(event.target.value)} name="gender" />
            <br />
          </section>
          <input
            type="number"
            value={userAge}
            onChange={(event) => {
              setUserAge(event.target.value);
              
            }}
            style={styleValidAge}
            placeholder="27"
          />
          <br />
          <input
            type="text"
            value={userCardNo}
            onChange={(event) => {
              setUserCardNo(event.target.value);
              
            }}
            style={styleValidCardNo}
            placeholder="1234567812345678"
            maxLength={CARD_LENGTH}
          />
          <br />
          <input type="submit" value="submit" disabled={submitDisabled} />
        </form>
      </section>
    </>
  );
}
