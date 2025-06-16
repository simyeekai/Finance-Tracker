import { useAuthContext } from '../../hooks/useAuthContext'

import styles from './home.module.css';
import TransactionForm from './transactionForm';

export default function Home() {
    const { user } = useAuthContext()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                transaction list
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}