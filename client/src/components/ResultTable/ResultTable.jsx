import React, { useEffect } from 'react';
import './ResultTable.css';
import { useState } from 'react';
import { getServerData } from '../../helper/helper';

const ResultTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getServerData('http://localhost:5000/api/result', (res) => {
      setData(res);
    });
  });

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earned Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No data founded</div>}
          {data.map((value, index) => (
            <tr className="table-body" key={index}>
              <td>{value?.userName || ''}</td>
              <td>{value?.attempts || 0}</td>
              <td>{value?.points || 0}</td>
              <td>{value?.achieved || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
