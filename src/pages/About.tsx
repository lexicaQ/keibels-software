
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über mich</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Lernen Sie mich kennen: Meine Geschichte, Werte und Leidenschaften.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="relative">
                <div className="absolute inset-0 border-2 border-black rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                  alt="Maxim Keibel" 
                  className="relative z-10 rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Meine Geschichte</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Ich bin Maxim Keibel, ein leidenschaftlicher Software-Entwickler und UI/UX-Designer 
                mit einem besonderen Fokus auf iOS- und macOS-Anwendungen. Meine Reise in der Welt 
                der Technologie begann früh mit einem tiefen Interesse an Problemlösung und kreativem Gestalten.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Als Schüler am Gymnasium Ismaning verbinde ich meine akademische Ausbildung mit praktischen 
                Projekten und Eigenentwicklungen. Ich bin davon überzeugt, dass die Kombination aus 
                technischem Know-how und ästhetischem Design die Grundlage für herausragende digitale 
                Produkte bildet.
              </p>
              
              <p className="text-lg text-gray-700">
                Über die Jahre habe ich verschiedene Projekte entwickelt – von Clipboard-Managern über 
                Timer-Apps bis hin zu spezialisierten Navigations-Tools. Jedes Projekt ist von meiner 
                Überzeugung geprägt, dass Software nicht nur funktional, sondern auch intuitiv und 
                ästhetisch ansprechend sein sollte.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Meine Werte</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Ehrlichkeit</h3>
                <p className="text-gray-700">
                  Transparenz und Aufrichtigkeit bilden die Grundlage meiner Arbeit und meiner Beziehungen. 
                  Ich kommuniziere klar und direkt, um Vertrauen aufzubauen und langfristige Zusammenarbeit zu ermöglichen.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Hilfsbereitschaft</h3>
                <p className="text-gray-700">
                  Ich glaube daran, mein Wissen zu teilen und anderen zu helfen, ihre Ziele zu erreichen. 
                  Gemeinsam können wir mehr erreichen als allein, und die Unterstützung anderer bereichert auch meine eigene Erfahrung.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Einsatzbereitschaft</h3>
                <p className="text-gray-700">
                  Wenn ich von einer Idee überzeugt bin, setze ich mich mit vollem Einsatz dafür ein. 
                  Ich scheue keine Herausforderungen und arbeite beharrlich, um nachhaltige und messbare Ergebnisse zu erzielen.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Meine Leidenschaften</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black text-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Software Development</h3>
                <p className="mb-6">
                  Meine Leidenschaft für die Entwicklung von Software geht über das reine Programmieren hinaus. 
                  Es ist die Kunst, komplexe Probleme in elegante Lösungen zu verwandeln und Anwendungen zu schaffen, 
                  die das Leben der Nutzer bereichern und vereinfachen.
                </p>
                <p>
                  Besonders fasziniert bin ich von der iOS- und macOS-Entwicklung, wo ich meine Ideen in 
                  intuitive, leistungsstarke Apps umsetzen kann. Die Verbindung von technischer Exzellenz 
                  mit nutzerorientierten Designs ist mein ständiges Ziel.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border border-black">
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p className="mb-6">
                  Das Design von Benutzeroberflächen ist für mich eine perfekte Kombination aus Kreativität und 
                  Funktionalität. Ich strebe danach, Interfaces zu erschaffen, die nicht nur ästhetisch ansprechend, 
                  sondern auch intuitiv und effizient sind.
                </p>
                <p>
                  Mein minimalistischer, schwarz-weißer Designansatz betont Klarheit und Fokus, während er 
                  gleichzeitig eine zeitlose Eleganz verkörpert. Jedes Element hat einen Zweck, jede Interaktion 
                  ist durchdacht gestaltet.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border border-black">
                <h3 className="text-xl font-bold mb-4">Fitness & Sport</h3>
                <p className="mb-6">
                  Sport und körperliche Fitness sind wesentliche Teile meines Lebens. Als langjähriges Mitglied 
                  im Tennisclub habe ich nicht nur sportliche Erfolge erzielt, sondern auch wertvolle Lektionen 
                  in Disziplin, Ausdauer und Teamarbeit gelernt.
                </p>
                <p>
                  Die Balance zwischen geistiger und körperlicher Aktivität hilft mir, meine Produktivität 
                  und Kreativität zu steigern und neue Perspektiven zu gewinnen.
                </p>
              </div>
              
              <div className="bg-black text-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Künstliche Intelligenz</h3>
                <p className="mb-6">
                  Die Entwicklung und Anwendung von KI-Technologien begeistert mich besonders im Kontext 
                  der Softwareentwicklung. Ich sehe enormes Potenzial in der Integration intelligenter 
                  Systeme in Alltagsanwendungen.
                </p>
                <p>
                  Mein Ziel ist es, KI-Lösungen zu entwickeln, die nicht nur technisch beeindruckend sind, 
                  sondern auch echten Mehrwert für Nutzer schaffen und dabei ethische Grundsätze respektieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
