import PropTypes from 'prop-types';
import { ContactListItem, ContactListStyle, DeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListStyle>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <DeleteButton type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
                </ContactListItem>
            ))}
        </ContactListStyle>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    onDeleteContact: PropTypes.func.isRequired,
}
