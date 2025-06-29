import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Dashboard from './components/Dashboard'
import PricingPage from './components/PricingPage'
import AnalyticsPage from './components/AnalyticsPage'
import ConnectAccountsPage from './components/ConnectAccountsPage'
import SettingsPage from './components/SettingsPage'
import VerificationPage from './components/VerificationPage'
import AdminDashboard from './components/AdminDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/connect-accounts" element={<ConnectAccountsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/verify/:token" element={<VerificationPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
