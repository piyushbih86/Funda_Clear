import React from 'react'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95">
        Click me
      </button>
    </div>
  )
}

export default App
