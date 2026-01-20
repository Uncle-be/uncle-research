
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide mb-6 animate-bounce">
            5+ YEARS OF EXCELLENCE
          </span>
          <h1 className="heading-font text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Research That Drives <span className="text-emerald-600">Innovation</span> & Success
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12">
            Professional Academic, Market, and Business consultation services tailored to your specific needs. Founded and led by a graduate of Federal University Oye Ekiti.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-200"
            >
              <i className="fab fa-whatsapp text-2xl"></i> Order on WhatsApp
            </a>
            <a
              href="#about"
              className="bg-white text-slate-900 border-2 border-emerald-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
