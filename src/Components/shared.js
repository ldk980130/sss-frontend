import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

export const Flexrow = styled.div`
    display: flex;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Subtitle = styled.div`
    margin-top: ${ props => props.top };
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #666666;
`;

export const Input = styled.input`
    width: 400px;
    height: 50px;
    padding: 0 20px;
    margin-top: 25px;
    margin-botton: 10px;
    border-radius: 10px;
    background-color:#fafafa;
    border: 1px solid #C4C4C4;
    &::placeholder{
        font-size: 17px;
    }
`;

export const Submitbutton = styled.input`
    border:none;
    border-radius: 30px;
    margin-top:30px;
    margin-left: 300px;
    background-color: #C4C4C4;
    color: white;
    text-align:center;
    padding: 8px 0px;
    width: 120px;
    height: 60px;
    font-size: 17px;
`;

export const Text = styled.div`
    margin-top: ${ props => props.top };
    margin-bottom: ${ props => props.bottom };
    margin-right: ${ props => props.right };
    font-size: ${ props => props.size };
    color: #565656;
    &:hover {
        color: ${ props => props.hover };
      }
`;