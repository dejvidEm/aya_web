"use client"
import Navbar from "./components/navbar"
import LandingPage from "./pages/home"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage/>
      <Footer/>
    </main>
  )
}

