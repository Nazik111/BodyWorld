import React from 'react';
import s from './HeaderLogo.module.css'
import logoSrc from '../../images/image 1 (1).png'

const HeaderLogo = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.logo}>
          <img src={logoSrc} alt='Body Worlds'/>
            </div>
            </div>
    )
}

export default HeaderLogo;