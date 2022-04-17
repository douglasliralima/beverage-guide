import type { NextPage } from 'next';
import type { beverage } from '../../store/user';
import styles from "./beverage.module.css"

const BeverageCard: NextPage<beverage> = (props) => {
    return <div key={props.id} className={styles.card}>
        <p>{props.name}</p>
        <p>{`${props.street} - ${props.country}`}</p>
        <p>{props.brewery_type}</p>
        <p>{props.postal_code}</p>
        <p>{props.phone}</p>
    </div>
}

export default BeverageCard;