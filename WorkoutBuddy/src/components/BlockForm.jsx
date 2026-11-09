import { useState } from 'react'

// create training block
export default function BlockForm({ onCreate }) {
  const [name, setName] = useState('')
  const [goal, setGoal] = useState('surplus')
  const [plannedDays, setPlannedDays] = useState(12)

  function handleSubmit(event) {
    event.preventDefault()
    onCreate({
      name: name || 'My Training Block',
      goal,
      plannedDays: Number(plannedDays),
      // block starts with one empty day.
      days: [{ type: 'Upper', setCount: 2, exercises: [] }],
      
    })
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h1>New Training Block</h1>


      <label>
        Block Name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Summer bulk" />
      </label>



      <label>
        Calories
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>

          <option value="surplus">Surplus</option>
          <option value="deficit">Deficit</option>
        </select>
      </label>


      <label>
        Planned training days

        <input
          type="number"
          min="1"
          value={plannedDays}
          onChange={(e) => setPlannedDays(e.target.value)}

        />
      </label>

      <button type="submit">Start block</button>
    </form>
  )
}
