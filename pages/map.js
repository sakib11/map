import styles from '../styles/Map.module.css'
import Image from 'next/image'
function Map() {
    return (
        <div className={styles.container}>
            <header className={`${styles.nav} cf`} >
                <section className={styles.logo} >
                    <Image
                        src="/logo.png"
                        alt="A logo of an imaginary company"
                        layout='fill'
                        objectFit='contain'
                    />
                </section>
                <nav className={styles.nav_menu} >
                    <ul className={`${styles.menu} cf`}  >
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Download</a></li>
                    </ul>
                </nav>
                <section className={styles.avatar_area} >
                    fsdfsdf
                </section>
            </header>
            <content className={styles.content} >

            </content>
        </div>
    )
}

export default Map