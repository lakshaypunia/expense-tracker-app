import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavigationBar from './components/navigation'
import HomePage from './components/pages/homepage'
import AboutPage from './components/pages/aboutuspage'

function App() {

  return <> 
  <div>
  </div>
  <Router>
      <NavigationBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
    </>
}

export default App
