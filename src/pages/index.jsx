import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CssIcon from '@site/src/components/Logos/CssIcon';
import JavascriptIcon from '@site/src/components/Logos/JavascriptIcon';
import ReactIcon from '@site/src/components/Logos/ReactIcon';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const logos = [
  {
    title: 'JavaScript',
    Svg: <JavascriptIcon size={24} />,
    link: '/docs/javascript',
  },
  {
    title: 'CSS',
    Svg: <CssIcon size={24} />,
    link: '/docs/css',
  },
  {
    title: 'React',
    Svg: <ReactIcon size={24} />,
    link: '/docs/react',
  },

];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.homeAlert}>Documentation en cours de production</p>
        <p className={styles.homeAlert}>Elle sera progressivement ajoutée </p>
        <div className={styles.heroLogos}>
          {logos.map((icon) => (
            <Link key={icon.title} href={icon.link} className={styles.heroLogo}>
              {icon.title}
              {icon.Svg}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation personnel de Mathieu SAURET"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
