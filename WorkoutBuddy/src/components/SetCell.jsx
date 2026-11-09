// one "box" in the table: weight x reps, plus RPE (1-10).
export default function SetCell({ set, onChange }) {
  const rec = set.recommended

  return (
    <td>
      {rec && (
        <div className="recommended">
          Recommended {rec.weight} x {rec.reps}
        </div>
      )}
      <div className="set-inputs">
        <input
          type="number"
          placeholder={rec ? rec.weight : 'lbs'}
          value={set.weight}
          onChange={(e) => onChange('weight', e.target.value)}
        />
        <span>x</span>
        <input
          type="number"
          placeholder={rec ? rec.reps : 'reps'}
          value={set.reps}
          onChange={(e) => onChange('reps', e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="10"
          className="rpe"
          placeholder="RPE"
          value={set.rpe}
          onChange={(e) => onChange('rpe', e.target.value)}
        />
      </div>
    </td>
  )
}
