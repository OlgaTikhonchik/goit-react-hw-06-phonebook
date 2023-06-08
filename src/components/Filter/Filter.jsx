// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContainerFilter, Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const inputId = nanoid();
  const handlerChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <ContainerFilter>
      <Label htmlFor={inputId}> Find contacts by name :</Label>
      <Input
        type="text"
        value={filter}
        name="input"
        id={inputId}
        onChange={handlerChangeFilter}
        placeholder="Search..."
      />
    </ContainerFilter>
  );
};

// Filter.propTypes = {
//   // onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
