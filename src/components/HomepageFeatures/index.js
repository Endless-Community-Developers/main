import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Description',
    description: (
      <>
        We built this website to help Endless Online community developers
        that are interested in creating their own applications, tools, libraries, etc. 
      </>
    ),
  },
  {
    title: 'Tools',
    description: (
      <>
        We have listed all of the current tools availiable for developers,
        thanks to all of the community developers for devoting time to create them for everyone to use. 
      </>
    ),
  },
  {
    title: 'Guides',
    description: (
      <>
        Check out our guides area where we will list different types of guides
        for developing your own Endless Online projects!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center"></div>
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
