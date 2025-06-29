import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, AlertDescription } from './ui/alert'

export default function ConnectAccountsPage() {
  const navigate = useNavigate()
  const [connectedAccounts, setConnectedAccounts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  const socialPlatforms = [
    {
      id: 'twitter',
      name: 'Twitter',
      icon: '🐦',
      color: 'blue',
      description: 'Connect your Twitter account to automate tweets'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: '📘',
      color: 'blue',
      description: 'Connect your Facebook page to automate posts'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      color: 'pink',
      description: 'Connect your Instagram account for photo posts'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      color: 'blue',
      description: 'Connect your LinkedIn profile for professional posts'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎵',
      color: 'black',
      description: 'Connect your TikTok account for video content'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '📺',
      color: 'red',
      description: 'Connect your YouTube channel for video posts'
    }
  ]

  useEffect(() => {
    fetchConnectedAccounts()
  }, [])

  const fetchConnectedAccounts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/connected-accounts`, {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setConnectedAccounts(data.accounts || [])
      } else if (response.status === 401) {
        navigate('/login')
      }
    } catch (error) {
      setMessage('Error loading connected accounts')
    }
    setIsLoading(false)
  }

  const handleConnect = async (platformId) => {
    setMessage(`Connecting to ${platformId}...`)
    
    // Simulate connection process
    setTimeout(() => {
      setMessage(`${platformId} connection feature coming soon!`)
    }, 1000)
  }

  const handleDisconnect = async (platformId) => {
    setMessage(`Disconnecting from ${platformId}...`)
    
    // Simulate disconnection process
    setTimeout(() => {
      setMessage(`${platformId} disconnected successfully!`)
      setConnectedAccounts(prev => prev.filter(acc => acc.platform !== platformId))
    }, 1000)
  }

  const isConnected = (platformId) => {
    return connectedAccounts.some(acc => acc.platform === platformId)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading accounts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Connect Your Accounts</h1>
          <p className="text-gray-600">Link your social media accounts to start automating your content</p>
        </div>

        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialPlatforms.map((platform) => {
            const connected = isConnected(platform.id)
            
            return (
              <div key={platform.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{platform.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {connected ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Connected
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Not Connected
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  {connected ? (
                    <button
                      onClick={() => handleDisconnect(platform.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm"
                    >
                      Disconnect
                    </button>
                  ) : (
                    <button
                      onClick={() => handleConnect(platform.id)}
                      className={`bg-${platform.color}-600 text-white px-4 py-2 rounded-md hover:bg-${platform.color}-700 transition-colors text-sm`}
                    >
                      Connect
                    </button>
                  )}
                </div>
              </div>
            )
          })}
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
