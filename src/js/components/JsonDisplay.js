import React from 'react';

function JsonDisplay({ jsonData }) {
  return (
    <pre className="code-content">{JSON.stringify(jsonData, null, 2)}</pre>
  );
}

export default JsonDisplay;
