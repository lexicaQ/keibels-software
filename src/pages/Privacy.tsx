
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ShieldCheck, Lock, AlertCircle, Info, ServerCrash } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Subtle white line below navbar */}
      <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
      
      <motion.div 
        className="pt-24 pb-20 flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <ShieldCheck size={36} className="mr-4 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Datenschutzerklärung</h1>
            </div>
            
            <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
              Datenschutz und Datensicherheit haben für uns höchste Priorität. Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zwecke der Verarbeitung Ihrer personenbezogenen Daten.
            </p>
            
            <div className="mb-16 relative">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-[200px] opacity-40 z-0"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-[200px] opacity-40 z-0"></div>
              
              {/* Sections */}
              <div className="space-y-8">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 relative z-10">
                  <div className="flex items-start mb-4">
                    <Lock className="mt-1 mr-4 text-white" size={24} />
                    <h2 className="text-2xl font-bold text-white">1. Verantwortlicher</h2>
                  </div>
                  
                  <Separator className="mb-6 bg-white/10" />
                  
                  <div className="pl-9">
                    <p className="text-gray-300 mb-4">
                      Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                    </p>
                    
                    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg mb-4">
                      <p className="text-gray-300 mb-1">Maxim Keibel</p>
                      <p className="text-gray-300 mb-1">KEIBEL SOFTWARE</p>
                      <p className="text-gray-300 mb-1">Am Ring 3</p>
                      <p className="text-gray-300 mb-1">85737 Ismaning</p>
                      <p className="text-gray-300">Deutschland</p>
                    </div>
                    
                    <p className="text-gray-300">
                      E-Mail: <a href="mailto:maxim.keibel@icloud.com" className="text-white hover:underline">maxim.keibel@icloud.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8">
                  <div className="flex items-start mb-4">
                    <Info className="mt-1 mr-4 text-white" size={24} />
                    <h2 className="text-2xl font-bold text-white">2. Allgemeines zur Datenverarbeitung</h2>
                  </div>
                  
                  <Separator className="mb-6 bg-white/10" />
                  
                  <div className="pl-9 space-y-4">
                    <p className="text-gray-300">
                      Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                    </p>
                    
                    <p className="text-gray-300">
                      Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                    </p>
                  </div>
                </div>
                
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8">
                  <div className="flex items-start mb-4">
                    <ServerCrash className="mt-1 mr-4 text-white" size={24} />
                    <h2 className="text-2xl font-bold text-white">3. Datenerfassung beim Besuch unserer Website</h2>
                  </div>
                  
                  <Separator className="mb-6 bg-white/10" />
                  
                  <div className="pl-9 space-y-4">
                    <p className="text-gray-300">
                      Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren Server übermittelt (sog. „Server-Logfiles").
                    </p>
                    
                    <p className="text-gray-300">
                      Diese umfassen:
                    </p>
                    
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                      <li>IP-Adresse</li>
                      <li>Datum und Uhrzeit der Anfrage</li>
                      <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                      <li>Inhalt der Anforderung (konkrete Seite)</li>
                      <li>Zugriffsstatus/HTTP-Statuscode</li>
                      <li>Jeweils übertragene Datenmenge</li>
                      <li>Website, von der die Anforderung kommt</li>
                      <li>Browser</li>
                      <li>Betriebssystem und dessen Oberfläche</li>
                      <li>Sprache und Version der Browsersoftware</li>
                    </ul>
                  </div>
                </div>
                
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="mt-1 mr-4 text-white" size={24} />
                    <h2 className="text-2xl font-bold text-white">4. Ihre Rechte</h2>
                  </div>
                  
                  <Separator className="mb-6 bg-white/10" />
                  
                  <div className="pl-9 space-y-4">
                    <p className="text-gray-300">
                      Sie haben das Recht:
                    </p>
                    
                    <ul className="list-disc pl-5 text-gray-300 space-y-3">
                      <li>
                        <strong className="text-white">Auskunftsrecht:</strong> Informationen über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        <strong className="text-white">Recht auf Berichtigung:</strong> Die unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        <strong className="text-white">Recht auf Löschung:</strong> Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        <strong className="text-white">Recht auf Einschränkung:</strong> Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        <strong className="text-white">Recht auf Widerspruch:</strong> Gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
                      </li>
                      <li>
                        <strong className="text-white">Recht auf Datenübertragbarkeit:</strong> Die Übertragung Ihrer personenbezogenen Daten zu verlangen.
                      </li>
                    </ul>
                    
                    <p className="text-gray-300">
                      Wenn Sie Fragen zum Datenschutz haben oder eines Ihrer Rechte ausüben möchten, kontaktieren Sie uns bitte unter: <a href="mailto:maxim.keibel@icloud.com" className="text-white hover:underline">maxim.keibel@icloud.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg text-center">
                  <p className="text-gray-400 text-sm">
                    Stand: Mai 2025 - KEIBEL SOFTWARE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
