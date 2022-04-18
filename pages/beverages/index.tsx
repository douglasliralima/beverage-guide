import { useEffect } from 'react';

import { Observer } from 'mobx-react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image'


import type { beverage } from '../../store/user';
import BeverageCard from '../../components/BeverageCard/BeverageCard';
import styles from "./Beverages.module.css";
import OpenBreweryService from '../../service/OpenBreweryService';
import { getUserStore } from '../../store/user';

export const getStaticProps: GetStaticProps = async () => {
    const service = new OpenBreweryService();
    const beverages: beverage = (await service.list()).data

    return {
        props: {
            beverages,
        },
    }
}

const Beverages: NextPage = ({ beverages }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const store = getUserStore();

    useEffect(() => {
        store.setBeverages(beverages)
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