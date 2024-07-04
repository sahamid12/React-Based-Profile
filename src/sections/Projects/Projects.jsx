import styles from "./ProjectsStyles.module.css";
import STT from "../../assets/SuperTicTacToe.png";
import Yahtzee from "../../assets/Yahtze.png";
import ST from "../../assets/ST.png";
import LQ from "../../assets/LQ.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={STT}
          link="https://github.com/sahamid12/Super-Tic-Tac-Toe-web-application"
          h3="SuperTicTacToe"
          p="Conquer Super Tic Tac Toe with real-time multiplayer action!"
        />
        <ProjectCard
          src={ST}
          link="https://github.com/sahamid12/Stock-Trading-Game"
          h3="Stock Trading Game"
          p="Master the stock market with our risk-free trading simulation! "
        />
        <ProjectCard
          src={Yahtzee}
          link="https://github.com/sahamid12/Yatzee"
          h3="Yahtzee"
          p="Roll the dice and outscore the computer in this classic Yahtzee game!"
        />
        <ProjectCard
          src={LQ}
          link="https://github.com/sahamid12/Labyrinth-Quest"
          h3="Labyrinth Quest"
          p="Navigate dynamic mazes with realistic physics in this immersive JavaScript game"
        />
      </div>
    </section>
  );
}

export default Projects;
