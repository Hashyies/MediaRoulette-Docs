import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Random Media Fun',
    description: (
      <>
        Get random images, anime, memes, and media from across the web with a simple command.
        Perfect for entertainment and discovering new content!
      </>
    ),
  },
  {
    title: 'SFW & NSFW Content',
    description: (
      <>
        Choose between safe-for-work content for general channels or NSFW content
        for age-restricted channels. MediaRoulette has it all!
      </>
    ),
  },
  {
    title: 'Instant Entertainment',
    description: (
      <>
        Spice up your Discord server with random content. Great for breaking the ice,
        entertainment, or just having fun with friends.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
