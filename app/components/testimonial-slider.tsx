"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  metric: string
  image: string
  text: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ján K.",
    metric: "zisk +12 % ročne",
    image: "/placeholder.svg?height=80&width=80",
    text: "Predtým som skúšal obchodovať sám, ale výsledky boli nepredvídateľné. S AYA len nastavím stratégiu a sledujem, ako sa moje investície zhodnocujú. Ušetril som čas aj nervy a konečne vidím stabilné zisky.",
    date: "01.02.2025",
  },
  {
    name: "Petra M.",
    metric: "pasívny príjem 350 € mesačne",
    image: "/placeholder.svg?height=80&width=80",
    text: "Nemám čas ani skúsenosti na aktívne obchodovanie, ale vďaka AYA som konečne našla spôsob, ako investovať bez stresu. Všetko je transparentné, jednoducho nastaviteľné a prináša skutočné výsledky.",
    date: "12.02.2025",
  },
  {
    name: "Martin R.",
    metric: "zisk +20 % ročne",
    image: "/placeholder.svg?height=80&width=80",
    text: "V minulosti som vyskúšal rôzne investičné platformy, ale vždy tam boli skryté poplatky alebo zložité nastavenia. AYA ma príjemne prekvapila svojím profesionálnym prístupom a konzitentnými ziskami bez komplikácií.",
    date: "15.02.2025",
  },
]

interface TestimonialSliderProps {
  showTwoCards?: boolean
}

export function TestimonialSlider({ showTwoCards = false }: TestimonialSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = showTwoCards ? Math.ceil(testimonials.length / 2) : testimonials.length

  const visibleTestimonials = showTwoCards ? 2 : 1
  const maxSlideIndex = Math.max(0, testimonials.length - visibleTestimonials)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlideIndex))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / visibleTestimonials)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={cn("px-4", showTwoCards ? "min-w-[50%]" : "min-w-full")}
            >
              <div className="h-full rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex h-full flex-col space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2D4B94]">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.metric}</p>
                    </div>
                  </div>
                  <p className="text-lg font-light leading-relaxed text-gray-600">{testimonial.text}</p>
                  <p className="mt-auto text-sm text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {currentSlide > 0 && (
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="rounded-full p-2 text-primary transition-colors hover:text-primary/80"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        </div>
      )}

      {currentSlide < maxSlideIndex && (
        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="rounded-full p-2 text-primary transition-colors hover:text-primary/80"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}

      <div className="mt-12 flex justify-center gap-16">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(showTwoCards ? index * 2 : index)}
            className={cn(
              "h-2 rounded-full transition-all",
              (showTwoCards ? Math.floor(currentSlide / 2) === index : currentSlide === index)
                ? "w-8 bg-primary"
                : "w-2 bg-gray-300",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

