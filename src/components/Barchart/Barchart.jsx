import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
      "id": 56654,
      "name": "Batch-1",
      "total": 500,
      "stay": 300,
      "away": 150,
      "between": 50
    },
    {
      "id": 56655,
      "name": "Batch-2",
      "total": 500,
      "stay": 350,
      "away": 100,
      "between": 50
    },
    {
      "id": 56656,
      "name": "Batch-3",
      "total": 500,
      "stay": 320,
      "away": 100,
      "between": 80
    },
    {
      "id": 56657,
      "name": "Batch-4",
      "total": 500,
      "stay": 280,
      "away": 200,
      "between": 20
    }
  ]

const Barchart = () => {
    return (
        <div>
            <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="stay" fill="#82ca9d" />
          <Bar dataKey="away" fill="#dd96ca" />
          <Bar dataKey="between" fill="#e1de8e" />
        </BarChart>
        </div>
    );
};

export default Barchart;