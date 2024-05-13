/* eslint-disable react/prop-types */

import { useState } from 'react';
import styles from './AdminTable.module.css';

function AdminTable({
  filteredDatas,
}) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  if (filteredDatas.length) {
    return (
      <div className={styles.container}>
        <table className="">
          <thead>
            <tr>
              {Object.keys(filteredDatas[0]).map((columnName) => (
                <th className="" key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredDatas.map((data) => (
              <tr
                key={data.id}
                onClick={() => handleRowClick(data.id)}
                className={selectedRow === data.id ? 'is-selected' : ''}
              >
                {Object.keys(data).map((columnName) => (
                  <td key={columnName}>{data[columnName]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p>Aucunes données.</p>;
}

export default AdminTable;
