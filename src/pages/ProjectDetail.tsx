
import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import { Project } from '../data/projectsData';

interface ProjectDetailPageProps {
  projects: Project[];
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projects }) => {
  return <ProjectDetail projects={projects} />;
};

export default ProjectDetailPage;
