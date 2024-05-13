import { useEffect, useState } from 'react';
import Input from './Input';
import './form.css';

function AutoForm({ optionsList }) {
  const [formData, setFormData] = useState({});
  const [formInit, setFormInit] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const initialForm = () => {
    const initialFormData = {};

    optionsList?.forEach((option) => {
      initialFormData[option.id] = option.defaultValue || '';
    });
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (optionsList && optionsList.length > 0 && !formInit) {
      initialForm();
      setFormInit(true);
    }
  }, [optionsList, formInit]);

  const handleInputChange = (id, event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleFileChange = (id, event) => {
    setFormData({
      ...formData,
      [id]: event.target.files[0],
    });
    if (event.target.name === 'url_image') {
      document.querySelector('.image-preview').src = URL.createObjectURL(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.target.closest('form');

    if (formElement && formElement.checkValidity()) {
      if (!formData.password || !formData.passwordConfirm) {
        delete formData.password;
        delete formData.passwordConfirm;
      }
      console.log('Envoi des données.');
      setFormKey((prevKey) => prevKey + 1);
    } else {
      console.error('Certains champs du formulaire ne sont pas valides.');
    }
  };

  const handleReset = () => {
    initialForm();
    setFormKey((prevKey) => prevKey + 1);
  };

  return (
    <form
      key={formKey}
      className="create-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      { optionsList
      && optionsList.map((options) => (
        <Input
          key={options.id}
          options={options}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
        />
      ))}
      <div className="submit-buttons">
        <button
          type="button"
          className="is-cancel close-modal-btn"
          onClick={handleReset}
          aria-label="reset formulaire"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="is-success"
          onClick={handleSubmit}
          aria-label="valider le formulaire"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default AutoForm;
