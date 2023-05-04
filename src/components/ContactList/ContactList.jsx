import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const { input } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {visibleContacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};
