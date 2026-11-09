import { useState } from 'react'
import BlockForm from './components/BlockForm'
import DayNav from './components/DayNav'
import ExerciseTable from './components/ExerciseTable'
import { buildNextDay } from './utils/recommend'


export default function App() {
  const [block, setBlock] = useState(null) // null = no block created yet
  const [dayIndex, setDayIndex] = useState(0)

  // if there is no block yet then show the form.
  if (!block) {
    return <BlockForm onCreate={setBlock} />
  }

  const day = block.days[dayIndex]

  // replace current day with an updated copy.
  function updateDay(newDay) {
    const days = block.days.map((d, i) => (i === dayIndex ? newDay : d))
    setBlock({ ...block, days })
  }

  // Add a day at the end, carrying over exercises and recommendations from the last day.
  function addDay() {
    const lastDay = block.days[block.days.length - 1]
    const newDay = buildNextDay(lastDay, block, block.days.length + 1)
    setBlock({ ...block, days: [...block.days, newDay] })
    setDayIndex(block.days.length)
  }

  return (
    <div className="panel">
      <h1>{block.name}</h1>
      <p className="subtitle">
        {block.goal === 'surplus' ? 'Calorie surplus' : 'Calorie deficit'} · Day {dayIndex + 1} of {block.plannedDays} planned
      </p>

      <DayNav
        dayIndex={dayIndex}
        totalDays={block.days.length}
        dayType={day.type}
        onPrev={() => setDayIndex(dayIndex - 1)}
        onNext={() => setDayIndex(dayIndex + 1)}
        onAddDay={addDay}
        onTypeChange={(type) => updateDay({ ...day, type })}
      />

      <ExerciseTable day={day} onChange={updateDay} />
    </div>
  )
}
