import s from './checkingPage.module.css'
import {Button} from "primereact/button";
import arrow from '../../images/Fill 4.svg'
import {CardSubtitle, CardTitle, Input} from "reactstrap";
import React from "react";
import success from '../../images/Tick Square.svg'
import mask from '../../images/Mask.svg'
import message from '../../images/Message.svg'
import phone from '../../images/Call.svg'

const CheckingPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.buttonWrapper}>
                <div className={s.button_outline}>
                    <Button className={s.buttonCheck}><img src={arrow}/></Button>
                    <div className={s.buttonTitle}>Вернуться на сайт</div>
                </div>

            </div>
            <div className={s.checkWrapper}>
                <div className={s.successTitleWrapper}><img src={success}/>Покупка билетов прошла успешно
                </div>
                <hr/>
                <div className={s.goodDescriptionWrapper}>
                    <CardSubtitle tag="h6" style={{fontSize:'0.8rem'}}  className={"mb-2 text-muted price"}>ID: 000000001</CardSubtitle>
                    <CardTitle style={{fontSize:'0.9rem'}} tag="h5">Выставка “Body Worlds”</CardTitle>
                    <CardSubtitle tag="h6"  style={{fontSize:'0.8rem'}}  className={"mb-2 text-muted price"}>Дата посещения</CardSubtitle>
                    <CardTitle style={{fontSize:'0.9rem'}} tag="h5">25 февраля 2021</CardTitle>
                </div>
                <hr/>
<div className={s.checkingFrom}>
    <div className={s.formTitle}>Оплачено</div>
    <div className={s.exampleEmail}>
        <div className={s.itemPrice}>1150 ₽</div>
        <div className={s.itemBuy}>Картой онлайн</div>
    </div>

                <div className={s.checkingFooter}>
                    Электронный билет и чек были отправлены на указанную Вами электронную почту
                </div>
</div>
            </div>

            <div className={s.maskWrapper}>
                <div className={s.maskLogo}><img src={mask}/></div>
                <div className={s.maskTitle}>
                    <CardTitle style={{fontSize:'1rem'}} className={s.smallFont} tag="h5">ТРЕБОВАНИЯ ПО ПОСЕЩЕНИЮ ВЫСТАВКИ</CardTitle>
                    <div className={s.maskText}>Необходимо использовать индивидуальные средства защиты маски, перчатки, соблюдение дистанции 1,5 - 2 метра</div>
                </div>
            </div>
            <div className={s.infoFooter}>
            <CardSubtitle tag="h6"  style={{fontSize:'0.7rem'}} id='style' className={"mb-2 text-muted"}>Отдел технической поддержки по электронным билетам</CardSubtitle>

            <div className={s.contactsWrapper}>
                <div className={s.number}><img src={phone} alt='phone'/>+7(499)643-82-38</div>
                <div className={s.mail}><img src={message} alt='message'/>info@bodyworlds.moscow</div>
            </div>
            </div>
        </div>
    )
}

export default CheckingPage;