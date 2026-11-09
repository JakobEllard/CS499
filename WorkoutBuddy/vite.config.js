import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
plugins: [react()],
base: '/Desktop/CS499/WorkoutBuddy/', // e.g. '/CS499-RecipeApp/'
})