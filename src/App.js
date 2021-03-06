import React from 'react'
import s from './App.module.css';
import HeaderLogo from "./Components/HeaderLogo/HeaderLogo";
import Footer from "./Components/Footer/Footer";
import Purchase from "./Components/Purchase/Purchase";
import CardList from "./Components/CardList/СardList";
import Form from "./Components/Form/Form";
import Payments from "./Components/Payments/Payments";
import CheckingPage from "./pages/checkingPage/checkingPage";
import Calendar1 from "../src/Components/Calendar/Calendar";
import Horizontal from "./Components/horizontalLine";

function App() {
  return (
    <div className={s.appWrapper}>
<HeaderLogo/>
<Purchase logo={true}/>
{/*<Purchase logo={false} title={true}/>   <-Это для екрана с формой где мы выбираем форму оплаты.*/}
<Calendar1/>
<Horizontal/>
<CardList/>
<Footer/>
<CheckingPage/>

        <HeaderLogo/>
<Form/>
<Payments/>




    </div>
  );
}

export default App;
