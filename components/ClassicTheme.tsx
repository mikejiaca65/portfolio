
import React from 'react';
import { Resume } from '../types';

interface Props {
  data: Resume;
}

const ClassicTheme: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row max-w-6xl mx-auto shadow-2xl my-10 border border-gray-100 overflow-hidden text-slate-900">
      {/* Sidebar */}
      <aside className="md:w-1/3 bg-slate-800 text-white p-8">
        <div className="mb-10">
          <h1 className="text-4xl font-serif font-bold mb-2">{data.name}</h1>
          <p className="text-slate-300 font-medium tracking-wide uppercase text-sm">{data.title}</p>
        </div>

        <section className="mb-10">
          <h2 className="text-lg font-bold border-b border-slate-600 pb-2 mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <span className="w-5 mr-2 opacity-60">📍</span> {data.location}
            </li>
            <li className="flex items-center">
              <span className="w-5 mr-2 opacity-60">📧</span> 
              <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a>
            </li>
            <li className="flex items-center">
              <span className="w-5 mr-2 opacity-60">📞</span> {data.phone}
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold border-b border-slate-600 pb-2 mb-4">Expertise</h2>
          {data.skills.map((cat, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-xs font-bold uppercase text-slate-400 mb-1">{cat.category}</h3>
              <p className="text-sm leading-relaxed">{cat.items.join(', ')}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-lg font-bold border-b border-slate-600 pb-2 mb-4">Certifications</h2>
          {data.education.filter(e => e.degree.includes('Cert')).map((cert, i) => (
            <div key={i} className="mb-3 text-sm">
              <p className="font-semibold">{cert.degree}</p>
              <p className="text-slate-400">{cert.institution}, {cert.year}</p>
            </div>
          ))}
        </section>
      </aside>

      {/* Main Content */}
      <main className="md:w-2/3 p-10 bg-white">
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-slate-800 border-b-2 border-slate-100 pb-3 mb-6">Work Experience</h2>
          <div className="space-y-10">
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-700 font-medium">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-500">{exp.period}</p>
                    <p className="text-xs text-slate-400">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-slate-800 border-b-2 border-slate-100 pb-3 mb-6">Education</h2>
          <div className="space-y-6">
            {data.education.filter(e => !e.degree.includes('Cert')).map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <span className="text-slate-500 font-medium">{edu.year}</span>
                </div>
                <p className="text-sm text-slate-600">
                  {edu.institutionUrl ? (
                    <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:underline">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </p>
                {edu.details && <p className="text-xs italic text-slate-400 mt-1">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-800 border-b-2 border-slate-100 pb-3 mb-6">Awards & Publications</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {data.awards.map((award, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0 mt-1">✦</span>
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:underline">
                    {award.title}
                  </a>
                ) : (
                  <span>{award.title}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ClassicTheme;
