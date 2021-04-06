import React from 'react'
import s from './Calendar.module.css'
import {Calendar} from 'primereact/calendar'
import {locale, addLocale} from "primereact/api";

import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './Calendar.sass'



const Calendar1 = () => {


    addLocale('rus', {
        firstDayOfWeek: 1,
        dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота', 'Воскресенье'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октабрь', 'Ноябрь', 'Декабрь'],
        today: 'Сегодня',
        clear: 'Чисто'
    });
    locale('rus')



    return (
<>
        <div className={s.calendarWrapper}>
            <div className={s.calendarForm}>

                <span className='p-float-label'>
                    <Calendar  id='icon' showIcon/>
            </span>
                <label htmlFor="icon">Выберите дату</label>
                </div>
                <div className={s.calendarTitle}>Стоимость билета в праздничные дни рассчитывается по тарифу выходного дня
            </div>
        </div>
</>

    )
}

export default Calendar1;