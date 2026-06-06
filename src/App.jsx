import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Ongoing from './pages/Ongoing.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="ongoing" element={<Ongoing />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
