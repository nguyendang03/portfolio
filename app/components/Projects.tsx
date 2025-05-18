"use client";

import Image from "next/image";
import { Project } from "../types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Claims Request",
      description: "A centralised system that supports the creation of claims and reduces the process of paper work",
      imageUrl: "/claimrequest.png",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      liveUrl: "https://group-final-project.vercel.app/",
      githubUrl: "https://github.com/QHuyyyyy/Group_Final_Project.git"
    },
    {
      id: 2,
      title: "Koi Farm Shop (yet to be hosted on website)",
      description: "A website established to provide not only buying and selling fish, but also consignment sales and online care services",
      imageUrl: "/koiviet.png",
      technologies: ["React", "CSS", "JavaScript", "GraphQL"],
      liveUrl: "",
      githubUrl: "https://github.com/tuanbin298/koi_farm_shop"
    },
    {
      id: 3,
      title: "Manager Post",
      description: "A small project focusing on managing users' posts, allowing users to create, edit, and delete their posts",
      imageUrl: "/postmanager.png",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      liveUrl: "https://manager-post.vercel.app/",
      githubUrl: "https://github.com/QHuyyyyy/ManagerPost"
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">My Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I have taken part in
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" id="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-tile group bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill={true}
                  className="transition-transform duration-500 group-hover:scale-110 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition-colors text-sm flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors text-sm flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
