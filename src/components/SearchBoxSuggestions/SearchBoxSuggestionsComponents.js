import styled from 'styled-components';

export const TextBox = styled.input`
    border: 1px solid #999;
    padding: 0.5rem;
    width: 300px;
`

export const Suggestions = styled.ul`
    display: inline-block;
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);

    :hover {
        background-color: #0467fc;;
        color: #fdfdfd;
        cursor: pointer;
        font-weight: 700;
    }
    
    & :not(:last-of-type){
        border-bottom: 1px solid #999;
    }
`
export const Suggestion = styled.li`
display: inline-block;
padding: 0.5rem;
`

export const ActiveSuggestion = styled.li`
    background-color: #0467fc;
    color: #fdfdfd;
    cursor: pointer;
    font-weight: 700;
    padding: 0.5rem;
`
export const NoSuggestions = styled.div`
    color: #999;
    padding: 0.5rem;
`