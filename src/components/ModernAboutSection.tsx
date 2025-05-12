import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Check, Code, Laptop, ArrowRight } from 'lucide-react';
const ModernAboutSection = () => {
  const skills = [{
    name: "Swift & SwiftUI",
    category: "Mobile & Desktop",
    level: 95
  }, {
    name: "iOS & macOS Development",
    category: "Mobile & Desktop",
    level: 90
  }, {
    name: "React & React Native",
    category: "Web & Mobile",
    level: 85
  }, {
    name: "TypeScript",
    category: "Web",
    level: 80
  }, {
    name: "UX/UI Design",
    category: "Design",
    level: 75
  }, {
    name: "Cloud Infrastructure",
    category: "Backend",
    level: 70
  }];
  return <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 hidden md:block">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="relative">
              <img alt="Maxim Keibel" src="/lovable-uploads/3cc5eb79-9e6b-42b2-8b2e-f4e836703daf.jpg" className="rounded-lg w-full max-w-md mx-auto object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-200 rounded-full blur-2xl opacity-50 -z-10"></div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">ÜBER MICH</h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              
              <Card className="border-black border-2 shadow-none bg-transparent p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  Hallo, ich bin Maxim Keibel, ein leidenschaftlicher Softwareentwickler mit Fokus auf iOS und macOS Anwendungen. 
                  Mit einer Kombination aus technischem Know-how und Liebe zum Detail erschaffe ich digitale Lösungen, die nicht 
                  nur funktional, sondern auch ästhetisch ansprechend sind.
                </p>
                <p className="text-gray-700">
                  Meine Reise in der Softwareentwicklung begann vor über 5 Jahren, und seitdem habe ich kontinuierlich meine 
                  Fähigkeiten erweitert und verfeinert. Ich arbeite mit modernsten Technologien und halte mich stets über neue 
                  Entwicklungen auf dem Laufenden.
                </p>
              </Card>
              
              <div className="space-y-5">
                <h3 className="text-xl font-bold mb-4">Meine Fähigkeiten</h3>
                
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }} className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                      <Check size={14} className="text-black" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>)}
                </div>
                
                <div className="pt-6">
                  <motion.button initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.5
                }} viewport={{
                  once: true
                }} className="group inline-flex items-center text-sm font-medium text-black border-2 border-black px-5 py-2.5 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                    Mehr über mich erfahren
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default ModernAboutSection;