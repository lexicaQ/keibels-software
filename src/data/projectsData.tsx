
import React, { useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  slogan: string;
  description: string;
  platform: 'Web App' | 'iOS App';
  year: number;
  image: string;
  highlights: string[];
  link?: string;
  caseStudyPath?: string;
  videoUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  mockups?: {
    desktop?: string[];
    mobile?: string[];
  };
  testimonial?: {
    author: string;
    role: string;
    text: string;
    image: string;
  };
  problem?: string;
  solution?: string;
  techStack?: string[];
  appContent?: (isAnimating: boolean) => React.ReactNode;
}

const projectsData: Project[] = [
  {
    id: 'moodai',
    title: 'MoodAI',
    slogan: 'Stimmungsanalyse für bessere Kommunikation',
    description: 'MoodAI analysiert die Stimmung in Textnachrichten und E-Mails, um Missverständnisse zu vermeiden und die Kommunikation zu verbessern. Durch den Einsatz von künstlicher Intelligenz hilft die App, die emotionale Tonalität von Nachrichten zu erkennen und entsprechend zu reagieren.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/moodai/moodai-featured.png',
    highlights: [
      'Echtzeit-Stimmungsanalyse',
      'Integration in bestehende Messaging-Apps',
      'Personalisierte Feedback-Berichte'
    ],
    caseStudyPath: '/case-studies/moodai',
    mockups: {
      mobile: [
        '/images/projects/moodai/mockups/moodai-iphone-1.png',
        '/images/projects/moodai/mockups/moodai-iphone-2.png',
        '/images/projects/moodai/mockups/moodai-iphone-3.png'
      ]
    },
    testimonial: {
      author: 'Anna Müller',
      role: 'Kommunikationstrainerin',
      text: 'MoodAI hat meine Arbeit revolutioniert. Ich kann meinen Klienten jetzt noch besser helfen, ihre Kommunikation zu verbessern.',
      image: '/images/testimonials/anna-mueller.jpg'
    },
    problem: 'Missverständnisse in der digitalen Kommunikation führen oft zu Konflikten und Frustration.',
    solution: 'MoodAI analysiert die Stimmung in Texten und gibt Nutzern Feedback, um ihre Kommunikation zu verbessern.',
    techStack: ['Swift', 'Natural Language Processing', 'Core ML'],
    backgroundColor: '#f0f4ff',
    textColor: '#334155',
    accentColor: '#6366f1'
  },
  {
    id: 'smart-mirror',
    title: 'Smart Mirror',
    slogan: 'Der Spiegel, der mitdenkt',
    description: 'Ein intelligenter Spiegel, der aktuelle Nachrichten, Wetterinformationen und Kalendereinträge anzeigt. Der Smart Mirror ist ein interaktives Gerät, das sich nahtlos in den Alltag integriert und dem Benutzer hilft, organisiert und informiert zu bleiben.',
    platform: 'Web App',
    year: 2022,
    image: '/images/projects/smart-mirror/smart-mirror-featured.png',
    highlights: [
      'Personalisierbare Widgets',
      'Sprachsteuerung',
      'Integration mit Smart-Home-Geräten'
    ],
    caseStudyPath: '/case-studies/smart-mirror',
    mockups: {
      desktop: [
        '/images/projects/smart-mirror/mockups/smart-mirror-desktop-1.png',
        '/images/projects/smart-mirror/mockups/smart-mirror-desktop-2.png'
      ]
    },
    testimonial: {
      author: 'Max Schmidt',
      role: 'Softwareentwickler',
      text: 'Der Smart Mirror ist ein tolles Projekt, das zeigt, wie Technologie unseren Alltag bereichern kann.',
      image: '/images/testimonials/max-schmidt.jpg'
    },
    problem: 'Viele Menschen fühlen sich morgens überfordert von der Informationsflut.',
    solution: 'Der Smart Mirror bündelt alle wichtigen Informationen an einem Ort und hilft Nutzern, den Tag entspannt zu beginnen.',
    techStack: ['React', 'Node.js', 'Raspberry Pi'],
    backgroundColor: '#e5e7eb',
    textColor: '#1f2937',
    accentColor: '#4b5563'
  },
  {
    id: 'health-tracker',
    title: 'Health Tracker',
    slogan: 'Deine Gesundheit immer im Blick',
    description: 'Eine umfassende App zur Verfolgung von Gesundheitsdaten wie Schlaf, Ernährung und Bewegung. Der Health Tracker hilft Nutzern, ihre Gewohnheiten zu verstehen und gesündere Entscheidungen zu treffen. Die App bietet personalisierte Empfehlungen und motiviert zu einem aktiven Lebensstil.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/health-tracker/health-tracker-featured.png',
    highlights: [
      'Automatische Datenerfassung',
      'Personalisierte Empfehlungen',
      'Integration mit Wearables'
    ],
    caseStudyPath: '/case-studies/health-tracker',
    mockups: {
      mobile: [
        '/images/projects/health-tracker/mockups/health-tracker-iphone-1.png',
        '/images/projects/health-tracker/mockups/health-tracker-iphone-2.png',
        '/images/projects/health-tracker/mockups/health-tracker-iphone-3.png'
      ]
    },
    testimonial: {
      author: 'Lena Wagner',
      role: 'Ernährungsberaterin',
      text: 'Der Health Tracker ist ein wertvolles Werkzeug für alle, die ihre Gesundheit verbessern möchten.',
      image: '/images/testimonials/lena-wagner.jpg'
    },
    problem: 'Viele Menschen haben Schwierigkeiten, ihre Gesundheitsdaten im Blick zu behalten.',
    solution: 'Der Health Tracker erfasst und analysiert Gesundheitsdaten automatisch und gibt personalisierte Empfehlungen.',
    techStack: ['Swift', 'Core Data', 'HealthKit'],
    backgroundColor: '#f0fdfa',
    textColor: '#0e7490',
    accentColor: '#14b8a6'
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    slogan: 'Organisiere dein Leben',
    description: 'Eine einfache und intuitive App zur Verwaltung von Aufgaben und Projekten. Der Task Manager hilft Nutzern, den Überblick zu behalten und ihre Produktivität zu steigern. Die App bietet Funktionen wie Erinnerungen, Prioritäten und Team-Collaboration.',
    platform: 'Web App',
    year: 2022,
    image: '/images/projects/task-manager/task-manager-featured.png',
    highlights: [
      'Drag-and-Drop-Interface',
      'Team-Collaboration',
      'Integration mit Kalender-Apps'
    ],
    caseStudyPath: '/case-studies/task-manager',
    mockups: {
      desktop: [
        '/images/projects/task-manager/mockups/task-manager-desktop-1.png',
        '/images/projects/task-manager/mockups/task-manager-desktop-2.png'
      ]
    },
    testimonial: {
      author: 'David Klein',
      role: 'Projektmanager',
      text: 'Der Task Manager hat unsere Teamarbeit deutlich verbessert.',
      image: '/images/testimonials/david-klein.jpg'
    },
    problem: 'Viele Menschen fühlen sich von ihren Aufgaben überfordert und haben Schwierigkeiten, den Überblick zu behalten.',
    solution: 'Der Task Manager bietet eine einfache und intuitive Möglichkeit, Aufgaben zu verwalten und die Produktivität zu steigern.',
    techStack: ['React', 'Redux', 'Firebase'],
    backgroundColor: '#fef08a',
    textColor: '#a16207',
    accentColor: '#facc15'
  },
  {
    id: 'eco-tracker',
    title: 'Eco Tracker',
    slogan: 'Verfolge deinen ökologischen Fußabdruck',
    description: 'Eine App, die Nutzern hilft, ihren ökologischen Fußabdruck zu reduzieren. Der Eco Tracker analysiert das Verhalten der Nutzer und gibt personalisierte Tipps zur Verbesserung der Nachhaltigkeit. Die App motiviert zu einem umweltbewussten Lebensstil und fördert das Bewusstsein für ökologische Themen.',
    platform: 'iOS App',
    year: 2023,
    image: '/images/projects/eco-tracker/eco-tracker-featured.png',
    highlights: [
      'Automatische Berechnung des CO2-Fußabdrucks',
      'Personalisierte Tipps zur Nachhaltigkeit',
      'Community-Funktionen'
    ],
    caseStudyPath: '/case-studies/eco-tracker',
    mockups: {
      mobile: [
        '/images/projects/eco-tracker/mockups/eco-tracker-iphone-1.png',
        '/images/projects/eco-tracker/mockups/eco-tracker-iphone-2.png',
        '/images/projects/eco-tracker/mockups/eco-tracker-iphone-3.png'
      ]
    },
    testimonial: {
      author: 'Sophie Weber',
      role: 'Umweltaktivistin',
      text: 'Der Eco Tracker ist ein wertvolles Werkzeug für alle, die einen Beitrag zum Umweltschutz leisten möchten.',
      image: '/images/testimonials/sophie-weber.jpg'
    },
    problem: 'Viele Menschen sind sich ihres ökologischen Fußabdrucks nicht bewusst und wissen nicht, wie sie ihn reduzieren können.',
    solution: 'Der Eco Tracker analysiert das Verhalten der Nutzer und gibt personalisierte Tipps zur Verbesserung der Nachhaltigkeit.',
    techStack: ['Swift', 'Core Location', 'Realm'],
    backgroundColor: '#ecfdf5',
    textColor: '#065f46',
    accentColor: '#10b981'
  }
];

export default projectsData;

let audioElement: HTMLAudioElement | null = null;

export const useAudio = (isAnimating: boolean) => {
  useEffect(() => {
    if (isAnimating) {
      audioElement = document.createElement('audio');
      audioElement.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAAAP/jOMAAAAAAAAAAAABJbmZvAAAADwAAAAMAAAGwAJCQkJCQkJCQkJCQkJCQkMDAwMDAwMDAwMDAwMDAwMDA4ODg4ODg4ODg4ODg4ODg4OD//////////////////////////wAAAABMYXZjNTguMTMAAAAAAAAAAAAAACQCkAAAAAAAAAGwhYzJKgAAAAAAAAAAAAAAAAAA';
    }

    const playAudio = () => {
      if (audioElement) {
        audioElement.play().catch(error => {
          console.error("Playback failed:", error);
        });
      }
    };

    const pauseAudio = () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };

    if (isAnimating && audioElement) {
      playAudio();
    } else {
      pauseAudio();
    }

    return () => {
      pauseAudio();
      audioElement = null;
    };
  }, [isAnimating]);
};
