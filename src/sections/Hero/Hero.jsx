import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Untitled design (1).png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Bathsheba.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile picture' />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Dark mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Bathsheba
          <br />
          Omidiora
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href='https://github.com/bathsheba1st' target='_blank'>
            <img src={githubIcon} alt='GitHub Icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/bathsheba-omidiora-622a05178/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='lindkedin Icon' />
          </a>
        </span>
        <p className={styles.description}>
          A motivated Software Engineer with a passion for full-stack
          development with collaborative problem-solving, automation, and
          continuous improvement in Agile environments.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
