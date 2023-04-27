import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #f2f2f2;
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px;
    background-color: #007aff;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-right: 10px;

    &:hover {
        background-color: #0056b3;
    }

    & span {
        margin-right: 10px;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
`;
export const SearchField = styled.input`
    flex: 1;
    height: 40px;
    padding: 0 20px;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    color: #333;

    &::placeholder {
        color: #a6a6a6;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
    }
`;