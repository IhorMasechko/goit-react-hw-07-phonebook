import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/slices/filter';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        placeholder="Enter filter"
        onChange={handleChange}
        name="name"
        autoComplete="off"
      />
    </div>
  );
};
