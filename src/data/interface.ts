
export interface Project {
  id: string;
  title: string;
  role: string;
  shortDescription: string;
  description: string;
  githubUrl: string;
  technologies: string[]; // Indica que es un array de textos
  images: string[];       // Indica que es un array de URLs (textos)
}