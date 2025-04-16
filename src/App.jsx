import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import MovieDetail from './pages/MovieDetail'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MovieDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
