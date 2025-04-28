
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: "copyclipcloud",
    title: "CopyClipCloud",
    slogan: "Dein smarter Clipboard-Manager – überall, organisiert, grenzenlos.",
    description: "CopyClipCloud ist die neue Generation der intelligenten Clipboard-Manager für macOS. Entwickelt für maximale Effizienz, Übersichtlichkeit und Stil, erfasst CopyClipCloud automatisch alle kopierten Inhalte und stellt sie in einer modern designten, hochgradig interaktiven Liste dar.",
    platform: "macOS App",
    year: "2025"
  },
  {
    id: "apptimer",
    title: "AppTimer",
    slogan: "Lokale Kontrolle. Klare Übersicht. Sicher testen.",
    description: "AppTimer ist die ideale Lösung für Entwickler:innen und Tester:innen, die ihre lokal signierten Apps auf iOS-Geräten unter Echtzeitbedingungen testen. Die App zeigt auf einen Blick, wie lange das installierte Zertifikat noch gültig ist.",
    platform: "iOS App",
    year: "2023"
  },
  {
    id: "zentro",
    title: "Zentro",
    slogan: "Dein Lieferfokus – punktgenau und auf den Meter genau.",
    description: "Zentro ist die smarte Navigations- und Zonen-App für Lieferdienste wie Lieferando – speziell entwickelt für Fahrer:innen, die in urbanen Gebieten wie München effizient und zonenbasiert arbeiten müssen.",
    platform: "iOS App",
    year: "2023"
  },
  {
    id: "nightmanager",
    title: "NightManager",
    slogan: "Einschlafen mit Klang – aufwachen in Stille.",
    description: "NightManager ist der intelligente Timer für nächtliche Entspannung, sanftes Einschlafen mit Musik und kontrollierte Lautstärkeregelung auf deinem iPhone.",
    platform: "iOS App",
    year: "2024"
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    slogan: "Deine Aufgaben. Klar organisiert. Schnell erledigt.",
    description: "ToDoManager ist eine moderne, minimalistische Aufgabenverwaltungs-App, die dir hilft, deine To-Dos einfach, strukturiert und effizient zu organisieren.",
    platform: "macOS App",
    year: "2025"
  },
  {
    id: "copychecker",
    title: "CopyChecker",
    slogan: "Immer wissen, was du kopiert hast.",
    description: "CopyChecker ist die smarte Overlay-App für iOS, die dir in Echtzeit anzeigt, was du zuletzt kopiert hast – ob Text, Bild, Link, Code oder Dokument.",
    platform: "iOS App",
    year: "2024"
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">MEINE PROJEKTE</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              description={project.description}
              slogan={project.slogan}
              year={project.year}
              platform={project.platform}
              delay={index * 150}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
