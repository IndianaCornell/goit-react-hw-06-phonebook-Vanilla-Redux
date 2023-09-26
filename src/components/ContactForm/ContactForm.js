import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/store';

import {
  StyledForm,
  ErrorMess,
  StyledLabel,
  FieldArea,
  StyledButton,
  ErrorP,
} from './ContactForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.number().required().positive().integer().min('5'),
});

export const ContactForm = ({ onAdd }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const toAdd = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    if (contacts.find(contact => contact.number === newContact.number)) {
      return alert(`${newContact.number} is already in contacts`);
    }
    dispatch(addContact({ ...newContact, id: nanoid() }));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          toAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>Name</StyledLabel>
          <FieldArea name="name" placeholder="Enter a name" />
          <ErrorMess
            name="name"
            component="div"
            render={msg => <ErrorP>Name is required</ErrorP>}
          />

          <StyledLabel>Number</StyledLabel>
          <FieldArea name="number" placeholder="Enter the number" />
          <ErrorMess
            name="number"
            component="div"
            render={msg => <ErrorP>Number must be a `number` type</ErrorP>}
          />

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
