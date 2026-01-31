
import React from 'react';
import { Resume } from '../types';

interface Props {
  data: Resume;
}

const TerminalTheme: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-neutral-900 min-h-screen text-emerald-500 font-mono p-4 md:p-8">
      <div className="max-w-4xl mx-auto border border-neutral-700 rounded-lg overflow-hidden shadow-2xl bg-neutral-950">
        {/* Terminal Header */}
        <div className="bg-neutral-800 px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs text-neutral-500 mx-auto">mike_jia_portfolio — bash — 80x24</div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 space-y-10">
          <section>
            <div className="text-neutral-500 mb-2 font-light"># Mike Jia Profile</div>
            <h1 className="text-3xl text-emerald-400 font-bold mb-1 underline decoration-emerald-500/30 underline-offset-8">
              {data.name}
            </h1>
            <p className="text-emerald-600 mb-6 tracking-tight">{data.title}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-emerald-700">
              <div><span className="text-neutral-600 mr-2">$</span>email: <span className="text-emerald-500">"{data.email}"</span></div>
              <div><span className="text-neutral-600 mr-2">$</span>phone: <span className="text-emerald-500">"{data.phone}"</span></div>
              <div><span className="text-neutral-600 mr-2">$</span>location: <span className="text-emerald-500">"{data.location}"</span></div>
              <div><span className="text-neutral-600 mr-2">$</span>available: <span className="text-emerald-500">true</span></div>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-emerald-400 border-b border-emerald-900/50 pb-1 mb-4">_experience[]</h2>
            <div className="space-y-8">
              {data.experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l border-neutral-800">
                  <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-emerald-900"></div>
                  <div className="flex justify-between items-start text-sm mb-2">
                    <h3 className="text-emerald-500 font-bold uppercase">
                      {exp.role} @ {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 underline underline-offset-2">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <span className="text-neutral-600">[{exp.period}]</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm leading-relaxed">
                        <span className="text-neutral-700 mr-2">&gt;</span> 
                        <span className="text-neutral-400">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl text-emerald-400 border-b border-emerald-900/50 pb-1 mb-4">_stack.config</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.skills.map((cat, i) => (
                <div key={i} className="bg-neutral-900/50 p-4 rounded border border-neutral-800/50">
                  <h3 className="text-xs text-neutral-600 mb-3 font-bold uppercase tracking-widest">{cat.category}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {cat.items.map((skill, j) => (
                      <span key={j} className="text-sm">
                        <span className="text-neutral-800 mr-1">•</span>{skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl text-emerald-400 border-b border-emerald-900/50 pb-1 mb-4">_education & _recognition</h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="text-sm">
                  <span className="text-neutral-700 mr-2">$</span>
                  <span className="text-emerald-600">{edu.degree}</span> 
                  <span className="text-neutral-700 mx-2">--</span>
                  {edu.institutionUrl ? (
                    <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-emerald-400 underline underline-offset-2">
                      {edu.institution} ({edu.year})
                    </a>
                  ) : (
                    <span className="text-neutral-500">{edu.institution} ({edu.year})</span>
                  )}
                </div>
              ))}
              {data.awards.map((award, i) => (
                <div key={i} className="text-sm">
                  <span className="text-neutral-700 mr-2">$</span>
                  {award.url ? (
                    <a href={award.url} target="_blank" rel="noopener noreferrer" className="text-yellow-600/80 hover:text-yellow-400 hover:underline">
                      ★ {award.title}
                    </a>
                  ) : (
                    <span className="text-yellow-600/80">★ {award.title}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="pt-10 text-xs text-neutral-700 text-center animate-pulse">
            [waiting for input] _
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalTheme;
