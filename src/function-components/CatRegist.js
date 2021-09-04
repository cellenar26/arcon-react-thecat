import { useState } from "react";
import { useHistory } from 'react-router-dom';
const LOCAL_KEY = "custom cat";
const catKind = ["코리안 숏 헤어", "노르웨이 숲", "아메리칸 숏 헤어", "스핑크스"];
const catAffLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CatRegist() {
  const [catName, setCatName] = useState("");
  const [catVar, setCatVar] = useState("코리안 숏 헤어"); // select
  const [catImgUrl, setCatImgUrl] = useState("");
  const [catDescription, setCatDescription] = useState("");
  const [catCountry, setCatCountry] = useState("");
  const [catPredictLife, setCatPredictLife] = useState("");
  const [catAffLev, setCatAffLev] = useState("1"); // select, 1-10
  const [catHair, setCatHair] = useState("단모"); // radio: 단모 장모 이중모
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(catName);
    console.log(catVar);
    console.log(catImgUrl);
    console.log(catDescription);
    console.log(catCountry);
    console.log(catPredictLife);
    console.log(catAffLev);
    console.log(catHair);

    let forSaveTemp = {
      localCatName: catName,
      localCatVar: catVar,
      localCatImgUrl: catImgUrl,
      localCatDescription: catDescription,
      localCatCountry: catCountry,
      localCatPredictLife: catPredictLife,
      localCatAffLev: catAffLev,
      localCatHair: catHair,
    };
    console.log(forSaveTemp);
    let arrTemp = [];
    let arrTempForSaveItems = [];
    // LOCAL_KEY,
    if (localStorage.getItem(LOCAL_KEY) === undefined || localStorage.getItem(LOCAL_KEY) === null) {
      arrTempForSaveItems.push(forSaveTemp);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(arrTempForSaveItems));
    } else {
      // 로컬 스토리지에 이미 한 개 이상의 아이템이 있음
      arrTemp = JSON.parse(localStorage.getItem(LOCAL_KEY));
    //   arrTempForSaveItems = arrTemp.map((i) => i);
    //   arrTempForSaveItems.push(forSaveTemp);
    
      localStorage.setItem(LOCAL_KEY, JSON.stringify(arrTemp.concat(forSaveTemp)));
    }

    // page 이동
    // window.location.href = "/registered";
    history.push("/registered")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>1. 고양이 이름 : </span>
        <input type="text" value={catName} onChange={(event) => setCatName(event.target.value)} />
        <br />
        <span>2. 고양이 종류 : </span>
        <select onChange={(event) => setCatVar(event.target.value)} value={catVar}>
          <option value={catKind[0]}>코리안 숏 헤어</option>
          <option value={catKind[1]}>노르웨이 숲</option>
          <option value={catKind[2]}>아메리칸 숏 헤어</option>
          <option value={catKind[3]}>스핑크스</option>
        </select>
        <br />
        <span>3. 고양이 url : </span>
        <input type="text" value={catImgUrl} onChange={(event) => setCatImgUrl(event.target.value)} />
        <br />
        <span>4. 고양이 설명 : </span>
        <input type="text" value={catDescription} onChange={(event) => setCatDescription(event.target.value)} />
        <br />
        <span>5. 고양이 출신국가 : </span>
        <input type="text" value={catCountry} onChange={(event) => setCatCountry(event.target.value)} />
        <br />
        <span>6. 고양이 예상수명 : </span>
        <input type="text" value={catPredictLife} onChange={(event) => setCatPredictLife(event.target.value)} />
        <br />
        <span>7. 고양이 친밀도 레벨 : </span>
        <select onChange={(event) => setCatAffLev(event.target.value)}>
          <option value={catAffLevel[0]}>1</option>
          <option value={catAffLevel[1]}>2</option>
          <option value={catAffLevel[2]}>3</option>
          <option value={catAffLevel[3]}>4</option>
          <option value={catAffLevel[4]}>5</option>
          <option value={catAffLevel[5]}>6</option>
          <option value={catAffLevel[6]}>7</option>
          <option value={catAffLevel[7]}>8</option>
          <option value={catAffLevel[8]}>9</option>
          <option value={catAffLevel[9]}>10</option>
        </select>
        <br />
        <span>8. 털 길이 : </span>
        <span>단모</span>
        <input type="radio" name="hair" value="단모" onClick={(event) => setCatHair("단모")} defaultChecked />
        <span>장모</span>
        <input type="radio" name="hair" value="장모" onClick={(event) => setCatHair("장모")} />
        <span>이중모</span>
        <input type="radio" name="hair" value="이중모" onClick={(event) => setCatHair("이중모")} />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
