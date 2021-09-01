import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    )
  }

  export default Navigation;