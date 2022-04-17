import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import type { beverage } from '../../store/user';
import styles from "./beverage.module.css"

const BeverageCard: NextPage<beverage> = (props) => {
    const [addEvent, setAddEvent] = useState(false);
    const [customText, setCustomText] = useState("add more");
    const wrapperRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(addEvent === true) {
            document.addEventListener("click", (e) => handleClickOutside(e, customText), false);
        } else {
            document.removeEventListener("click", (e) => handleClickOutside(e, customText), false);
        }
    }, [addEvent, customText]);

    const handleClickOutside = (event: any, customText: string) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            if (customText === "add more") {
                setCustomText("")
            }
            else if (customText === "") {
                setCustomText("add more")
            } else {
                setCustomText(customText)
            }
            setAddEvent(!addEvent)
        }
    };

    const handleSubmit = () => {
        if (customText === "add more") {
            setCustomText("")
        }
        else if (customText === "") {
            setCustomText("add more")
        }
        setAddEvent(!addEvent)
    }

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
            <div
                id={`${props.id}-add-tag`}
                ref={wrapperRef}
                className={styles.cardTags}
            >
                <div className={styles.tagIcon}>
                    <Image
                        src={`/components/beverageCard/${addEvent ? "add" : "more"}.png`}
                        width={18}
                        height={16}
                        alt="more icon"
                        onClick={handleSubmit}
                    />
                </div>
                {addEvent ?
                    <input className={styles.addInput}
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit();
                            }
                        }}
                    /> :
                    <span className={styles.tagText}>
                        {customText}
                    </span>}
            </div>
        </div>

    </div>
}

export default BeverageCard;