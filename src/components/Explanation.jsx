import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Explanation.css';

const Explanation = ({ topic, explanation, level }) => {
  if (!explanation) return null;

  return (
    <div className="explanation-container">
      <div className="explanation-header">
        <h2>{topic}</h2>
        <span className={`level-badge ${level.replace(' ', '-')}`}>
          {level}
        </span>
      </div>
      
      <div className="explanation-content">
        <ReactMarkdown>{explanation}</ReactMarkdown>
      </div>
      
      <div className="explanation-footer">
        
      </div>
    </div>
  );
};

export default Explanation;
