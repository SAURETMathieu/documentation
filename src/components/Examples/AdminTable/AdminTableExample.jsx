import AdminTable from '@site/src/components/Examples/AdminTable/AdminTable';
import filteredData from '@site/src/datas/backOfficeExample.json';
import React, { useRef, useState } from 'react';

export default function AdminTableExample() {
  const [jsonData, setJsonData] = useState(filteredData);
  const [tempData, setTempData] = useState(JSON.stringify(filteredData, null, 2));
  const [message, setMessage] = useState('Tableau généré avec succès');
  const textareaRef = useRef(null);

  const handleTextareaChange = (event) => {
    setTempData(event.target.value);
  };

  const handleValidation = () => {
    try {
      const newData = JSON.parse(tempData);
      setJsonData(newData);
    } catch (error) {
      setMessage('Erreur lors de la conversion JSON');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();

      const { selectionStart, selectionEnd } = event.target;
      const { value } = event.target;

      const newValue = `${value.substring(0, selectionStart)
      }  ${
        value.substring(selectionEnd)}`;

      setTempData(newValue);
      setTimeout(() => {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1);
      }, 0);
    }
  };

  return (
    <div>
      <h4>Entrez vos données au format JSON ici:</h4>
      <textarea
        ref={textareaRef}
        rows="4"
        cols="50"
        placeholder="Vos données au format json"
        value={tempData}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%', height: '400px', maxHeight: '800px', maxWidth: '100%',
        }}
      />
      <button type="button" aria-label="valider les données Json" onClick={handleValidation}>Valider</button>
      <span className="">{message}</span>
      <h3>Tableau généré</h3>
      <AdminTable filteredDatas={jsonData} />
    </div>
  );
}
