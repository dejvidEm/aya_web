"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PerformanceChart } from "./performance-chart"
import { cn } from "@/lib/utils"

interface Strategy {
  name: string
  dataset: number
}

interface StrategySliderProps {
  showTwoCards?: boolean
  strategies?: Strategy[]
}

export function StrategySlider({
  showTwoCards = false,
  strategies = [
    { name: "Default Strategy 1", dataset: 1 },
    { name: "Default Strategy 2", dataset: 2 },
  ],
}: StrategySliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = showTwoCards ? Math.ceil(strategies.length / 2) : strategies.length

  const visibleStrategies = showTwoCards ? Math.min(2, strategies.length) : 1

  const maxSlideIndex = Math.max(0, strategies.length - visibleStrategies)

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
          style={{ transform: `translateX(-${currentSlide * (100 / visibleStrategies)}%)` }}
        >
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className={cn("p-6 bg-white rounded-lg shadow-lg", showTwoCards ? "min-w-[50%]" : "min-w-full")}
            >
              <div className="mb-2 font-medium text-primary">{strategy.name}</div>
              <PerformanceChart dataset={(strategy.dataset % 3) + 1} />
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div>led</div>
                <div>2024</div>
                <div>dub</div>
                <div>čec</div>
                <div>říj</div>
                <div>2025</div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="text-xs">Rôst Dôtaktu</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <span className="text-xs">Rôst majetku</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
      )}

      {currentSlide < maxSlideIndex && (
        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      )}

      <div className="mt-6 flex justify-center gap-16">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(showTwoCards ? index * 2 : index)}
            className={cn(
              "h-2 rounded-full transition-all",
              (showTwoCards ? Math.floor(currentSlide / 2) === index : currentSlide === index)
                ? "bg-primary w-8"
                : "bg-gray-300 w-2",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

