import { useEffect, useState } from "react";

export default function Sample2() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [card, setCard] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(event);
  }

//   useEffect( () => {
//     console.log('change email');
//   },[email])
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="abc@gmail.com"value={email} onChange={(event) => setEmail(event.target.value)}/>{" "}
        <input type="tel" placeholder="123-4567" value={tel} onChange={(event) => setTel(event.target.value)}/> 
        <input type="text" placeholder="홍길동" value={name} onChange={(event) => setName(event.target.value)}/>{" "}
        <br />
        <input type="text" placeholder="성별" value={gender} onChange={(event) => setGender(event.target.value)}/> 
        <input type="number" placeholder="20" value={age} onChange={(event) => setAge(event.target.value)}/>{" "}
        <input type="number" placeholder="1234567890" maxLength="10" value={card} onChange={(event) => setCard(event.target.value)}/>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
