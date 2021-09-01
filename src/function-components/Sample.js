import { useState } from "react";
import "./Sample.scss"
// 상수일 경우 함수 밖에 하면 불필요한 리렌더링 방지 가능
const firstSelectValue = "grapefruit";

const customSelectValues = ["one", "two", "three", "four"];

export default function Sample() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const [select, setSelect] = useState(firstSelectValue);
  const [customSelect, setCustomSelect] = useState(null);
    const [visibleFlag, setVisibleFlag] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    console.log(name);
    console.log(phoneNumber);
    console.log(email);
    console.log(textArea);
    console.log(select);
  };

  const handleShowItems = () => {
    console.log("clicked");
    if (visibleFlag === false) {
        setVisibleFlag(true)

    }
    else if (visibleFlag === true) {
        setVisibleFlag(false)
    }
  };
const handleChangeItem = (item) => {
    setCustomSelect(item)
}
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />{" "}
      <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />{" "}
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />{" "}
      <textarea type="text" value={textArea} onChange={(event) => setTextArea(event.target.value)}></textarea>
      <select value={select} onChange={(event) => setSelect(event.target.value)}>
        <option value={firstSelectValue}>Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <br />
      <div className="select-container">
          <div onClick={handleShowItems}>{customSelect ?? "다음을 선택해주세요."}</div>
          {/* || 사용하는 것보다 이득인 이유
                 비교 연산 횟수를 줄일 수 있어서
          */}
          {visibleFlag? 
          <ul className="select-custom">
          {customSelectValues.map((item, index) => (
              <li onClick={() => handleChangeItem(item)} key={item}>{item}</li>
          ))}</ul> 
          : null
          }
      </div>
      <button type="submit" value="submit">
        submit
      </button>
    </form>
  );
}
