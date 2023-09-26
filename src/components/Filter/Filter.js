import { useDispatch } from 'react-redux';
import { FilterTitle, FilterInputStyled } from './Filter.styled';
import { filteredContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInputStyled
        type="text"
        onChange={evt => dispatch(filteredContacts(evt.target.value))}
      />
    </>
  );
};
