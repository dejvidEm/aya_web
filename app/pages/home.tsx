"use client"

import Image from "next/image"
import Link from "next/link"
import { BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { StrategySlider } from "../components/strategy-slider"
import { TestimonialSlider } from "../components/testimonial-slider"
import Banner from "../components/banner"

import ph from "../assets/ph.jpeg"
import FAQSection from "../components/faq"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              Investovanie s automatizovanými stratégiami
            </h1>
            <p className="max-w-md text-gray-600">
              Väčšina individuálnych obchodníkov prerobí. S AYA investujete inteligentne a nechate expertov pracovať za
              vás s maximálnou efektivitou a minimálnym časovým záväzkom.
            </p>
            <div className="flex flex-wrap gap-4">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Začať investovať</button>
            <button type="button" className="text-blue-700 bg-white hover:bg-slate-100 border-[1px] border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Kontaktovať Nás</button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 top-0 z-10 rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-2 flex justify-center">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1,5 mil. €</div>
                <div className="text-sm text-gray-500">v stratégiách</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-10 rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-2 flex justify-center">
                <div className="flex">
                  <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                    <Image src={ph} alt="User" width={40} height={40} />
                  </div>
                  <div className="-ml-4 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                    <Image src={ph} alt="User" width={40} height={40} />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">120+</div>
                <div className="text-sm text-gray-500">aktívnych investorov</div>
              </div>
            </div>

            <div className="relative z-0 h-[500px] w-[300px]">
              <Image
                src={ph}
                alt="Mobile app screenshot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Copytrading Section */}
      <section className="bg-[#0e1e38] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-center"
            >
              <div className="relative h-[300px] w-full max-w-[500px]">
                <Image
                  src={ph}
                  alt="Trading platform"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold leading-tight md:text-4xl"
              >
                Je copytrading pre vás?
                <br />
                Zistite to hneď teraz!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-md text-gray-300"
              >
                Copytrading je spôsob investovania, kde automaticky kopírujete obchody skúsených a úspešných
                obchodníkov. Tento proces vám umožňuje profitovať z ich rozhodnutí bez potreby aktívneho obchodovania,
                čo je ideálne pre tých, ktorí chcú investovať, ale nemajú čas alebo skúsenosti na vlastné obchodovanie.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="bg-[#0e1e38] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Začiatočníci v investovaní",
                description:
                  "Ideálne pre tých, ktorí začínajú s investovaním a nechcú sa zaoberať zložitými obchodmi sami.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#4D9EFF" strokeWidth="2" />
                    <path
                      d="M12 6V12L16 14"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Ľudia bez času",
                description:
                  "Lorem ipsum dolor sit amet stysdfa consectetur. Arcu mauris ipsum risus placerat tincidunt diam. Metus",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8V12" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M12 16H12.01"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Tí, čo chcú minimalizovať riziko",
                description:
                  "Lorem ipsum dolor sit amet stysdfa consectetur. Arcu mauris ipsum risus placerat tincidunt diam. Metus",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 4H8V20H16V4Z"
                      stroke="#4D9EFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M4 8H8" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H8" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 16H8" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 8H20" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 12H20" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 16H20" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Skúsení investori",
                description:
                  "Lorem ipsum dolor sit amet stysdfa consectetur. Arcu mauris ipsum risus placerat tincidunt diam. Metus",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center space-y-4 border-l border-blue-500 pl-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-full bg-blue-500/20 p-4"
                >
                  {card.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl font-medium"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm text-gray-300"
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* How Copytrading Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight text-primary md:text-4xl"
            >
              Ako funguje copytrading?
              <br />
              Jednoduchý spôsob, ako získať zisk
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-md text-gray-600"
            >
              Copytrading prepája skúsených obchodníkov s investormi, ktorí chcú zarobiť bez aktívneho obchodovania.
              Stačí si vybrať stratégiu, pripojiť sa k nej niekoľkými kliknutiami a váš kapitál bude automaticky
              kopírovať obchody profesionála. Vďaka tejto technológii môžete profitovať z ich skúseností bez potreby
              sledovania trhov a analýzy.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90"
              >
                Začať investovať
              </Link>
              <Link
                href="#"
                className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Kontaktovať nas
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-center rounded-lg bg-blue-50 p-8"
          >
            <Image
              src={ph}
              alt="Trading platform interface"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Jednoduché nastavenie",
              description:
                "Ideálne pre tých, ktorí začínajú s investovaním a nechcú sa zaoberať zložitými obchodmi sami.",
            },
            {
              title: "Kopírujte uspech",
              description:
                "Lorem ipsum dolor sit amet stysdfa consectetur. Arcu mauris ipsum risus placerat tincidunt diam. Metus",
            },
            {
              title: "Bez technických znalostí",
              description:
                "Lorem ipsum dolor sit amet stysdfa consectetur. Arcu mauris ipsum risus placerat tincidunt diam. Metus",
            },
            {
              title: "Diverzifikujte investície",
              description:
                "Lorem ipsum dolor sit amet stysdfa consectetur. Arcu mauris ipsum risus placerat tincidunt diam. Metus",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start space-y-4"
            >
              <div className="rounded-full bg-primary/10 p-4">
                <svg
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.6 9H20.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.6 15H20.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3C14.5013 5.46452 15.9228 8.66283 16 12C15.9228 15.3372 14.5013 18.5355 12 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3C9.49872 5.46452 8.07725 8.66283 8 12C8.07725 15.3372 9.49872 18.5355 12 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategy Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary md:text-4xl"
          >
            Prehľad našich stratégií
            <br />
            nájdete na Myfxbook
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90"
            >
              Stratégií na Myfxbook
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl"
        >
          <StrategySlider
            showTwoCards={true}
            strategies={[
              { name: "Stratégia 1", dataset: 1 },
              { name: "Stratégia 2", dataset: 2 },
              { name: "Stratégia 3", dataset: 3 },
              { name: "Stratégia 4", dataset: 4 },
              { name: "Stratégia 5", dataset: 5 },
              { name: "Stratégia 6", dataset: 6 },
            ]}
          />
        </motion.div>
      </section>

      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-center"
            >
              <div className="relative h-[300px] w-full max-w-[500px]">
                <Image
                  src={ph}
                  alt="Trading platform"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-blue-950 leading-tight md:text-4xl"
              >
                Wealth Management by AYA
                <br />
                - Inteligentné investovanie
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-md text-gray-950"
              >
                Diverzifikujte svoj kapitál inteligentne a bezpečne s AYA. Náš systém copytradingových stratégií vám umožňuje investovať bez potreby aktívneho obchodovania. Vaše prostriedky zostávajú na vašom účte, kde automaticky kopírujete obchody skúsených profesionálov s maximálnym ziskom a minimálnym rizikom. Proces je jednoduchý.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <Banner/>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#2D4B94] md:text-5xl"
          >
            Recenzie našich
            <br />
            investorov
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mx-auto px-12"
        >
          <TestimonialSlider showTwoCards={true} />
        </motion.div>
      </section>
      <FAQSection/>
    </div>
  )
}

