---
id: fetch-data
title: Template fetch
sidebar_label: Fonction template fetch
---

## Fonction template pour les appels API

```js
import { toast } from 'react-toastify';

const fetchData = async (method, endpoint, requestData = null, needToken = false) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const url = `${apiUrl}/${endpoint}`;
    let headers = {};

    if (method === 'GET' && method === 'DELETE') {
      headers = {
        'Content-Type': 'application/json',
      };
    }

    if (needToken) {
      const token = localStorage.getItem('authApiToken');
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      } else {
        console.log('Un token est nécessaire mais n\'a pas été fourni.');
      }
    }

    const options = {
      method,
      headers,
    };

    if (method !== 'GET' && method !== 'DELETE') {
      const formData = new FormData();
      Object.keys(requestData).forEach((key) => {
        const value = requestData[key];
        formData.append(key, value);
      });
      if (requestData === null) {
        options.body = null;
      } else {
        options.body = formData instanceof FormData ? formData : JSON.stringify(formData);
      }
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      const data = await response.json();
      if (response.status === 403 && data.error === 'Le token est invalide') {
        localStorage.removeItem('authApiToken');
        toast.error('Votre session a expiré');
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
        return false;
      }
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
    }

    if (response.status === 204) {
      toast.success('Suppression réussie.');
      return true;
    }

    const data = await response.json();

    const datasArray = Array.isArray(data) ? data : [data];

    datasArray.forEach((dataArray) => {
      Object.keys(dataArray).forEach((columnName) => {
        if (Array.isArray(dataArray[columnName]) && !dataArray[columnName][0]) {
          dataArray[columnName] = [];
        }
      });
    });

    return datasArray;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
```

### Exemples d'utilisation :

GET request:

```js
const labelsData = await fetchData('GET', 'labels');
```

POST request avec des données :

```js
const postedData = await fetchData('POST', 'labels', postData, true);
```

PATCH request avec des données :

```js
const patchedData = await fetchData('PATCH', 'labels/:id', patchData);
```

DELETE request :

```js
const deletedData = await fetchData('DELETE', 'labels/:id', null, true);
```
