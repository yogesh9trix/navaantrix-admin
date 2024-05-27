/** @format */

import { Box } from '@mui/material';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const resizeObserver = new ResizeObserver((entries) => {
  entries.map(({ target }) => {
    const chart = echarts.getInstanceByDom(target);
    if (chart) {
      chart.resize();
    }
  });
});

function Home() {
  const chartRef = useRef();

  let myChart = '';
  function renderChart() {
    myChart = echarts.init(chartRef.current, 'dark', { width: 'auto' });

    // Draw the char
    myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example',
        subtext: 'Amaxing',
        left: 'center',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: [
          'shirt',
          'cardigan cardigan cardigan',
          'chiffon',
          'pants',
          'heels',
          'socks',
        ],
        offset: -10,
        axisLabel: {
          interval: 0,
          margin: 20,
          width: '120',
          overflow: 'truncate',
          rotate: 25,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    myChart.on('click', function () {});
  }

  function updateChart() {
    myChart.setOption({
      series: {
        data: [21, 12, 5, 58, 66, 45],
      },
      yAxis: {
        data: ['love', 'affection', 'anger', 'pitty', 'hate', 'care'],
      },
    });
  }

  useEffect(() => {
    renderChart();
    if (resizeObserver) {
      resizeObserver.observe(chartRef.current);
    }
  }, []);
  return (
    <Box>
      <button onClick={() => updateChart()}>Update bar chart</button>
      <Box
        id="chart"
        ref={chartRef}
        sx={{
          width: { xs: '100%', sm: 600 },
          height: '300px',
          padding: 1,
        }}
      ></Box>
    </Box>
  );
}

export default Home;
