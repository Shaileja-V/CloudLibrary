import React from 'react';
import 'typeface-roboto-mono';
const styles = {
  Text: {
    color: '#030303',
    fontSize: '40px',
    fontFamily: 'Roboto Mono, monospace', 
    fontWeight: 800,
    lineHeight: '52px',
    paddingTop: '72px',
    paddingLeft: '144px',
  },
};

const Text = ({ content }) => { // Accept 'content' prop
  return (
    <div style={styles.Text}>
      {content} {/* Render the 'content' prop */}
    </div>
  );
};

export default Text;
