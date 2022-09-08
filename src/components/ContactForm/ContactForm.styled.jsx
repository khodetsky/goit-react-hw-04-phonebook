import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddForm = styled(Form)`
width: 300px;
border: 1px solid black;
margin-left: 20px;
display: flex;
flex-direction: column;
align-items: flex-end;`;

export const InputLabel = styled.label`
margin-top: 10px;
font-weight: 500;`;

export const AddField = styled(Field)`
margin-left: 25px;
margin-right: 20px;`;

export const SubmitButton = styled.button`
margin: 10px auto;
border-radius: 5px;
border: 1px solid black;
cursor: pointer;

:hover,
:focus {
    background-color: blue;
    color: white;
    border-color: blue;
}
`;
