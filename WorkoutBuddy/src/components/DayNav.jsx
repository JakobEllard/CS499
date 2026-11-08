// move between days and add a new day

//tbh I only ever do upper lower but it cant hurt
const DAY_TYPES = ['Upper', 'Lower', 'Push', 'Pull', 'Legs', 'Full body']

export default function DayNav({ dayIndex, totalDays, dayType, onPrev, onNext, onAddDay, onTypeChange }) {
  return (
    <div className="day-nav">

      <button onClick={onPrev} disabled={dayIndex === 0} label="Previous day">←</button>

      <div className="day-label">
        Day {dayIndex + 1}
        <select value={dayType} onChange={(e) => onTypeChange(e.target.value)}>
          {DAY_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <button onClick={onNext} disabled={dayIndex === totalDays - 1} label="Next day">→</button>
      <button onClick={onAddDay}>Add day +</button>
    </div>
  )
}
