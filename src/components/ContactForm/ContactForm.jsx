import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {AddForm, AddField, InputLabel, SubmitButton} from './ContactForm.styled'

export const ContactForm = ({ onAddContact }) => {
    const initialValues = {
        name: '',
        number: '',
    };

    return (
        <Formik initialValues={initialValues}  onSubmit={onAddContact}>
            <AddForm>
                <InputLabel >
                    Name
                    <AddField type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
                </InputLabel>
                <InputLabel >
                    Number
                    <AddField type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </InputLabel>
                <SubmitButton type='submit'>Add contact</SubmitButton>
            </AddForm>
        </Formik>
    );
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}
