import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
plugins: [react()],
base: '/CS499/', // e.g. '/CS499-RecipeApp/'
})