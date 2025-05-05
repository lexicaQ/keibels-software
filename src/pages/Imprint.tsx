
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const Imprint = () => {
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
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Impressum</h1>
            
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-6">
                Maxim Keibel<br />
                KEIBEL SOFTWARE<br />
                Am Ring 3<br />
                85737 Ismaning
              </p>
              
              <h3 className="text-xl font-bold mb-2">Kontakt</h3>
              <p className="mb-6">
                Telefon: +49 1734429624<br />
                E-Mail: maxim.keibel@icloud.com
              </p>
              
              <Separator className="my-6 bg-white/10" />
              
              <h3 className="text-xl font-bold mb-2">Umsatzsteuer-ID</h3>
              <p className="mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE12345678
              </p>
              
              <Separator className="my-6 bg-white/10" />
              
              <h3 className="text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p className="mb-6">
                Maxim Keibel<br />
                Am Ring 3<br />
                85737 Ismaning
              </p>
              
              <Separator className="my-6 bg-white/10" />
              
              <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-bold mb-2">Haftung für Inhalte</h3>
              <p className="mb-6">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als 
                Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch 
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Urheberrecht</h3>
              <p className="mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Imprint;
