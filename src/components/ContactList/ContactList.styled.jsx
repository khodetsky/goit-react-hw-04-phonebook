import styled from 'styled-components';

export const ContactListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;

font-weight: 500;`;

export const ContactListStyle = styled.ul`
width: 300px;
margin-left: 20px;`;

export const DeleteButton = styled.button`
border-radius: 5px;
border: 1px solid black;
cursor: pointer;


:hover,
:focus {
    background-color: blue;
    color: white;
    border-color: blue;
}`