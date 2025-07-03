import React, { useState } from 'react';
import './TopicForm.css';

const TopicForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    topic: '',
    level: 'medical student',
    language: 'English'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="topic-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="topic">Medical Topic</label>
        <input
          type="text"
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="e.g., Myocardial Infarction, Parkinson's Disease"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="level">Knowledge Level</label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="pre-med">Pre-Med</option>
            <option value="medical student">Medical Student</option>
            <option value="resident">Resident</option>
            <option value="attending">Attending</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="English">English</option>
            <option value="Spanish">Kiswahili</option>            
          </select>
        </div>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? (
          <>
            <span className="spinner"></span> Generating...
          </>
        ) : (
          'Get Explanation'
        )}
      </button>
    </form>
  );
};

export default TopicForm;
