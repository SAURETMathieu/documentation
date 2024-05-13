import { options } from '../../../datas/formElement.json';
import AutoForm from './AutoForm';

function ArtistForm() {
  const optionsList = [
    options.firstname,
    options.lastname,
    options.nickname,
    options.year,
    options.city,
    options.country,
    options.description,
    options.function,
    options.url_image,
  ];

  return (
    <AutoForm optionsList={optionsList} />
  );
}

export default ArtistForm;
