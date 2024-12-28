import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Brain, ArrowRight, Check, Star, Users } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent" />
          <img
            src="https://images.pexels.com/photos/6393169/pexels-photo-6393169.jpeg"
            alt="Mother and baby girl reading a book"
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 mb-8">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Parents
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Watch Your Child 
              <span className="block text-primary-600 mt-2">
                Grow With Confidence
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Track every precious milestone with AI-powered insights and expert guidance. 
              Your child's development journey, supported by healthcare professionals and 
              secured by blockchain technology.
            </p>

            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <Link
                to="/auth/register"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-primary-600 bg-white border-2 border-primary-100 hover:border-primary-200 rounded-lg transition-colors"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-600">AI-powered milestone tracking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-600">Expert healthcare network</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-600">Blockchain-verified records</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-600">Personalized insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything You Need to Track Your Child's Growth
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive tools and expert guidance for every stage of development
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-primary-600" />}
              title="AI-Powered Insights"
              description="Get personalized recommendations based on your child's unique development pattern and milestones."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary-600" />}
              title="Secure Records"
              description="Every milestone and achievement is securely stored and verified using blockchain technology."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-primary-600" />}
              title="Expert Support"
              description="Connect with qualified healthcare providers and child development specialists for guidance."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How TotoTrust Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Track your child's development in three simple steps
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <StepCard
              number="1"
              title="Create Your Profile"
              description="Sign up and add your child's basic information to get personalized tracking and recommendations."
            />
            <StepCard
              number="2"
              title="Track Milestones"
              description="Record and verify development milestones with our AI-powered tools and expert guidance."
            />
            <StepCard
              number="3"
              title="Get Expert Insights"
              description="Receive personalized recommendations and connect with healthcare professionals for support."
            />
          </div>
        </div>
      </section>

      {/* Video Review Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Understanding Nurturing Care
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Learn how our platform supports the five components of nurturing care for early childhood development
            </p>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/4U0vorccbsA"
                title="Nurturing Care Framework Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mx-auto">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Evidence-Based Approach</h3>
              <p className="mt-2 text-gray-600">Built on scientific research and global best practices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Family-Centered Care</h3>
              <p className="mt-2 text-gray-600">Supporting families to provide nurturing environments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Community Support</h3>
              <p className="mt-2 text-gray-600">Engaging communities for sustainable impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Start Your Child's Development Journey Today
          </h2>
          <p className="mt-4 text-xl text-primary-100">
            Join thousands of parents who trust TotoTrust for their children's growth
          </p>
          <Link
            to="/auth/register"
            className="mt-8 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 transition-colors"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const StepCard = ({ number, title, description }) => (
  <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-xl">
      {number}
    </div>
    <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default Home;