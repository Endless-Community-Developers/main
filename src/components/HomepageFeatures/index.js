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
    title: 'Community',
    description: (
      <>
        If you are interested in showing off your project, check out the 404 Developer Community.  
      </>
    ),
  },
  {
    title: 'Blog',
    description: (
      <>
        Check out our blog area where we will list different types of guides
        for developing your own Endless Online projects. We will also use the blog to post important informationa bout the website.!
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
