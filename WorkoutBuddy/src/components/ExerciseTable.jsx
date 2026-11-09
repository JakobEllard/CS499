import { useState } from 'react'
import ExerciseRow from './ExerciseRow'
import { emptySet } from '../utils/recommend'

// edit a day (exercises, sets, weight x reps, RPE).
// receives the current day and calls onChange(newDay) when something changes
export default function ExerciseTable({ day, onChange }) {
  const [newName, setNewName] = useState('')

  // update one field (weight / reps / rpe) of one set
  function changeSet(exerciseIndex, setIndex, field, value) {
    const exercises = day.exercises.map((exercise, i) => {
      if (i !== exerciseIndex) return exercise
      const sets = exercise.sets.map((set, j) => (j === setIndex ? { ...set, [field]: value } : set))
      return { ...exercise, sets }
    })
    onChange({ ...day, exercises })
  }

  // add a set column to every exercise.
  function addSet() {
    const exercises = day.exercises.map((exercise) => ({
      ...exercise,
      sets: [...exercise.sets, emptySet()],
    }))
    onChange({ ...day, setCount: day.setCount + 1, exercises })
  }

  // add a new exercise row with the right number of blank sets.
  function addExercise() {
    if (!newName.trim()) return
    const sets = Array.from({ length: day.setCount }, emptySet)
    onChange({ ...day, exercises: [...day.exercises, { name: newName.trim(), sets }] })
    setNewName('')
  }

  return (
    <table>
      <thead>
        <tr>
          <th />
          {Array.from({ length: day.setCount }, (_, i) => (
            <th key={i}>Set {i + 1}</th>
          ))}
          <th>
            <button className="link" onClick={addSet}>Add Set +</button>
          </th>
        </tr>
      </thead>

      <tbody>
        {day.exercises.map((exercise, exerciseIndex) => (
          <ExerciseRow
            key={exerciseIndex}
            exercise={exercise}
            onSetChange={(setIndex, field, value) => changeSet(exerciseIndex, setIndex, field, value)}
          />
        ))}

        <tr>
          <th colSpan={day.setCount + 2}>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addExercise()}
              placeholder="Add an exercise (e.g. Bench Press)"
            />
            <button className="link" onClick={addExercise}>Add +</button>
          </th>
        </tr>
      </tbody>
    </table>
  )
}
