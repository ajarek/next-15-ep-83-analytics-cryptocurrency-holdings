'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const chartData = [
  { hour: "06:00", kurs: 115 },
  { hour: "10:00", kurs: 125 },
  { hour: "14:00", kurs: 108 },
  { hour: "18:00", kurs: 135 },
  { hour: "22:00", kurs: 128 },
  { hour: "02:00", kurs: 120 },
];

const LineChartCrypto = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Zmiana kursu w ciągu dnia</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis 
              domain={[100, 'auto']} 
              label={{ value: 'kurs w $', angle: -90, position: 'insideLeft' }} 
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="kurs" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCrypto;