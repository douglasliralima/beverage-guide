import type { NextPage } from 'next';
import Image from 'next/image';
import { Observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';

import type { beverage } from '../../store/user';
import { getUserStore } from '../../store/user';
import styles from "./beverage.module.css"

const BeverageCard: NextPage<beverage> = (props) => {
    const store = getUserStore();

    const [customTags, setCustomTags] = useState<Array<string>>([]);
    const [addEvent, setAddEvent] = useState(false);
    const [addText, setAddText] = useState("add more");
    const wrapperRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setAddText("add more");
                setAddEvent(false)
            }
        };

        if (addEvent === true) {
            document.addEventListener("click", (e) => handleClickOutside(e), false);
        } else {
            document.removeEventListener("click", (e) => handleClickOutside(e), false);
        }
    }, [addEvent]);

    const handleSubmit = () => {
        if (addText === "add more") {
            setAddText("")
        }
        else if (addText === "") {
            setAddText("add more")
        } else {
            customTags.push(addText);
            setCustomTags(customTags);
            setAddText("add more");
        }
        setAddEvent(!addEvent)
    }

    return <Observer>
        {() => <div className={styles.card}>

            <div className={styles.trashIcon}>
                <Image
                    src="/components/beverageCard/trash.png"
                    width={10}
                    height={14}
                    alt="trash"
                    onClick={() => store.deleteBeverageById(props.id)}
                />
            </div>

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

                {customTags.map((tagValue, index) =>
                    <div key={`${index}-custom-tag`} className={styles.cardTags}>
                        <div className={styles.tagIcon}>
                            <Image
                                src="/components/beverageCard/add.png"
                                width={18}
                                height={16}
                                alt="add icon"
                            />
                        </div>
                        <span className={styles.tagText}>
                            {tagValue}
                        </span>
                    </div>)}

                <div
                    id={`${props.id}-add-tag`}
                    ref={wrapperRef}
                    className={styles.cardTags}
                >
                    <div className={`${styles.tagIcon} ${styles.addIcon}`}>
                        <Image
                            src={`/components/beverageCard/${addEvent ? "add" : "more"}.png`}
                            width={18}
                            height={16}
                            alt={`${addEvent ? "add" : "more"} icon`}
                            onClick={handleSubmit}
                        />
                    </div>
                    {addEvent ?
                        <input className={styles.addInput}
                            value={addText}
                            onChange={(e) => setAddText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit();
                                }
                            }}
                        /> :
                        <span className={styles.tagText}>
                            {addText}
                        </span>}
                </div>

            </div>

        </div>}
    </Observer>
}

export default BeverageCard;