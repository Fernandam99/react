import { useState } from 'react'

export default function Card() {
  const [darkMode, setDarkmode] = useState(false)

  const toggleTheme = () => setDarkmode(!darkMode)

  return (
    <div className={`max-w-sm mx-auto p-6 shadow-md rounded-lg transition duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <img src="https://i.pravatar.cc/150?img=3" alt="" className="rounded-full w-32 h-32 mx-auto"/>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">
        RAMON GUTIERREZ SOLER
      </h2>
      <p className="mt-2 text-gray-600 text-center">
        Desarrollador Front-End apasionado por React y el diseño UI/UX
      </p>
      <button
        onClick={toggleTheme}
        className={`mt-4 px-4 py-2 rounded ${darkMode ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'} transition duration-600`}>
        CAMBIAR FONDO
      </button>
    </div>
  )
}
