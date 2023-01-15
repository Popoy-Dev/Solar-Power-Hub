import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navigation from '../src/Navbar'
import Slogan from '../src/Content'
import Products from '../src/Products'
import SolarFloodLight from '../src/SolarFloodLight'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation />
      <Slogan />
      <SolarFloodLight />
      <Products />
      
    </>
  )
}
