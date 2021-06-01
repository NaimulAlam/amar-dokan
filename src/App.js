import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductCategory from './Pages/ProductCategory/ProductCategory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Payment from './Pages/Payment/Payment';
import Login from './Pages/Login/Login';
import AddToCart from './Pages/AddToCart/AddToCart';



function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/category/:categoryName">
          <ProductCategory></ProductCategory>
        </Route>

        <Route path="/product/:productId">
          <ProductDetails></ProductDetails>
        </Route>

        <Route path="/payment">
          <Payment></Payment>
        </Route>

        <Route path="/add-to-cart">
          <AddToCart></AddToCart>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
