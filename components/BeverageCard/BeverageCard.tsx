import type { NextPage } from 'next';
import Image from 'next/image';

import type { beverage } from '../../store/user';
import styles from "./beverage.module.css"

const BeverageCard: NextPage<beverage> = (props) => {
    return <div key={props.id} className={styles.card}>

        <p className={styles.cardTitle}>
            {props.name}
        </p>

        <div className='adress'>
            <p className={styles.cardAdress}>
                {props.street}
            </p>
            <p className={styles.cardAdress}>
                {`${props.city}, ${props.state} - ${props.country}`}
            </p>
        </div>

        <div className='tags'>
            <div className={styles.cardTags}>
                <div className={styles.tagIcon}>
                    <Image
                        src="/components/beverageCard/brewery_type.png"
                        width={18}
                        height={16}
                        alt="brewery type icon"
                    />
                </div>
                <span className={styles.tagText}>
                    {props.brewery_type}
                </span>
            </div>
            <div className={styles.cardTags}>
                <div className={styles.tagIcon}>
                    <Image
                        src="/components/beverageCard/location.png"
                        width={16}
                        height={18}
                        alt="location icon"
                    />
                </div>
                <span className={styles.tagText}>
                    {props.postal_code}
                </span>
            </div>
            <div className={styles.cardTags}>
                <div className={styles.tagIcon}>
                    <Image
                        src="/components/beverageCard/phone.png"
                        width={18}
                        height={16}
                        alt="phone icon"
                    />
                </div>
                <span className={styles.tagText}>
                    {props.phone}
                </span>
            </div>
            <div className={styles.cardTags}>
                <div className={styles.tagIcon}>
                    <Image
                        src="/components/beverageCard/more.png"
                        width={18}
                        height={16}
                        alt="more icon"
                    />
                </div>
                <span className={styles.tagText}>
                    add more
                </span>
            </div>
        </div>

    </div>
}

export default BeverageCard;