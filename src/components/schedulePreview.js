// components/schedulePreview.js
import React from 'react';

const SchedulePreview = ({ schedule }) => {
  if (!schedule.length) return null;

  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Parsed Schedule:</h2>
      <ul className="space-y-1">
        {schedule.map((course, idx) => (
          <li key={idx} className="border p-2 rounded">
            <strong>{course.courseCode}</strong> — {course.day} {course.startTime} - {course.endTime} @ {course.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePreview;
