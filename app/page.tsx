'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  // State to store our history of dates
  const [history, setHistory] = useState<string[]>([]);

  // 1. RETRIEVING DATA (Runs once when page loads)
  useEffect(() => {
    const savedData = localStorage.getItem('studyHistory');
    if (savedData) {
      setHistory(JSON.parse(savedData));
    }
  }, []);

  // 2. SAVING DATA (The function for your button)
  const markAsStudied = () => {
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

    [span_1](start_span)[span_2](start_span)// Rule: Prevent duplicate entries for the same day[span_1](end_span)[span_2](end_span)
    if (history.includes(today)) {
      [span_3](start_span)alert("You have already marked today.");[span_3](end_span)
      return;
    }

    const newHistory = [...history, today];
    setHistory(newHistory);
    localStorage.setItem('studyHistory', JSON.stringify(newHistory));
  };

  return (
    <div>
      <button onClick={markAsStudied} className="bg-blue-500 p-2 text-white rounded">
        [span_4](start_span)I Studied Today[span_4](end_span)
      </button>
      [span_5](start_span)<p>Total Days Studied: {history.length}</p>[span_5](end_span)
    </div>
  );
}