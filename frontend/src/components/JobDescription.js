import React from 'react';

export function JobDescription({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 from-neutral-800">
        Job Description
      </label>
      <textarea
        id="jobDescription"
        rows={8}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Paste the job description here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}