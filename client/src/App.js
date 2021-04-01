/* import "./App.css"; */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Nav from "./components/Nav";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/add-product' component={AddProduct} />
          <Route exact path='/edit-product/:id' component={EditProduct} />

          {/* <Route exact path='/view-product' component={ViewProduct} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
