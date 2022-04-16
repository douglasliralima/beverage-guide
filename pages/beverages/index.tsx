import { useObserver } from 'mobx-react';
import type { NextPage } from 'next';




import { getUserstore } from '../../store/user';

const Beverages: NextPage = () => {
    const store = getUserstore();
    return useObserver(() => (
        <h1>Hello world!!</h1>
    ));
}

export default Beverages;