import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, AlertDescription } from './ui/alert'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [subscription, setSubscription] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        setSubscription(data.subscription)
      } else if (response.status === 401) {
        navigate('/login')
      }
    } catch (error) {
      setMessage('Error loading user data')
    }
    setIsLoading(false)
  }

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      localStorage.removeItem('user')
      navigate('/')
    } catch (error) {
      setMessage('Error logging out')
    }
  }

  const getSubscriptionStatus = () => {
    if (!subscription) return { status: 'Free', color: 'gray', plan: 'No active subscription' }
    
    switch (subscription.status) {
      case 'active':
        return { 
          status: 'Active', 
          color: 'green', 
          plan: subscription.plan_name || 'Premium Plan'
        }
      case 'canceled':
        return { 
          status: 'Canceled', 
          color: 'red', 
          plan: subscription.plan_name || 'Canceled Plan'
        }
      case 'past_due':
        return { 
          status: 'Past Due', 
          color: 'yellow', 
          plan: subscription.plan_name || 'Payment Required'
        }
      default:
        return { 
          status: 'Unknown', 
          color: 'gray', 
          plan: subscription.plan_name || 'Unknown Plan'
        }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const subscriptionInfo = getSubscriptionStatus()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Status</h3>
            <div className="flex items-center">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${subscriptionInfo.color}-100 text-${subscriptionInfo.color}-800`}>
                {subscriptionInfo.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{subscriptionInfo.plan}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Posts Created</h3>
            <div className="text-3xl font-bold text-blue-600">0</div>
            <p className="text-sm text-gray-600">This month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accounts Connected</h3>
            <div className="text-3xl font-bold text-green-600">0</div>
            <p className="text-sm text-gray-600">Social platforms</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button
            onClick={() => navigate('/connect-accounts')}
            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect Accounts</h3>
            <p className="text-sm text-gray-600">Link your social media accounts</p>
          </button>

          <button
            onClick={() => navigate('/analytics')}
            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-sm text-gray-600">Track your performance</p>
          </button>

          <button
            onClick={() => navigate('/pricing')}
            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade Plan</h3>
            <p className="text-sm text-gray-600">Unlock premium features</p>
          </button>

          <button
            onClick={() => navigate('/settings')}
            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Settings</h3>
            <p className="text-sm text-gray-600">Manage your account</p>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <span className="text-4xl mb-4 block">📝</span>
              <h4 className="text-lg font-medium text-gray-900 mb-2">No activity yet</h4>
              <p className="text-gray-600 mb-4">Start by connecting your social media accounts</p>
              <button
                onClick={() => navigate('/connect-accounts')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Connect Accounts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
