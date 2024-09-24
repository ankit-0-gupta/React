import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Teachers from './Components/Teachers'
import Holidays from './Components/Holidays'
import ContactUs from './Components/ContactUs'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App