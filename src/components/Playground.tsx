import React from 'react';
import styles from './Playground.module.css';

const Playground: React.FC = () => {
  return (
    <div className={styles.playground}>
      <h3>API Playground</h3>
      <p>Try out the API using different languages:</p>
      <select>
        <option value="curl">cURL</option>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="ruby">Ruby</option>
      </select>
      <textarea placeholder="Enter your API request here..."></textarea>
      <button>Send Request</button>
      <div className={styles.response}>
        <h4>Response:</h4>
        <pre></pre>
      </div>
    </div>
  );
};

export default Playground;