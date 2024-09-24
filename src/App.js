import styles from './App.module.scss';
import { ReactComponent as Signature } from './images/index.svg';
import Nav from './Nav';
import SectionHero from './SectionHero';

export default function App() {
  return (
    <main className="main">
      <header>
        <Nav />
      </header>

      <SectionHero />
      <section className={styles.SectionImg}>
        <div>
          <img
            className="jason"
            src="./jason-b-screenshot.png"
            alt="hero-image-of-Jason"
          />
        </div>
      </section>

      <section className={styles.concpetH1}>
        <h1>
          Concept.
          <br />
          Brand. Build. <br />
          Launch. Exit.
        </h1>
      </section>
      <section className={styles.video}>
        <div>
          <iframe
            title="services-video"
            sandbox="allow-popups"
            src="https://player.vimeo.com/video/1006144894?autoplay=1&loop=1&autopause=0&badge=0&controls=0&muted=1&playsinline=1&background=1"
          />
        </div>
      </section>

      <section>
        <div className={styles.para}>
          <p>
            I help companies make strategic foundational decisions and leverage
            their position in the market — providing long-term support, often
            through a blend of cash and equity.
          </p>
          <br />
          <p>
            In recent years, I've helped build multiple businesses leading to
            over $55M in capital investment.
          </p>
        </div>
        <div className={styles.h1Expect}>
          <h1>
            Here’s what you can
            <br /> expect from me...
          </h1>
        </div>
      </section>

      <section>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p className={styles.pGrid1}>Value</p>
            <p>Experience, big energy and fresh thinking.</p>
          </div>
          <div className={styles.gridItem2}>
            <p className={styles.pGrid1}>Jordan Knott, Founder</p>
            <p>
              "It’s very rare in life when you meet someone that is so
              decisively exceptional at what they do."
            </p>
          </div>
          <div className={styles.gridItem3}>
            <p className={styles.pGrid1}>Insights</p>
            <p>
              Bridge the gap between creative and commercial objectives —
              speaking both languages
            </p>
          </div>
          <div className={styles.gridItem4}>
            <p className={styles.pGrid1}>Peter Hwang, Founder</p>
            <p>
              "From a creative perspective, I’ve never worked with a more
              talented individual."
            </p>
          </div>
          <div className={styles.gridItem5}>
            <p className={styles.pGrid1}>Growth</p>
            <p>
              The foundations to scale — from world-class design and advisory to
              building your future team.
            </p>
          </div>
          <div className={styles.gridItem6}>
            <p className={styles.pGrid1}>Fun</p>
            <p>
              Teach teams to move at velocity and have a hell of a lot of fun
              doing it.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.culturePara}>
        <div>
          <p>
            Culturally, I fit high-energy and fun management teams.
            <br />
            <br />
            I compete in Hyrox races around the world, care deeply about being a
            present father and husband, and maintain a healthy balance between
            work, life and play.
            <br />
            <br />
            Feel free to <a href="mailto:jb@jasonbriscoe.com">email me</a>,{' '}
            <a href="https://calendly.com/">schedule a call</a> or connect on
            <a href="https://read.cv/jsnbrsc"> LinkedIn</a>.
            <br />
            <br />
            Let’s have some fun!
          </p>
          <br />
          <br />
          <br />
          <Signature />
        </div>
      </section>
      <footer>
        <ul>
          <li className={styles.liJason}>Jason Briscoe</li>
          <li className={styles.lilinkedin}>
            <a href="https://www.linkedin.com/in/jsnbrsc/">Linkedin</a>
          </li>
          <li className={styles.licv}>
            <a href="https://read.cv/jsnbrsc">read.cv</a>
          </li>
          <li className={styles.lix}>
            <a href="https://x.com/jsnbrsc">X</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
