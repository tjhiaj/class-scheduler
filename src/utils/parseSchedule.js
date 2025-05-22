// utils/parseSchedule.js
export function parseSchedule(rawInput) {
  const lines = rawInput.split('\n');
  const courses = [];

  lines.forEach(line => {
    const match = line.match(/^(\w{6,8})\s+\w+\s+\w+\s+-\s+(.*)$/);
    if (!match) return;

    const courseCode = match[1];
    const scheduleParts = match[2].split(',');

    const lastPart = scheduleParts[scheduleParts.length - 1].trim();

    const lastHyphenIndex = lastPart.lastIndexOf(' - ');
    let location = 'Unknown';
    if (lastHyphenIndex !== -1) {
      location = lastPart.slice(lastHyphenIndex + 3).trim();
    }

    scheduleParts.forEach(part => {
      const cleanPart = part.trim().replace(`- ${location}`, '').trim();

      const innerMatch = cleanPart.match(
        /(Mon|Tue|Wed|Thu|Fri)\s(\d{1,2}:\d{2}[AP]M)\s-\s(\d{1,2}:\d{2}[AP]M)/
      );

      if (innerMatch) {
        courses.push({
          courseCode,
          day: innerMatch[1],
          startTime: innerMatch[2],
          endTime: innerMatch[3],
          location
        });
      }
    });
  });

  return courses;
}
