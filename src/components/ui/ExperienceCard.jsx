import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ company, position, year, type, logo, description }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 bg-white dark:bg-neutral-900 transition hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt={company} className="w-10 h-10 object-contain rounded-full" />
          <div>
            <h3 className="font-semibold text-lg dark:text-white">{position} <span className="text-yellow-500">@ {company}</span></h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">({type})</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Briefcase size={16} />
          <span>{year}</span>
        </div>
      </div>

      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;