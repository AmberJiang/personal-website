import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** English "Month D, YYYY" from git HEAD commit date (updates on each `vite` dev/build after new commits). */
function lastUpdatedFromGit() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  try {
    const short = execSync('git log -1 --format=%cd --date=short', {
      encoding: 'utf-8',
    }).trim()
    const [y, m, d] = short.split('-').map((x) => parseInt(x, 10))
    if (!y || !m || !d) throw new Error('invalid git date')
    return `${months[m - 1]} ${d}, ${y}`
  } catch {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date())
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_UPDATED_DISPLAY__: JSON.stringify(lastUpdatedFromGit()),
  },
})
