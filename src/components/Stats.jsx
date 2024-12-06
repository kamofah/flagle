import React from 'react';

import { Bar } from 'react-chartjs-2';

const options = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'GUESS DISTRIBUTION',
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = [0, 1, 2, 3, 4, 5, 6];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const Stats = () => {
  return <Bar options={options} data={data} />;
};
