'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function ClassOverview() {
  const data = [
    { name: 'Mon', value: 15 },
    { name: 'Tue', value: 38 },
    { name: 'Wed', value: 42 },
    { name: 'Thu', value: 65 },
    { name: 'Fri', value: 68 },
    { name: 'Sat', value: 95 },
  ];

  return (
    <div className="flex flex-col xl:flex-row p-5 bg-[#0F121D] rounded-2xl border border-white/5 shadow-lg h-full">
      
      {/* FIX: 'min-w-0' add kiya hai taaki flexbox infinite stretch na ho */}
      <div className="flex-1 w-full min-w-0 min-h-[200px] xl:pr-6 xl:border-r xl:border-white/5">
        <h3 className="text-sm font-semibold text-white mb-6">Class Overview</h3>
        <div className="h-[180px] w-full">
          {/* FIX: width "100%" ki jagah "99%" kiya hai taaki resize loop break ho jaye */}
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #8b5cf6', borderRadius: '8px', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#a855f7" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#a855f7', strokeWidth: 2, stroke: '#1e1b4b' }}
                activeDot={{ r: 6, fill: '#c084fc', stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right Side: Stats details */}
      <div className="flex flex-col justify-between mt-6 xl:mt-0 xl:pl-6 xl:w-[220px]">
        <div>
          <p className="text-[11px] text-slate-400">Attendance Overview</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-green-400">95%</span>
          </div>
          <p className="text-[10px] text-green-500 mt-0.5">↑ 3% from last week</p>
        </div>

        <div className="mt-4">
          <p className="text-[11px] text-slate-400">Engagement</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl font-bold text-white">High</span>
          </div>
          <p className="text-[10px] text-green-500 mt-0.5">↑ 12% from last week</p>
        </div>

        <div className="mt-4">
          <p className="text-[11px] text-slate-400">Active Leaders</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl font-bold text-white">10/10</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-0.5">All leaders active</p>
        </div>
      </div>
      
    </div>
  );
}