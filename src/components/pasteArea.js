// components/pasteArea.js
import React from 'react';

const PasteArea = ({ value, onChange }) => {
  return (
    <div className="p-4">
      <label htmlFor="schedule" className="block font-semibold mb-2">
        Paste your class schedule:
      </label>
      <textarea
        id="schedule"
        rows="8"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-2 font-mono"
        placeholder={`e.g.\nCSC207H1 F LEC0101 - Mon 12:00PM - 1:00PM, Wed 12:00PM - 1:00PM - MP 134`}
      />
    </div>
  );
};

export default PasteArea;
