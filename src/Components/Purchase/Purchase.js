import React from 'react'
import s from './Purchase.module.css'
import ticketLogo from '../../images/Frame 19.svg'
import {CardSubtitle} from "reactstrap";

const Purchase = (props) => {

   const logo = props.logo ? <div className={s.ticketLogo}><img src={ticketLogo} alt='ticket Logo'/></div> : '';
const title = props.title ? <CardSubtitle tag="h6" style={{fontSize: '0.7rem'}} className={"mb-1 descr"}>Укажите вашу электронную почту для получения билета и чека</CardSubtitle>: '';

return (
        <div className={s.purchaseWrapper}>
<div className={s.purchaseTitleWrapper}>
    {logo}
    <div className={s.ticketTitle}>Покупка билета</div>
</div>
            <div className={s.descriptionTitle}>
            {title}
            </div>
<hr/>
        </div>
    )

}

export default Purchase;