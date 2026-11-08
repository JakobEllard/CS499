// Logic File

// empty set
export function emptySet() {
  return { weight: '', reps: '', rpe: '', recommended: null }
}

// Look at ONE previous set and decide what to try next time.
// prevSet = { weight, reps, rpe }
// goal    = 'deficit' | 'surplus'
// blockProgress = a number from 0 to 1 depending on how far into the block
export function recommendSet(prevSet, goal, blockProgress) {
  const weight = Number(prevSet.weight)
  const reps = Number(prevSet.reps)
  const rpe = Number(prevSet.rpe)

  // no previous set, no recomendation
  if (!weight || !reps || !rpe) return null

  // max effort (RPE 10) so back off a little.
  if (rpe >= 10) return { weight: weight - 2.5, reps }

  //it was hard (RPE 9) so repeat it.
  if (rpe >= 9) return { weight, reps }

  //late in the block (last 25%) -> hold steady, no new increases.
  if (blockProgress > 0.75) return { weight, reps }

  //it felt manageable (RPE 8 or lower) so progress.
  // Surplus means more resourtces so we can add weight. a deficit means recovery is lower, so add a rep instead.
  if (goal === 'surplus') return { weight: weight + 5, reps }
  return { weight, reps: reps + 1 }
}

// build new day from the previous one:
// same exercises, same number of sets, blank inputs, plus a recommendation per set.
export function buildNextDay(prevDay, block, newDayNumber) {
  const blockProgress = newDayNumber / block.plannedDays

  const exercises = prevDay.exercises.map((exercise) => ({
    name: exercise.name,
    sets: exercise.sets.map((prevSet) => ({
      ...emptySet(),//fill in empty 
      recommended: recommendSet(prevSet, block.goal, blockProgress),//make recomendation
    })),
  }))

  return { type: prevDay.type, setCount: prevDay.setCount, exercises }
}
