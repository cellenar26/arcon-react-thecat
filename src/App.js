// import { ErrorBoundary } from '@sentry/react';
import ErrorBoundary from './ErrorBoundary';
// import "./App.scss";
import Cats from "./function-components/Cats";
// import MyCustoms from "./function-components/MyCustoms";
// import Product from './function-components/Product';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import User from './User';
import Navigation from './Navigation';
import Sample from './function-components/Sample';
import Sample2 from './function-components/Sample2';
import Sample3 from './function-components/Sample3';

function App() {
  const product = {
    name: 'awesome product',
    description: 'this is good',
    price: 49000
  }
  return (
    <div className="App">
      {/* <Sample /> */}
      {/* <Sample2 /> */}
      <Sample3 />
      {/* <main>
        <ErrorBoundary>
          <Product product={product} />
        </ErrorBoundary>
        <Cats />
        <center>
        <MyCustoms />
        </center> 
      </main> */}
    </div>
    // <div>
    //   <center>
    //   <Navigation />
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/product/:productName" component={Product} />
    //     <Route exact path="/user" component={User} />
    //     <Route component={UrlFallback} /> 
    //   </Switch>
    //   </center>
    // </div>
  );
}
function UrlFallback() {
  const history = useHistory()
  return (
    <div>
      존재하지 않는 페이지 입니다. <br />
      <button onClick={() => {
        history.push('/')
      }}>홈페이지로 가기</button>
    </div>
  )
}

export default App;
