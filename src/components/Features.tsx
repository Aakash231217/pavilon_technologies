import { Rocket, Shield, Headphones, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Rocket size={40} />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches to solve complex problems',
      color: 'blue',
    },
    {
      icon: <Shield size={40} />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust error handling',
      color: 'pink',
    },
    {
      icon: <Clock size={40} />,
      title: 'Timely Delivery',
      description: 'Consistent on-time project delivery with transparent communication',
      color: 'yellow',
    },
    {
      icon: <Headphones size={40} />,
      title: '24/7 Support',
      description: 'Dedicated support and maintenance for all your projects',
      color: 'blue',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that grow with your business needs',
      color: 'pink',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every development stage',
      color: 'yellow',
    },
  ];

  const colorMap = {
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-200',
    },
    pink: {
      bg: 'bg-pink-600',
      text: 'text-pink-600',
      border: 'border-pink-200',
    },
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-600',
      border: 'border-yellow-200',
    },
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-yellow-500">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional features that set my services apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            return (
              <div
                key={index}
                className={`group bg-gray-50 rounded-2xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-2 ${colors.border}`}
              >
                <div className={`inline-block p-4 rounded-xl ${colors.bg} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border-2 border-blue-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center border-2 border-pink-200">
            <div className="text-5xl font-bold text-pink-600 mb-2">20+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border-2 border-yellow-200">
            <div className="text-5xl font-bold text-yellow-600 mb-2">24h</div>
            <div className="text-gray-700 font-medium">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
