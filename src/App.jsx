import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import { GlobalProvider } from './contexts/GlobalContext'
import HomePage from './pages/HomePage'
import MovieDetail from './pages/MovieDetail'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
              {/* <Route path="/*" Component={notFound} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
