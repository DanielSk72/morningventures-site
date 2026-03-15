import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { sv } from './content/sv'
import { en } from './content/en'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<><Header content={sv} lang="sv" /><Home content={sv} /></>} />
      <Route path="/en" element={<><Header content={en} lang="en" /><Home content={en} /></>} />
    </Routes>
  )
}
