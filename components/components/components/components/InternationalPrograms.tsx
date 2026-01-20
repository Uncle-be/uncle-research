
import React from 'react';

const PROGRAMS = [
  {
    title: 'Global Scholars Fellowship',
    type: 'Fellowship',
    duration: '6 Months',
    deadline: 'October 15, 2025',
    requirements: [
      'Current PhD candidate or recent Postdoc',
      'Research proposal aligned with UBRI core themes',
      'Proof of institutional affiliation'
    ],
    description: 'A fully supported residency at UBRI for international researchers focusing on African market dynamics.'
  },
  {
    title: 'Pan-African Research Exchange',
    type: 'Exchange',
    duration: '1 Semester',
    deadline: 'Rolling Basis',
    requirements: [
      'Master\'s degree in Social Sciences or STEM',
      'Letter of recommendation from home university',
      'English or French proficiency'
    ],
    description: 'Collaborative program allowing scholars from across the globe to conduct field research in Nigeria.'
  },
  {
    title: 'Business Innovation Grant (BIG)',
    type: 'Grant/Funding',
    duration: 'Project Based',
    deadline: 'January 30, 2026',
    requirements: [
      'Registered SME or startup (Global)',
      'Innovative business model for emerging markets',
      'Detailed project feasibility report'
    ],
    description: 'Financial and consultative support for international businesses looking to scale within the West African sub-region.'
  }
];

const InternationalPrograms: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Opportunities</span>
            <h2 className="heading-font text-4xl font-bold mt-2 text-slate-900">International Programs & Fellowships</h2>
            <p className="text-slate-600 mt-4 text-lg">
              We offer structured pathways for global talent to collaborate with the Uncle Blessing Research Institute. Join our network of excellence.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all">
            Inquire About Programs <i className="fas fa-paper-plane"></i>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="flex flex-col border border-slate-100 bg-slate-50/50 rounded-3xl p-8 hover:shadow-xl hover:bg-white transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  {program.type}
                </span>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Deadline</p>
                  <p className="text-sm font-bold text-rose-500">{program.deadline}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {program.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {program.description}
              </p>

              <div className="mt-auto">
                <div className="mb-6">
                  <p className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <i className="fas fa-list-check text-emerald-500"></i> Requirements:
                  </p>
                  <ul className="space-y-2">
                    {program.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock text-slate-400"></i>
                    <span className="text-sm font-medium text-slate-600">{program.duration}</span>
                  </div>
                  <button className="text-emerald-600 font-bold text-sm hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-emerald-600 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-200">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
              <i className="fas fa-info-circle"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Custom Exchange Programs</h4>
              <p className="text-emerald-100">Are you a university representative? Contact us for bespoke institutional partnerships.</p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-lg">
            Institutional Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternationalPrograms;
