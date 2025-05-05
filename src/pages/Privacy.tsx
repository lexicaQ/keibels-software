
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
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
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Datenschutzerklärung</h1>
            
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-bold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Datenerfassung auf dieser Website</h3>
              <p className="mb-6">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <Separator className="my-6 bg-white/10" />
              
              <h2 className="text-2xl font-bold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-bold mb-2">Datenschutz</h3>
              <p className="mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-6">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                
                Maxim Keibel<br />
                KEIBEL SOFTWARE<br />
                Am Ring 3<br />
                85737 Ismaning<br /><br />
                
                Telefon: +49 1734429624<br />
                E-Mail: maxim.keibel@icloud.com
              </p>
              
              <Separator className="my-6 bg-white/10" />
              
              <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-bold mb-2">Cookies</h3>
              <p className="mb-6">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten 
                auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Server-Log-Dateien</h3>
              <p className="mb-6">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-6">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              
              <Separator className="my-6 bg-white/10" />
              
              <h2 className="text-2xl font-bold mb-4">4. Kontaktformular</h2>
              <p className="mb-6">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht 
                ohne Ihre Einwilligung weiter.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">5. Ihre Rechte</h2>
              <p className="mb-6">
                Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen 
                Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von 
                der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen 
                Daten.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
