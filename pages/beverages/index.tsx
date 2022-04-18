import { useEffect } from 'react';

import { Observer } from 'mobx-react';
import type { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image'

import BeverageCard from '../../components/BeverageCard/BeverageCard';
import styles from "./Beverages.module.css";
import OpenBreweryService from '../../service/OpenBreweryService';
import { getUserStore } from '../../store/user';

const Beverages: NextPage = () => {
    const store = getUserStore();
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
                    <div className={styles.beverageRow}>
                        {store.beverages &&
                            store.beverages.map((value) =>
                                <div key={value.id} className={styles.flexThreeItems}>
                                    <BeverageCard {...value} />
                                </div>
                            )}
                    </div>
                </main>
            </div>
        )}
    </Observer>
}

export default Beverages;