import styles from "./knowledgetree.module.css"
export default function knwoledgeTree(){
    return(
        <div className={styles.background}>
            <div className={styles.knowledgeLayout}>
                <div className={styles.headerMenu}></div>
                <div className={styles.boardLayout}>
                    <div className={styles.board}></div>
                    <div className={styles.board}></div>
                    <div className={styles.board}></div>
                    <div className={styles.board}></div>
                    <div className={styles.board}></div>
                    <div className={styles.board}></div>
                </div>
            </div>
        </div>
    )
}