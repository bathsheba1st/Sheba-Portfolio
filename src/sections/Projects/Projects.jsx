import styles from './ProjectStyles.module.css';
import movie from '../../assets/hero.png';
import xora from '../../assets/xeno.png';
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
          h1='Built using React, TailwindCSS and Appwrite as DB'
        />
        <ProjectCard
          src={xora}
          link='https://sass-page-five.vercel.app/'
          h3='XORA'
          p='SaaS Landing Page'
          h1='Built using React and TailwindCSS'
        />
        <ProjectCard
          src={awwwwwards}
          link='https://awwwwwards.vercel.app/'
          h3='Awwwwwards'
          p='Zentry Inspired Page'
          h1='Built using React, GSAP and TailwindCSS'
        />
      </div>
    </section>
  );
}

export default Projects;
