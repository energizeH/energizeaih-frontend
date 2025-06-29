import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AnalyticsPage() {
  const navigate = useNavigate()
  const [analytics, setAnalytics] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/analytics`, {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setAnalytics(data)
      } else if (response.status === 401) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error fetching analytics:', error)
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your social media performance</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Total Posts</h3>
            <div className="text-3xl font-bold text-blue-600">0</div>
            <p className="text-sm text-green-600">+0% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Total Engagement</h3>
            <div className="text-3xl font-bold text-green-600">0</div>
            <p className="text-sm text-green-600">+0% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Reach</h3>
            <div className="text-3xl font-bold text-purple-600">0</div>
            <p className="text-sm text-green-600">+0% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Followers</h3>
            <div className="text-3xl font-bold text-orange-600">0</div>
            <p className="text-sm text-green-600">+0% from last month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Over Time</h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <div className="text-center">
                <span className="text-4xl mb-4 block">📊</span>
                <p className="text-gray-600">No data available yet</p>
                <p className="text-sm text-gray-500">Connect accounts to see analytics</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <div className="text-center">
                <span className="text-4xl mb-4 block">📈</span>
                <p className="text-gray-600">No data available yet</p>
                <p className="text-sm text-gray-500">Connect accounts to see analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Posts Performance</h3>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <span className="text-4xl mb-4 block">📝</span>
              <h4 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h4>
              <p className="text-gray-600 mb-4">Start creating content to see performance data</p>
              <button
                onClick={() => navigate('/connect-accounts')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Connect Accounts
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
