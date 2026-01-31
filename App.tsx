
import React, { useState } from 'react';
import { ThemeType } from './types';
import { resumeData } from './resumeData';
import ClassicTheme from './components/ClassicTheme';
import ModernTheme from './components/ModernTheme';
import TerminalTheme from './components/TerminalTheme';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.CLASSIC);

  const renderTheme = () => {
    switch (theme) {
      case ThemeType.CLASSIC:
        return <ClassicTheme data={resumeData} />;
      case ThemeType.TERMINAL:
        return <TerminalTheme data={resumeData} />;
      case ThemeType.MODERN:
      default:
        return <ModernTheme data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Theme Selector */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2 bg-white/80 backdrop-blur shadow-md p-2 rounded-full border border-gray-200">
        <button 
          onClick={() => setTheme(ThemeType.CLASSIC)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${theme === ThemeType.CLASSIC ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          Classic
        </button>
        <button 
          onClick={() => setTheme(ThemeType.MODERN)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${theme === ThemeType.MODERN ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          Modern
        </button>
        <button 
          onClick={() => setTheme(ThemeType.TERMINAL)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${theme === ThemeType.TERMINAL ? 'bg-black text-green-400' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          Terminal
        </button>
      </div>

      <div className="animate-in fade-in duration-500">
        {renderTheme()}
      </div>

      {/* Deployment Helper Footer */}
      <footer className="py-12 px-4 text-center border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Generated for Mike Jia. This portfolio can be deployed to GitHub Pages by committing this code to a repository and enabling GitHub Pages in the settings.
        </p>
      </footer>
    </div>
  );
};

export default App;
