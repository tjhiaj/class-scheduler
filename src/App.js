// App.js
import React, { useState, useEffect } from 'react';
import PasteArea from './components/pasteArea';
import SchedulePreview from './components/schedulePreview';
import { parseSchedule } from './utils/parseSchedule';

function App() {
  const [rawInput, setRawInput] = useState('');
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const parsed = parseSchedule(rawInput);
    setSchedule(parsed);
  }, [rawInput]);

  return (
    <div className="max-w-3xl mx-auto mt-8 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">UofT → Google Calendar Scheduler</h1>
      <PasteArea value={rawInput} onChange={setRawInput} />
      <SchedulePreview schedule={schedule} />
    </div>
  );
}

export default App;
