import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main> <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<div className="headerBackground"></div>
      <Landing/>
      <div className="footerBackground"></div>
    </main>
  )
}
