import '../static/css/Projects.css';
import MovingGallery from './MovingGallery';
import projectData from '../static/javascripts/projectData';
function Projects({ pageNameToLoad }) {

    const projectPage = projectData.map((project) => {
        if (pageNameToLoad === project.path) {
            return (
                <div key={project.count}>
                    <div className='project__title'>
                        <h1>
                            {project.project}
                        </h1>
                    </div>
                    <div className='project__content'>
                        <div className='project__description'>
                            <div className='project__description__title'>
                                Project Description
                            </div>
                        </div>
                        <div className='project__description__content'>
                            {project.projectDescription}
                        </div>
                        <MovingGallery pag1={pageNameToLoad}></MovingGallery>
                        <div className={`project__data`}>
                            <div>
                                {project.div1}
                            </div>
                            <div>
                                {project.div2}
                            </div>
                            <div>
                                {project.div3}
                            </div>
                            <div>
                                {project.div4}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
    });


    return (
        <div className='project'>
            {projectPage}
        </div>
    );
}

export default Projects;