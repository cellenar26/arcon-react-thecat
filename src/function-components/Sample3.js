import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
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

  const handleSubmit = (event) => {
    // role: validation 함수들의 결과가 모두 true 일 때만 submit 버튼의 disabled가 false로
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

  const handleValidationAll = (event) => {
    // console.log(" validation start");
    // // console.log(event.target.value);
    
    // setSubmitDisabled(true);
    // console.log("email : ", validateEmail(userEmail));
    // console.log("email: ", userEmail);
    // console.log("card: ", validateCardNo(userCardNo))
    // console.log("card: ", userCardNo);
    // console.log("card: ", userCardNo.length);
    // // console.log("forIsAllValidateDoneTemp: ", forIsAllValidateDoneTemp);
    // console.log("all validation clear");

  };
useEffect(() => {
    if (validateEmail(userEmail) === true) {

    }
    if (validatePhone(userPhone) === true) {

    }
    if (validateAge(userAge) === true) {
 
    }
    if (validateCardNo(userCardNo) === true) {

    }
    console.log('eamil : ', userEmail);
    console.log('card : ', userCardNo);
    
    if (validateEmail(userEmail) === true && validatePhone(userPhone) === true && validateAge(userAge)=== true && validateCardNo(userCardNo) === true) {
        setSubmitDisabled(false);
      }
    
    if (validateEmail(userEmail) === false || validatePhone(userPhone) === false || validateAge(userAge)=== false || validateCardNo(userCardNo) === false) {
        setSubmitDisabled(true);
      }
},[userEmail, userPhone, userAge, userCardNo])
  // return boolean
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // setUserEmail(re.test(String(email).toLowerCase()));
    // console.log(re.test(String(email).toLowerCase()));
    if (re.test(String(email).toLowerCase()) === true) {
      // setSubmitDisabled(false);
      //   console.log(email);
      console.log('email good');
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
      // 정해진 양식과 틀림, 스타일 변경
      return false;
    } else {
      // 정해진 양식이 맞음

      return true;
    }
  };

  const validateAge = (age) => {
    let nowAge = age;
    if (nowAge <= 0) {
      // submit 비활성화, 스타일 변화
      return false;
    }
    // setSubmitDisabled(false);

    return true;
  };

  const validateCardNo = (cardNo) => {
    let nowCardNo = cardNo;
    console.log(nowCardNo);
    if (nowCardNo.length === CARD_LENGTH) {
      //   setSubmitDisabled(false);
      // console.log(nowCardNo.length);

      return true;
    } else {
      return false;
    }
  };
  //   const validateCardNo = (cardNo) => {
  //     let nowCardNo = cardNo;
  //     if (nowCardNo.length === CARD_LENGTH) {
  //     //   setSubmitDisabled(false);
  //     // console.log(nowCardNo.length);
  //     return true;
  //     }
  //     else {
  //         return false;
  //     }
  //   };

  //   useEffect(() => {
  //     console.log('useEffect validation start')
  //     while (isAllValidateDone === false) {

  //         forIsAllValidateDoneTemp = validateEmail(userEmail);
  //         forIsAllValidateDoneTemp = validatePhone(userPhone);
  //         forIsAllValidateDoneTemp = validateAge(userAge);
  //         forIsAllValidateDoneTemp = validateCardNo(userCardNo);

  //         if (forIsAllValidateDoneTemp === true) {
  //             break;
  //         }
  //     }
  //     console.log('all validation clear');
  //   }, [userEmail, userPhone, userName, userGender, userAge, userCardNo]);

  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit} onChange={handleValidationAll}>
          <input
            type="email"
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
            placeholder="abc@gmail.com"
          />
          <br />
          <input
            type="tel"
            value={userPhone}
            onChange={(event) => {
              setUserPhone(event.target.value);
              validatePhone(event.target.value);
            }}
            placeholder="010-1234-5678"
          />
          <br />
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
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
              validateAge(event.target.value);
            }}
            placeholder="27"
          />
          <br />
          <input
            type="text"
            value={userCardNo}
            onChange={(event) => {
              setUserCardNo(event.target.value);
              validateCardNo(event.target.value);
            }}
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
