
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import BookingModal from './components/BookingModal.tsx';
import InternationalPrograms from './components/InternationalPrograms.tsx';
import { SERVICES, BOOKS, REVIEWS, CONTACT_INFO } from './constants.tsx';
import { Service } from './types.ts';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookNow = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Global Research Excellence" 
                className="rounded-2xl shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-600 rounded-2xl -z-10 flex items-center justify-center text-white p-8 shadow-xl">
                <div className="text-center">
                  <span className="text-4xl font-bold block">5+ Yrs</span>
                  <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Experience</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                   <i className="fas fa-graduation-cap"></i>
                </div>
                <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase">Expertise</span>
              </div>
              <h2 className="heading-font text-4xl font-bold mb-6 text-slate-900">About the Institute</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Welcome to <span className="font-bold text-emerald-600">Uncle Blessing Research Institute</span>. Founded by a dedicated graduate of the <strong>Federal University Oye Ekiti (FUOYE)</strong>, we specialize in high-impact research.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our mission is to bridge the gap between complex data and actionable insights. Whether you are a student struggling with your dissertation or a business owner looking for a competitive edge, we provide the clarity and precision needed to succeed.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Graduate-led Academic Rigor',
                  'Market & Business Consultation',
                  'Strategic Data Analysis',
                  'Professional Thesis Guidance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <i className="fas fa-check-circle text-emerald-500 text-xl"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                >
                  Contact Me Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Programs Section */}
      <InternationalPrograms />

      {/* Services Section */}
      <section id="services" className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer specialized consultation to help you achieve your goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-emerald-100 group">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-700">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
                <button 
                  onClick={() => handleBookNow(service)}
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition-all"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl font-bold mb-4 text-emerald-800">Available Books</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Master your research and business skills with our exclusive publications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {BOOKS.map((book) => (
              <div key={book.id} className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-3xl group border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm">
                <div className="w-40 h-60 flex-shrink-0 relative">
                   <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-1 heading-font leading-tight text-slate-800">{book.title}</h3>
                  <p className="text-emerald-600 text-sm font-semibold mb-3">By {book.author}</p>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">{book.description}</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=I%20want%20to%20order%20the%20book:%20${encodeURIComponent(book.title)}`, '_blank')}
                    className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 w-max"
                  >
                    Order Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl font-bold mb-4 text-white">Reviews</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto text-lg italic">
              "Over 5 years of providing excellence in research and consultation."
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-xl relative">
                <div className="flex gap-1 text-emerald-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8">"{review.content}"</p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-emerald-100" />
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold heading-font text-emerald-700 mb-2">Uncle Blessing Research Institute</h2>
            <p className="text-slate-500 mb-6">Federal University Oye Ekiti Graduate | 5+ Years Experience</p>
            <div className="flex justify-center gap-8 text-slate-400 mb-8">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-emerald-600 transition-colors">Email: {CONTACT_INFO.email}</a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="hover:text-emerald-600 transition-colors">WhatsApp: {CONTACT_INFO.whatsapp}</a>
            </div>
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Uncle Blessing Research Institute. All rights reserved.
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedService={selectedService} 
      />
    </div>
  );
};

export default App;
