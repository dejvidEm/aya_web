import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const faqs = [
  {
    question: "Ako funguje copytrading?",
    answer: "Copytrading je spôsob obchodovania, pri ktorom automaticky kopírujete obchody skúsených traderov.",
  },
  {
    question: "Koľko môžem zarobiť?",
    answer: "Stačí si vytvoriť účet, vybrať si tradera a aktivovať kopírovanie jeho obchodov.",
  },
  {
    question: "Môžem kedykoľvek vybrať svoje peniaze?",
    answer: "Áno, svoje prostriedky môžete kedykoľvek vybrať podľa podmienok platformy.",
  },
  {
    question: "Aké poplatky si účtujete?",
    answer: "Poplatky závisia od konkrétnej platformy a vybraného tradera. Presné informácie nájdete v našich podmienkach.",
  },
  {
    question: "Je moje investovanie bezpečné?",
    answer: "Každá investícia nesie určité riziko. Odporúčame dôkladne si preštudovať podmienky a vybrať si overených traderov.",
  },
  {
    question: "Potrebujem skúsenosti s obchodovaním?",
    answer: "Nie, copytrading je vhodný aj pre začiatočníkov, ktorí chcú kopírovať obchody skúsených traderov.",
  },
];

export default function FAQSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">Často kladené otázky</h2>
          <p className="mt-4 text-gray-600">
            Máte otázky o copytradingu alebo našich službách? Tu nájdete
            odpovede na najčastejšie kladené otázky. Ak máte ďalšie otázky,
            neváhajte nás kontaktovať cez tlačidlo nižšie.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Začať investovať
            </button>
            <button
              type="button"
              className="text-blue-700 bg-white hover:bg-slate-100 border-[1px] border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Kontaktovať Nás
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
