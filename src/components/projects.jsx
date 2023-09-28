import * as yaml from 'js-yaml'; // Import the js-yaml library
import ProjectsYAML from '@/content/projects.yml';

export default function Projects() {
  const projectsList = yaml.load(ProjectsYAML);
  return (
  <section className="mb-5" id="about">
    <h3 className="text-2xl mb-5">Projects</h3>
    <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
      {Object.keys(projectsList, project => {
        console.log(project);
      <div className="mb-5">
        <h4 className="text-xl mb-2"></h4>
        <p className="mb-2"></p>
        <p className="mb-2"></p>
        <p className="mb-2"></p>
        <p className="mb-2"></p>
      </div>
})}
    </div>
  </section>
)}
