import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Github',
    Svg: require('@site/static/img/github.svg').default,
    link: 'https://github.com/SAURETMathieu',
    description: (
      <>
        Vous pouvez retrouver le code source de mes projets sur Github.
      </>
    ),
  },
  {
    title: 'LinkedIn',
    Svg: require('@site/static/img/linkedin.svg').default,
    link: 'https://www.linkedin.com/in/mathieu-sauret/',
    description: (
      <>
        Vous pouvez me retrouver sur LinkedIn.
      </>
    ),
  },
  {
    title: 'Technos',
    Svg: require('@site/static/img/react.svg').default,
    link: '',
    description: (
      <>
        Cette documentation a été conçue avec React et Docusaurus.
      </>
    ),
  },
];

function Feature({
  Svg, title, link, description,
}) {
  return (
    <div className={clsx('col col--4')}>
      <Link href={link} className={styles.link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
