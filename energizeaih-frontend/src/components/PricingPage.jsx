import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PricingPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState({})

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$9.99',
      priceId: 'price_1Rej3f06371vBUccClthmIgO',
      description: 'Perfect for individuals',
      features: [
        '5 Social Media Accounts',
        '50 AI-Generated Posts/Month',
        'Basic Analytics',
        'Email Support'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '$24.99',
      priceId: 'price_1Rej4006371vBUcctD411uvF',
      description: 'Great for small businesses',
      popular: true,
      features: [
        '15 Social Media Accounts',
        '200 AI-Generated Posts/Month',
        'Advanced Analytics',
        'Priority Support',
        'Custom Branding'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$69.99',
      priceId: 'price_1Rej306371vBUcctD411uvF',
      description: 'For growing agencies',
      features: [
        'Unlimited Social Media Accounts',
        'Unlimited AI-Generated Posts',
        'Advanced Analytics & Reports',
        '24/7 Priority Support',
        'White Label Solution',
        'API Access'
      ]
    }
  ]

  const handleSubscribe = async (priceId, planName) => {
    setIsLoading({ ...isLoading, [planName]: true })

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ price_id: priceId })
      })

      const data = await response.json()

      if (response.ok && data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Failed to create checkout session')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }

    setIsLoading({ ...isLoading, [planName]: false })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your social media automation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.popular ? 'border-2 border-blue-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.priceId, plan.name)}
                disabled={isLoading[plan.name]}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading[plan.name] ? 'Processing...' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
