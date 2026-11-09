import SetCell from './SetCell'

// one row = one exercise with a cell for each set.
export default function ExerciseRow({ exercise, onSetChange }) {
  return (
    <tr>
      <th>{exercise.name}</th>
      {exercise.sets.map((set, setIndex) => (
        <SetCell
          key={setIndex}
          set={set}
          onChange={(field, value) => onSetChange(setIndex, field, value)}
        />
      ))}
      <td />
    </tr>
  )
}
