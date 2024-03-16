import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Bus Number</th>
          <th>Student Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((bus, index) => (
          <tr key={index}>
            <td>{bus.busNumber}</td>
            <td>{bus.studentCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
