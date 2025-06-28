import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Zap, 
  BarChart3, 
  Users, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Shield,
  Clock,
  Target
} from 'lucide-react'

const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Content Creation",
      description: "Generate engaging posts, captions, and content automatically using advanced AI technology."
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Smart Scheduling",
      description: "Schedule posts across multiple platforms with optimal timing for maximum engagement."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Track performance, engagement rates, and ROI with comprehensive analytics dashboards."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Multi-Platform Management",
      description: "Manage all your social media accounts from one centralized dashboard."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-red-600" />,
      title: "Automated Responses",
      description: "AI-powered chatbots to handle customer inquiries and engagement automatically."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Growth Optimization",
      description: "Data-driven insights to optimize your social media strategy and grow your audience."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "EnergizeAIH transformed our social media presence. We've seen a 300% increase in engagement!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      company: "Local Cafe",
      content: "The AI content creation saves me hours every week. My posts are more engaging than ever.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "Fashion Brand",
      content: "The analytics insights helped us understand our audience better and improve our strategy.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 3 social media accounts",
        "50 AI-generated posts per month",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$24.99",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 social media accounts",
        "200 AI-generated posts per month",
        "Advanced analytics",
        "Priority support",
        "Custom scheduling"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$69.99",
      period: "month",
      description: "For agencies and large businesses",
      features: [
        "Unlimited social media accounts",
        "Unlimited AI-generated posts",
        "Enterprise analytics",
        "24/7 phone support",
        "White-label options",
        "API access"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">EnergizeAIH</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🚀 AI-Powered Social Media Automation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Energize Your Social Media with{' '}
              <span className="text-blue-600">AI Power</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your social media presence with AI-powered content creation, smart scheduling, 
              and advanced analytics. Grow your audience and engagement effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✨ No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Social Media Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate, optimize, and scale your social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Posts Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Avg. Engagement Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who've transformed their social media
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mt-4">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/register">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Energize Your Social Media?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using EnergizeAIH to grow their social media presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">EnergizeAIH</span>
              </div>
              <p className="text-gray-400">
                AI-powered social media automation for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><Link to="/register" className="hover:text-white">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EnergizeAIH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

