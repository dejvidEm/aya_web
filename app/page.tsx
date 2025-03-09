"use client"

import Image from "next/image"
import Link from "next/link"
import { BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { StrategySlider } from "./components/strategy-slider"
import { TestimonialSlider } from "./components/testimonial-slider"

import ph from "./assets/ph.jpeg"
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

