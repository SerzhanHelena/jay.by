import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MainPage from "./components/MainPage/mainPage";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsContainer from "./container/productsContainer";
import About from "./components/About/about";
import ContactForm from "./components/ContactForm/ContactForm";
import Advices from "./components/Advices/advices";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
         <div  className="app-wrapper-content"> 
         <Header />
            <Route path="/products" render={() => <ProductsContainer />} />
            <Route exact path="/" render={() => <MainPage />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/jay_advices" render={() => <Advices />} />
            <Route exact path="/contacts" render={() => <ContactForm />} /> 
         </div>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
