import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

export const Row = styled.div`
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
    margin-bottom: ${ props => props.bottom };
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
    background-color: #C4C4C4;
    color: white;
    padding: 8px 0px;
    width: 120px;
    height: 60px;
    font-size: 17px;

    margin-top: ${ props => props.mt };
    margin-bottom: ${ props => props.mb };
    margin-left: ${ props => props.ml };
    width: ${ props => props.width };
    height: ${ props => props.height };
`;

export const Text = styled.span`
    margin-top: ${ props => props.top };
    margin-bottom: ${ props => props.bottom };
    margin-right: ${ props => props.right };
    font-size: ${ props => props.size };
    color: #565656;
    &:hover {
        color: ${ props => props.hover };
      }
    cursor: ${ props => props.cursor };
`;

export const Box = styled.div`
    background: #F1F1F1;
    border: 1px solid #C4C4C4;
    border-radius: 20px;

    padding: 40px;

    width: ${ props => props.width };
    height: ${ props => props.height };
    margin-top: ${ props => props.top };
    padding-top: ${ props => props.pt };
    padding-bottom: ${ props => props.pb };
`;

export const Absolute = styled.div`
    position: absolute;
    top: ${ props => props.top };
    left: ${ props => props.left };
    right: ${ props => props.right };
    bottom: ${ props => props.bottom };
`;