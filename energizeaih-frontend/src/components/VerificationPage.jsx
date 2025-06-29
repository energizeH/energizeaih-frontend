import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Alert, AlertDescription } from './ui/alert'

export default function VerificationPage() {
  const { token } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('verifying') // verifying, success, error
  const [message, setMessage] = useState('')
  const [isResending, setIsResending] = useState(false)

  useEffect(() => {
    if (token) {
      verifyEmail(token)
    } else {
      setStatus('error')
      setMessage('Invalid verification link')
    }
  }, [token])

  const verifyEmail = async (token) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify/${token}`, {
        method: 'GET',
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Your email has been successfully verified!')
      } else {
        setStatus('error')
        setMessage(data.error || 'Verification failed')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  const handleResendVerification = async () => {
    setIsResending(true)
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/resend-verification`, {
        method: 'POST',
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Verification email sent! Please check your inbox.')
      } else {
        setMessage(data.error || 'Failed to resend verification email')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
    }

    setIsResending(false)
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'verifying':
        return '⏳'
      case 'success':
        return '✅'
      case 'error':
        return '❌'
      default:
        return '❓'
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'text-green-600'
      case 'error':
        return 'text-red-600'
      default:
        return 'text-blue-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <span className="text-6xl mb-4 block">{getStatusIcon()}</span>
          <h1 className={`text-2xl font-bold mb-2 ${getStatusColor()}`}>
            {status === 'verifying' && 'Verifying Email...'}
            {status === 'success' && 'Email Verified!'}
            {status === 'error' && 'Verification Failed'}
          </h1>
        </div>

        {message && (
          <Alert className={`mb-6 ${status === 'success' ? 'border-green-200 bg-green-50' : status === 'error' ? 'border-red-200 bg-red-50' : 'border-blue-200 bg-blue-50'}`}>
            <AlertDescription className={status === 'success' ? 'text-green-800' : status === 'error' ? 'text-red-800' : 'text-blue-800'}>
              {message}
            </AlertDescription>
          </Alert>
        )}

        {status === 'verifying' && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-4">
            <p className="text-gray-600">
              Your account is now verified and ready to use!
            </p>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue to Login
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-4">
            <p className="text-gray-600">
              The verification link may have expired or is invalid.
            </p>
            <button
              onClick={handleResendVerification}
              disabled={isResending}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isResending ? 'Sending...' : 'Resend Verification Email'}
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
            >
              Back to Login
            </button>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
