import { useState } from "react";
import "./Sample3.scss";
export default function Sample3() {
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("man");
  const [userAge, setUserAge] = useState("");
  const [userCardNo, setUserCardNo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userEmail);
    console.log(userPhone);
    console.log(userName);
    console.log(userGender);
    console.log(userAge);
    console.log(userCardNo);
    console.log(validateEmail(userEmail));
    console.log(validatePhone(userPhone));
  };
  // return boolean 
  const validateEmail =(email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// return boolean,  set phoneNumber
const validatePhone = (phone) => {
    let nowPhone = phone;
    let isDone = false;

    while(isDone === false) {
        nowPhone = nowPhone.replace('-','')
        if (nowPhone.includes('-') !== true) {
            isDone = true;
        }
    }
    setUserPhone(nowPhone)
    return true
}

const validateAge = (age) => {
    let nowAge = age;
    if (age <= 0) {
        // submit 비활성화, 스타일 변화
        return ;
    }
    
    return true;
}

  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            placeholder="abc@gmail.com"
          />
          <br />
          <input
            type="tel"
            value={userPhone}
            onChange={(event) => setUserPhone(event.target.value)}
            placeholder="01012345678"
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
          <input type="number" value={userAge} onChange={(event) => setUserAge(event.target.value)} placeholder="27" />
          <br />
          <input
            type="text"
            value={userCardNo}
            onChange={(event) => setUserCardNo(event.target.value)}
            placeholder="1234567812345678"
            maxLength="16"
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </section>
    </>
  );
}
