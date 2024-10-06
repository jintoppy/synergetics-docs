import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/introduction'],
    },
    {
      type: 'category',
      label: 'LangTrain',
      items: ['langtrain/overview', 'langtrain/api-reference'],
    },
    {
      type: 'category',
      label: 'LangTest',
      items: ['langtest/overview', 'langtest/api-reference'],
    },
    {
      type: 'category',
      label: 'LangCertify',
      items: ['langcertify/overview', 'langcertify/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentFlow',
      items: ['agentflow/overview', 'agentflow/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentVM',
      items: ['agentvm/overview', 'agentvm/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentWallet',
      items: ['agentwallet/overview', 'agentwallet/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentChain',
      items: ['agentchain/overview', 'agentchain/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentConnect',
      items: ['agentconnect/overview', 'agentconnect/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentSeller',
      items: ['agentseller/overview', 'agentseller/api-reference'],
    },
    {
      type: 'category',
      label: 'AgentMarket',
      items: ['agentmarket/overview', 'agentmarket/api-reference'],
    },
  ],
};

export default sidebars;