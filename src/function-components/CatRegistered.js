import { useState } from "react";
const LOCAL_KEY = "custom cat";

const testArr = [1, 2, 3, 4];

export default function CatRegistered() {
  console.log("cat registered render");
  const nowLocal = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const [catsLocalStorage, setCatsLocalStorage] = useState(nowLocal ? nowLocal : []);

  console.log(catsLocalStorage);
  console.log(catsLocalStorage[0]);
  console.log(catsLocalStorage[0].localCatName);

  return (
    <ul>
      {catsLocalStorage.map((item, index) => (
        <li key={index}>
          <span>
            {index + 1}. 고양이 이름 : {item.localCatName}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 종류 : {item.localCatVar}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 url : {item.localCatImgUrl}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 설명 : {item.localCatDescription}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 출신국가 : {item.localCatCountry}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 예상수명 : {item.localCatPredictLife}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 친밀도 레벨 : {item.localCatAffLev}
          </span>
          <br />
          <span>
            {index + 1}. 고양이 털 길이 : {item.localCatHair}
          </span>
          <br />
        </li>
      ))}
    </ul>
  );
}
