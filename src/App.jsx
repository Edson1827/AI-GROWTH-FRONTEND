import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import AgencyDashboard from './components/AgencyDashboard'
import ClientDashboard from './components/ClientDashboard'
import { ThemeProvider } from './components/ThemeProvider'
import './App.css'
import './tech-colors.css'

// Get API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'https://web-b5927.up.railway.app'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentView, setCurrentView] = useState('landing')

  useEffect(() => {
    // Check for existing token
    const token = localStorage.getItem('access_token')
    if (token) {
      // Verify token with backend
      fetch(`${API_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user)
          setCurrentView('dashboard')
        } else {
          localStorage.removeItem('access_token')
        }
      })
      .catch(() => {
        localStorage.removeItem('access_token')
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (userData, token) => {
    setUser(userData)
    localStorage.setItem('access_token', token)
    setCurrentView('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('access_token')
    setCurrentView('landing')
  }

  const handleGetStarted = (plan = 'aceleracao') => {
    setCurrentView('login')
  }

  if (loading) {
    return (
      <ThemeProvider>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {currentView === 'landing' && (
          <LandingPage onGetStarted={handleGetStarted} />
        )}
        
        {currentView === 'login' && (
          <LoginPage 
            onLogin={handleLogin} 
            onBack={() => setCurrentView('landing')}
            apiUrl={API_URL}
          />
        )}
        
        {currentView === 'dashboard' && user && (
          user.role === 'agency' ? (
            <AgencyDashboard 
              user={user} 
              onLogout={handleLogout}
              apiUrl={API_URL}
            />
          ) : (
            <ClientDashboard 
              user={user} 
              onLogout={handleLogout}
              apiUrl={API_URL}
            />
          )
        )}
      </div>
    </ThemeProvider>
  )
}

export default App

