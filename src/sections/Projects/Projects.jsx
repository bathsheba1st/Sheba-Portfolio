import styles from './ProjectStyles.module.css';
import movie from '../../assets/hero.png';
import xora from '../../assets/xeno.png';
import fitLift from '../../assets/fitlift.png';
import awwwwwards from '../../assets/gallery-4.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movie}
          link='https://movie-app-gray-nine.vercel.app/'
          h3='Movie'
          p='Movie Search App'
        />
        <ProjectCard
          src={xora}
          link='https://sass-page-five.vercel.app/'
          h3='XORA'
          p='SaaS Landing Page'
        />
        <ProjectCard
          src={awwwwwards}
          link='https://awwwwwards.vercel.app/'
          h3='Awwwwwards'
          p='Zentry Inspired Page'
        />
        <ProjectCard
          src={fitLift}
          link='project link'
          h3='FitLift'
          p='Fitness App'
        />
      </div>
    </section>
  );
}

export default Projects;
