
import React from 'react';
import { Resume } from '../types';

interface Props {
  data: Resume;
}

const ModernTheme: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight animate-in slide-in-from-top duration-700">{data.name}</h1>
          <p className="text-xl md:text-2xl text-indigo-100 font-light mb-8 max-w-2xl mx-auto">{data.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">📍 {data.location}</span>
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">📧 {data.email}</span>
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">📞 {data.phone}</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 -mt-10 pb-20">
        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mr-4">Professional Journey</h2>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>
          
          <div className="space-y-8">
            {data.experience.map((exp, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-semibold text-lg">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition-colors underline decoration-indigo-200 underline-offset-4">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold">{exp.period}</span>
                    <p className="text-slate-400 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Column */}
          <section className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Technical Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.skills.map((skillSet, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((item, j) => (
                      <span key={j} className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:border-indigo-300 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar-style Info */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Education</h2>
              <div className="space-y-4">
                {data.education.map((edu, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                    <p className="text-sm text-indigo-600">
                      {edu.institutionUrl ? (
                        <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition-colors underline decoration-indigo-200 underline-offset-4">
                          {edu.institution}
                        </a>
                      ) : (
                        edu.institution
                      )}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Recognition</h2>
              <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg">
                <ul className="space-y-4">
                  {data.awards.map((award, i) => (
                    <li key={i} className="text-sm font-light flex items-start leading-relaxed group">
                      <span className="text-indigo-300 mr-2 text-xl flex-shrink-0">🏆</span>
                      {award.url ? (
                        <a 
                          href={award.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-indigo-200 hover:underline decoration-indigo-400 underline-offset-2 transition-all"
                        >
                          {award.title}
                        </a>
                      ) : (
                        <span>{award.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernTheme;
