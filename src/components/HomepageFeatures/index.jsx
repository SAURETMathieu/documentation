import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Github',
    Svg: require('@site/static/img/icons8-github.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'LinkedIn',
    Svg: require('@site/static/img/icons8-linkedin.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Technos',
    Svg: require('@site/static/img/icons8-linkedin.svg').default,
    description: (
      <>
        Cette documentation a été conçue avec React et Docusaurus.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}