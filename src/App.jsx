import { useState } from "react"
import { motion } from "framer-motion"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./index.css"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex gap-6 justify-center mt-12" variants={item}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 drop-shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 drop-shadow-lg" alt="React logo" />
        </a>
      </motion.div>

      <motion.h1
        className="text-3xl font-bold text-blue-600 mt-6 text-center"
        variants={item}
      >
        Vite + React
      </motion.h1>

      <motion.div className="mt-6 flex flex-col items-center gap-4" variants={item}>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          count is {count}
        </button>

        <p className="text-gray-700">
          Edit{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </motion.div>

      <motion.p className="text-gray-500 mt-6 text-center" variants={item}>
        Click on the Vite and React logos to learn more
      </motion.p>
    </motion.div>
  )
}

export default App
