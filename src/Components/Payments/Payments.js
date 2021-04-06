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
            <div className={s.item}><img src={visa} alt='visa'/></div>
            <div className={s.item}><img src={mastercard} alt='mastercard'/></div>
            <div className={s.item}><img src={applePay} alt='applepay'/></div>
            <div className={s.item}><img src={googlePay} alt='googlePay'/></div>
            <div className={s.item}><img src={tinkoff} alt='tinkoff'/></div>
            <div className={s.item}><img src={mip} alt='mip'/></div>
        </div>
    )
}

export default Payments;