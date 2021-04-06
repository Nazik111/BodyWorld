import React, {useState} from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import s from './Card.module.css'
import {Tooltip} from "reactstrap";


const Card1 = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);


    const button = props.button ? <Button сlassName='cardButton' color='danger' block>Добавить</Button> : '';
    const tooltip = props.tooltip ?<> <span href="#" id="TooltipExample"><div className='pi pi-info-circle'/></span>
        <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
            Покупка льготных билетов осуществляется только в кассе выставки при предъявлении документа, подтверждающего льготу
        </Tooltip> </>: '';
    return(
        <Card className={s.card}>
            <CardBody className={s.cardWrapper}>
                <div className={s.cardTitleWrapper}>
                <CardTitle tag="h5">{props.cardTitle}{tooltip}</CardTitle>
                <CardSubtitle tag="h6"  className={"mb-2 text-muted price"}>{props.price}</CardSubtitle>
                </div>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.description}</CardSubtitle>
                {button}
            </CardBody>


        </Card>
    )
}

export default Card1;