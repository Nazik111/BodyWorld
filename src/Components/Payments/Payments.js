import React from 'react';
import s from './Payments.module.css'
import visa from './../../images/visa.svg'
import mastercard from '../../images/masterCard.svg';
import applePay from '../../images/applepay.svg';
import googlePay from '../../images/googlepay.svg';
import tinkoff from '../../images/tinkoff.svg';
import mip from '../../images/mir.svg';

const Payments = () => {
    return (
        <div className={s.paymentsWrapper}>
            <div className={s.item}><img src={visa}/></div>
            <div className={s.item}><img src={mastercard}/></div>
            <div className={s.item}><img src={applePay}/></div>
            <div className={s.item}><img src={googlePay}/></div>
            <div className={s.item}><img src={tinkoff}/></div>
            <div className={s.item}><img src={mip}/></div>
        </div>
    )
}

export default Payments;