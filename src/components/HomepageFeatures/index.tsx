import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Language AI',
    description: (
      <>
        Explore our suite of language AI tools including LangTrain, LangTest, and LangCertify.
      </>
    ),
    link: '/docs/langtrain/overview',
  },
  {
    title: 'Agent Technologies',
    description: (
      <>
        Discover our agent-based solutions like AgentFlow, AgentVM, and AgentWallet.
      </>
    ),
    link: '/docs/agentflow/overview',
  },
  {
    title: 'AI Marketplaces',
    description: (
      <>
        Learn about our AI marketplaces and platforms: AgentSeller and AgentMarket.
      </>
    ),
    link: '/docs/agentseller/overview',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <a href={link} className="button button--secondary button--sm">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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