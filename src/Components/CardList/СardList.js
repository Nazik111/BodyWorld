import React from 'react';
import Card1 from "./../Сard/Card";
import s from './CardList.module.css'


const CardList = () => {

    return(
    <>
        <div className={s.cardListWrapper}>
<Card1 cardTitle='Взрослый' price='1 150 ₽' button={true} description=''/>
<Card1 cardTitle='Cемейный' price='2 800 ₽' button={true} description='2 взрослых 1 ребёнок'/>
<Card1 cardTitle='Семеный' price='3 600 ₽' button={true} description='2 взрослых 2 ребёнка'/>
<Card1 cardTitle='Групповой взрослый' price='850 ₽' button={true} description='от 10 человек'/>
<Card1 cardTitle='Групповой школьный 12+' price='650 ₽' button={false} description='От 10 человек Покупка билетов осуществляется только по предварительной записи. +7 (499) 643-82-38'/>
<Card1 cardTitle='Льготный' price='800 ₽' button={false} tooltip={true} description='(Дети до 18 лет, студенты, пенсионеры, члены многодетных семей)'/>
    </div>
        <div>
            <hr/>
        </div>

        </>
)
}

export default CardList;
