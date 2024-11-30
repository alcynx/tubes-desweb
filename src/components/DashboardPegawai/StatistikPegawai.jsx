import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const StatistikChart = ({ data }) => {
  return (
    <div className="flex">
      {/* Bagian Chart */}
      <div style={{ height: 200, width: 200 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ datum: 'data.color' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={360}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="#FFFFFF"
        />
      </div>

      {/* Bagian Card Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto my-4">
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-4 rounded-lg shadow w-36 h-16 text-center mx-auto ${item.id === 'Hadir' ? 'bg-greenstat text-white' : item.id === 'Izin/Sakit' ? 'bg-bluestat text-white' : item.id === 'Terlambat' ? 'bg-yellowstat text-white' : 'bg-redstat text-white'}`}
          >
            <span className="text-3xl font-bold font-poppins">{item.value}</span>
            <span className="ml-2 font-poppins">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatistikChart;
