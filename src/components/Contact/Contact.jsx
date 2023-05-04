import { useDispatch } from 'react-redux';
import { delContact } from 'redux/slices/contacs';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(delContact(contact.id));

  return (
    <div>
      <span>
        {contact.name}: <span>{contact.number}</span>
      </span>
      <button
        type="button"
        className={css.contactListItemBtn}
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};
