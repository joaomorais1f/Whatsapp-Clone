import styled from 'styled-components';
import { Search } from '@styled-icons/heroicons-outline/Search';
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #242d32;
    background: #131c21;
`;

export const SearchContent = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    height: 35px;
    width: 95%;
    margin: 5px auto;
    border-radius: 30px;
    outline: 0;
    background: #323739;
    label {
        color: #828689;
        width: 68%;
        position: absolute;
        left: 57px;
        font-size: 14px;
    }
`;

export const ButtonContainer = styled.button`
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;

export const SearchIcon = styled(Search)`
    color: #828689;
    width: 100%;
`;

export const LeftArrowIcon = styled(LeftArrowAlt)`
    display: none;
`;

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    margin-left: 25px;
    outline: 0;
    font-size: 15px;
    color: #fff;

    &:focus ~ label {
        display: none;
    }
`;