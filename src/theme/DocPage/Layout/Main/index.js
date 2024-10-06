import React from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import Playground from '@site/src/components/Playground';

export default function DocPageLayoutMain({children}) {
  const sidebar = useDocsSidebar();
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (sidebar && styles.docMainContainerEnhanced) || '',
      )}>
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          (sidebar && styles.docItemWrapperEnhanced) || '',
        )}>
        {children}
      </div>
      {sidebar && <Playground />}
    </main>
  );
}