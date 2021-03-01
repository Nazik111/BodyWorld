import React from 'react'
import s from './Footer.module.css'
import {Button} from 'reactstrap'

const Footer =()=> {
   return(
       <div className={s.footerWrapper}>
        <div className={s.title}>
            <span>Итого: 1 150 ₽</span>
        </div>
           <Button color="danger" className={s.purchaseButton}>Перейти к оплате</Button>
    </div>
   )
}

export default Footer;