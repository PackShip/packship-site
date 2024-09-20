import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export default function CommandPrompt() {
  const handleCopy = () => {
    navigator.clipboard.writeText('packship init');
  };

  return (
    <div className="bg-gray-800 rounded-lg px-8 text-white text-lg flex justify-between items-center gap-8">
      <pre className='py-4'>packship init</pre>
      <button onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};
