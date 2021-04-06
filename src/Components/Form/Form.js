import React, {useState} from 'react'
import s from './Form.module.css'
import {Input} from "reactstrap";
import {Checkbox} from "primereact/checkbox";


const Form = () => {
    const [checked, setChecked] = useState([]);



    return (
        <div><div className={s.formWrapper}>
            <Input type="email" name="email" id="exampleEmail" className={s.exampleEmail}  placeholder="E-mail" />
            <Input type="email" name="email" id="exampleEmail" className={s.exampleEmail} placeholder="Повторите e-mail" />
            <div className={s.formTitle}>Внимательно проверьте ваш e-mail адрес. Билеты на него придут сразу после оплаты</div>
        </div>

<div className={s.checkboxWrapper}>
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                <label htmlFor="cb1" className="p-checkbox-label">Я соглашаюсь с Правилами обмена и возврата билетов и Правилами посещения Выставки</label>
</div>
            <hr/>
        </div>
    )
}

export default Form;