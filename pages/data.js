import styles from '../styles/Data.module.css'
import Image from 'next/image'
import Map from '../components/Map'
function Data() {
    return (
        <div className={styles.container}>
            <header className={`${styles.header} cf`} >
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
                <section className={`${styles.avatar_area} cf`}>
                    <div className={styles.notification} >
                        <Image
                            src="/bell.png"
                            alt="Notification icon"
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <div className={styles.avatar} >
                        <Image
                            src="/profile.png"
                            alt="profile image"
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </section>
            </header>
            <main className={styles.content} >
                <h1 className={styles.title} > Dashboard</h1>
                <section className={styles.map_outer_container} >
                    <div className={styles.map_inner_container}>
                        <Map></Map>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Data