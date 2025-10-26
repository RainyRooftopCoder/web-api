import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApiDetail from './pages/ApiDetail'

function App() {
  return (
    <BrowserRouter basename="/web-api">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/:apiId" element={<ApiDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
