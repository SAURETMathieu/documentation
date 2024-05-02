---
id: template-input
title: Template input
sidebar_label: Template d'input dynamique
---

## Fonction Input

```jsx
import React from "react";

function Input({ options, handleInputChange, handleFileChange }) {
  const {
    id,
    label,
    placeholder,
    defaultValue,
    errorMessage,
    type,
    className,
    disabled,
    title,
    required,
    ariaLabel,
    format,
    pattern,
    minLength,
    maxLength,
    min,
    max,
    step,
    autoComplete,
    multiple,
    accept,
    src,
  } = options;

  const inputProps = {
    id,
    name: id,
    placeholder,
    defaultValue,
    onChange: (event) =>
      type === "file"
        ? handleFileChange(id, event)
        : handleInputChange(id, event),
    disabled,
    title,
    required,
    type: type || "text",
    className: "control has-icons-left has-icons-right",
    "aria-label": ariaLabel,
    ...(errorMessage && { "aria-describedby": `${id}-help` }),
    format,
    pattern,
    minLength,
    maxLength,
    min,
    max,
    step,
    autoComplete,
    multiple,
    accept,
  };

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      {type === "textarea" && <textarea id={id} {...inputProps} />}
      {type === "select" && (
        <select id={id} {...inputProps}>
          {options &&
            options.options &&
            options.options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        </select>
      )}
      {type !== "textarea" && type !== "select" && (
        <>
          <input type={type} id={id} {...inputProps} />
          {type === "file" && id === "url_image" && (
            <img className="image-preview" src={src} alt="Preview" />
          )}
        </>
      )}
      {errorMessage && (
        <div id={`${id}-help`} className="form-text text-danger">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Input;
```

## Utilisation

```jsx
<Input
  key={options.id}
  options={options}
  handleInputChange={handleInputChange}
  handleFileChange={handleFileChange}
/>
```

## Initialisation des options

```json
{
  "options": {
    "lastname": {
      "id": "lastname",
      "label": "Nom",
      "type": "text",
      "placeholder": "Nom",
      "required": true
    },
    "firstname": {
      "id": "firstname",
      "label": "Prénom",
      "type": "text",
      "placeholder": "Prénom",
      "required": true
    },
    "password": {
      "id": "password",
      "label": "Mot de passe",
      "type": "password",
      "placeholder": "Mot de passe",
      "required": true
    },
    "year": {
      "id": "year",
      "label": "Année",
      "type": "number",
      "placeholder": "Année",
      "min": 1900,
      "max": 2100,
      "step": 1,
      "required": true
    },
    "description": {
      "id": "description",
      "label": "Description",
      "type": "textarea",
      "placeholder": "Description",
      "required": true,
      "className": "textarea-container"
    },
    "label_id": {
      "id": "label_id",
      "label": "Labels",
      "type": "select",
      "required": true
    },
    "starting_date": {
      "id": "starting_date",
      "label": "Date de début",
      "type": "datetime-local",
      "required": true
    },
    "url_sound": {
      "id": "url_sound",
      "label": "Son",
      "type": "file",
      "accept": "audio/*",
      "required": true,
      "className": "input-file-container"
    }
  }
}
```

## Initialiser le formulaire

```jsx
const [formData, setFormData] = useState({});

const initialForm = () => {
  const initialFormData = {};

  optionsList?.forEach((option) => {
    initialFormData[option.id] = option.defaultValue || "";
  });

  setFormData(initialFormData);
};
```

## Fonction inputChange

```jsx
const handleInputChange = (id, event) => {
  const { value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [id]: value,
  }));
};
```

## Fonction handleFileChange

```jsx
const handleFileChange = (id, event) => {
  setFormData({
    ...formData,
    [id]: event.target.files[0],
  });
  if (event.target.name === "url_image") {
    document.querySelector(".image-preview").src = URL.createObjectURL(
      event.target.files[0]
    );
  }
};
```

## Exemple de formulaire

```jsx
return (
  <form
    key={formKey}
    className="create-form"
    onSubmit={handleSubmit}
    encType="multipart/form-data"
  >
    {modalMode === "create" &&
      optionsList &&
      optionsList.map((options) => (
        <Input
          key={options.id}
          options={options}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
        />
      ))}

    {modalMode === "update" &&
      optionsUpdate &&
      optionsUpdate.map((options) => (
        <Input
          key={options.id}
          options={options}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
        />
      ))}
    <div className="modal-submit-buttons">
      <button
        type="button"
        className="is-cancel close-modal-btn"
        onClick={handleClose}
        aria-label="Close modal"
      >
        Annuler
      </button>
      <button
        type="submit"
        className="is-success"
        onClick={handleSubmit}
        aria-label="Valid form"
      >
        Confirmer
      </button>
    </div>
  </form>
);
```

## Fonction handleSubmit

```jsx
const handleSubmit = async (event) => {
  event.preventDefault();
  const formElement = event.target.closest("form");

  if (formElement && formElement.checkValidity()) {
    if (!formData.password || !formData.passwordConfirm) {
      delete formData.password;
      delete formData.passwordConfirm;
    }
    const resultData =
      modalMode === "create"
        ? await fetchData("POST", route, formData, true)
        : await fetchData(
            "PATCH",
            `${route}/${itemSelected.id}`,
            formData,
            true
          );
    if (resultData) {
      if (modalMode === "create") {
        handleDataCreate(resultData[0]);
        toast.success("Création réussie.");
      }
      if (modalMode === "update") {
        handleDataUpdate(resultData[0]);
        toast.success("Modification réussie.");
      }
      setFormKey((prevKey) => prevKey + 1);
      setItemSelected(null);
      handleClose();
    }
  } else {
    toast.error("Certains champs du formulaire ne sont pas valides.");
  }
};
```
