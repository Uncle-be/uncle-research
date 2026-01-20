
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingModal from './components/BookingModal';
import InternationalPrograms from './components/InternationalPrograms';
import { SERVICES, BOOKS, REVIEWS, CONTACT_INFO } from './constants';
import { Service } from './types';

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

      {/* About Section - Internationalized */}
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
                  <span className="text-4xl font-bold block">Global</span>
                  <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Research Mission</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                   <i className="fas fa-globe"></i>
                </div>
                <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase">International Partnerships</span>
              </div>
              <h2 className="heading-font text-4xl font-bold mb-6 text-slate-900">About the Institute</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Welcome to <span className="font-bold text-emerald-600">Uncle Blessing Research Institute</span>. Founded by a dedicated graduate of the <strong>Federal University Oye Ekiti (FUOYE)</strong>, we specialize in high-impact research that spans academic excellence and business intelligence.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-semibold italic text-emerald-800">
                "Our mission is global. We explicitly welcome international researchers and institutions to partner with us in solving cross-border challenges."
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our mission is to bridge the gap between complex data and actionable insights. Whether you are a student struggling with your dissertation or a business owner looking for a competitive edge, we provide the clarity and precision needed to succeed.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Graduate-led Academic Rigor',
                  'Cross-Border Collaboration Frameworks',
                  'Strategic International Market Insights',
                  'Global PhD & Postdoc Pathways'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <i className="fas fa-check-circle text-emerald-500 text-xl"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold border-b-2 border-emerald-600 pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-all"
                >
                  International Collaboration <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Programs Section */}
      <InternationalPrograms />

      {/* International Scholar Pathways Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl font-bold mb-4">Global "Join Us" Program</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Dedicated pathways for international PhDs, postdocs, and visiting scholars.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <i className="fas fa-passport text-3xl text-emerald-400 mb-6"></i>
              <h3 className="text-xl font-bold mb-4">Visa & Relocation</h3>
              <p className="text-slate-400">Streamlined support for academic visas and local housing guidance for international visiting scholars.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <i className="fas fa-handshake text-3xl text-emerald-400 mb-6"></i>
              <h3 className="text-xl font-bold mb-4">Grant Partnerships</h3>
              <p className="text-slate-400">Collaborate on international grants. We partner with the University International Office to facilitate global funding.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <i className="fas fa-city text-3xl text-emerald-400 mb-6"></i>
              <h3 className="text-xl font-bold mb-4">Life at the Institute</h3>
              <p className="text-slate-400">Experience a vibrant academic culture in Nigeria with a community dedicated to global research excellence.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer a wide range of research-driven services including specialized international market analysis.
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
                <div className="text-sm font-semibold text-emerald-400 mb-4">{service.priceRange}</div>
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
      <section id="books" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-4xl font-bold mb-4 text-emerald-800">Knowledge Repository</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our collection of groundbreaking publications, featuring international case studies and cross-border research projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {BOOKS.map((book) => (
              <div key={book.id} className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-3xl group border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm">
                <div className="w-40 h-60 flex-shrink-0 relative">
                   <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-1 heading-font leading-tight text-slate-800">{book.title}</h3>
                  <p className="text-emerald-600 text-sm font-semibold mb-3">By {book.author}</p>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">{book.description}</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=I%20want%20to%20order%20the%20book:%20${encodeURIComponent(book.title)}`, '_blank')}
                    className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 w-max"
                  >
                    <i className="fas fa-shopping-cart text-xs"></i> Order Book
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
            <h2 className="heading-font text-4xl font-bold mb-4 text-white">Client Success Stories</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              See what our clients and partners have to say about the Uncle Blessing impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-xl relative border-b-4 border-emerald-500">
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

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-8 relative">
                <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-emerald-500/30 transform rotate-12">
                   <i className="fas fa-microscope text-5xl -rotate-12"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="heading-font text-4xl md:text-5xl font-bold mb-8">Ready to Elevate Your Research?</h2>
              <p className="text-slate-300 text-xl mb-12">
                Join hundreds of satisfied clients and get the expert consultation you deserve. Reach out today for a free initial quote or international partnership inquiry.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                  className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-900/40"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
                </a>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-black/20"
                >
                  <i className="fas fa-envelope text-xl"></i>
                  <span>Email Me</span>
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500 rounded-full -ml-24 -mb-24 opacity-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  <i className="fas fa-microscope"></i>
                </div>
                <div>
                  <span className="text-2xl font-bold heading-font text-emerald-700 block leading-none">UBRI</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Research Institute</span>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm">
                Empowering individuals and businesses through data-driven research and professional consultation.
              </p>
            </div>
            <div className="flex gap-8 text-slate-400">
              <a href="#" className="hover:text-emerald-600 transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="hover:text-emerald-600 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="hover:text-emerald-600 transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
              <a href="#" className="hover:text-emerald-600 transition-colors"><i className="fab fa-instagram text-xl"></i></a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Uncle Blessing Research Institute. All rights reserved. <br/>
            Proud Alumnus of Federal University Oye Ekiti (FUOYE).
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
