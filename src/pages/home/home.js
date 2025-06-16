import styles from './home.module.css';
import TransactionForm from './transactionForm';

export default function Home() {
    return (
        <div className={styles.container}>
            <div class={styles.content}>
                transaction list
            </div>
            <div className={styles.sidebar}>
                <TransactionForm />
            </div>
        </div>
    )
}