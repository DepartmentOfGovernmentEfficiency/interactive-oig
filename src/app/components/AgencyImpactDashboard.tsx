'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  tenure: number;
  agency: string;
  impact: number;
}

const AgencyImpactDashboard: React.FC = () => {
  const data: DataItem[] = [
    { name: 'Robert Storch', tenure: 25, agency: 'DOD', impact: 10800000000 },
    { name: 'Michael Missal', tenure: 103, agency: 'VA', impact: 45000000000 },
    { name: 'Christi Grimm', tenure: 35, agency: 'HHS', impact: 18500000000 },
    { name: 'Cardell Richardson', tenure: 8, agency: 'State', impact: 17000000 },
    { name: 'Sandra Bruce', tenure: 37, agency: 'Education', impact: 1200000000 },
    { name: 'Phyllis Fong', tenure: 266, agency: 'Agriculture', impact: 19000000000 },
    { name: 'Larry Turner', tenure: 37, agency: 'Labor', impact: 75000000000 },
    { name: 'Mike Ware', tenure: 81, agency: 'Small Business', impact: 14000000000 }
  ];

  const formatImpact = (value: number): string => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow text-black">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">Inspector Generals</h1>
      
      <div className="space-y-8">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 40, bottom: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
                tick={{ fill: 'black' }}
              />
              <YAxis 
                yAxisId="left"
                tickFormatter={formatImpact}
                tick={{ fill: 'black' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                label={{ value: 'Tenure (months)', angle: 90, position: 'insideRight', fill: 'black' }}
                tick={{ fill: 'black' }}
              />
              <Tooltip 
                formatter={(value: number, name: string) => {
                  if (name === 'impact') return formatImpact(value);
                  return `${value} months`;
                }}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                labelStyle={{ color: 'black' }}
              />
              <Legend />
              <Bar 
                dataKey="impact" 
                fill="#FF5C5C" 
                name="Impact" 
                yAxisId="left"
              />
              <Bar 
                dataKey="tenure" 
                fill="#5C6BE0" 
                name="Tenure" 
                yAxisId="right"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-black">Name</th>
                <th className="px-4 py-2 text-left text-black">Agency</th>
                <th className="px-4 py-2 text-right text-black">Tenure (months)</th>
                <th className="px-4 py-2 text-right text-black">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row) => (
                <tr key={row.name}>
                  <td className="px-4 py-2 text-black">{row.name}</td>
                  <td className="px-4 py-2 text-black">{row.agency}</td>
                  <td className="px-4 py-2 text-right text-black">{row.tenure}</td>
                  <td className="px-4 py-2 text-right text-black">{formatImpact(row.impact)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-center p-4 text-sm text-black border-t mt-8">
        Authored by Michael Mendy © 2025
      </div>
    </div>
  );
};

export default AgencyImpactDashboard;