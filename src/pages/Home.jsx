import { useState } from 'react';
import Header from '../components/Header';
import TopicForm from '../components/TopicForm';
import Explanation from '../components/Explanation';
import './Home.css';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/medical-education/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      setData({ ...formData, explanation: result.explanation });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <TopicForm onSubmit={handleSubmit} loading={loading} />
      {error && <p className="error">{error}</p>}
      {data && <Explanation {...data} />}
    </div>
  );
}