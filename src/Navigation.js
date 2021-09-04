import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <ul>
        <li>
          <Link to="/">Cat list</Link>
        </li>
        <li>
          <Link to="/regist">고양이 등록하러 가기</Link>
        </li>
        <li>
          <Link to="/registered">등록된 고양이 보러가기</Link>
        </li>
      </ul>
    )
  }

  export default Navigation;