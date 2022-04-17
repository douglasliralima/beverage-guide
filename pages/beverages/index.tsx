import { useEffect } from 'react';

import { useObserver } from 'mobx-react';
import type { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image'

import styles from "../../styles/Beverages.module.css";
import OpenBreweryService from '../../service/OpenBreweryService';
import { getUserstore } from '../../store/user';

const Beverages: NextPage = () => {
    const store = getUserstore();
    const service = new OpenBreweryService();
    
    useEffect(() => {
        service.list().then((value) => store.setBeverages(value.data))
    })

    return useObserver(() => (
        <div>
            <header className={styles.beverageHeader}>

                <div className={`${styles.headerReturn} ${styles.inlineDiv}`}>
                    <Link href="/">
                        <a>
                            <div className={styles.imageVector}> 
                                <Image
                                    src="/beverages/vector.png"
                                    width={38.4}
                                    height={38.4}
                                    alt="Go back icon"
                                />
                            </div>
                            <span className={styles.headerText} >
                                Go back
                            </span>
                        </a>
                    </Link>
                </div>

                <div className={`${styles.headerName} ${styles.inlineDiv}`}>
                    <span className={styles.headerText}>
                        {store.name}
                    </span>
                </div>
            </header>

            <main className={styles.beverageMain}>
                {store.beverages && store.beverages.map((value) => 
                <div key={value.id} style={{border:"1px solid #A1A1AA", display:"inline-block"}}>
                    <p>{value.name}</p>
                    <p>{`${value.street} - ${value.country}`}</p>
                    <p>{value.brewery_type}</p>
                    <p>{value.postal_code}</p>
                    <p>{value.phone}</p>
                </div>)}
            </main>
        </div>
    ));
}

export default Beverages;