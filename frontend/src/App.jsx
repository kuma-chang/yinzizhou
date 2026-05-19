import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import ParticlesBackground from "./components/ParticlesBackground"
import NavDrawer from './components/NavDrawer'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Notes from "./pages/Notes"
import AboutPage from "./pages/AboutPage"
import EventPage from "./pages/EventPage"
import VideoPage from "./pages/VideoPage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"
import "./i18n"
import { Box } from '@mui/material'


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <>
    <ParticlesBackground />
    <BrowserRouter>

      {/* Sits behind everything, never unmounts on route change */}
      <Box sx={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <ParticlesBackground />
      </Box>

      {/* All page content renders above the particles */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <NavDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Box>

    </BrowserRouter>
    </>
  )
}

export default App
