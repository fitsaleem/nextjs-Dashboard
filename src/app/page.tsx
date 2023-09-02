
import styles from './page.module.css'
import Dashboard from './dashboard/Dashboard'
import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <SideMenu/>
      <Dashboard/>
    </main>
  )
}
