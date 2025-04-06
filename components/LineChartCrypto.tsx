'use client'
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PropsChartData {
  chartData: { hour: string; kurs: number }[] | undefined
  price0: number | undefined
}

const LineChartCrypto = ({ chartData, price0 }: PropsChartData) => {
  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle className='text-center'>
          Zmiana kursu w ciągu doby:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width='100%'
          height={300}
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='hour' />
            <YAxis
              domain={[price0 ?? 0, 'auto']}
              label={{ value: 'kurs w $', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Line
              type='linear'
              dataKey='kurs'
              stroke='#8884d8'
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default LineChartCrypto
