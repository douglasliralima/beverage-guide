import { useEffect } from 'react';

import { Observer } from 'mobx-react';
import type { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image'

import BeverageCard from '../../components/BeverageCard/BeverageCard';
import styles from "../../styles/Beverages.module.css";
import OpenBreweryService from '../../service/OpenBreweryService';
import { getUserstore } from '../../store/user';

const Beverages: NextPage = () => {
    const store = getUserstore();
    const service = new OpenBreweryService();

    useEffect(() => {
        service.list().then((value) => store.setBeverages(value.data))
    })

    return <Observer>
        {() => (
            <div>
                <header className={styles.beverageHeader}>

                    <div className={`${styles.headerReturn} ${styles.inlineDiv}`}>
                        <Link href="/">
                            <a>
                                <div className={styles.imageVector}>
                                    <Image
                                        src="/pages/beverages/goBack.png"
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
                    {store.beverages &&
                        store.beverages.map((value) => <BeverageCard key={value.id} {...value} />)}
                </main>
            </div>
        )}
    </Observer>
}

export default Beverages;