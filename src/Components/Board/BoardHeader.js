import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../routes";

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    background: #ffffff;
    padding-top: 10px;
    
    display: flex;
    align-items: center;
`;

const CreateButton = styled.button`
    border: 1px solid #E0E0E0;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #E5E5E5;
    color: #808080;
    width: 160px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;

    position: absolute;
    right: 50px;
`;

const SearchBar = styled.input`
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    width: 450px;
    @media only screen and (max-width: 700px) {
        width: 200px;
      }
    height: 45px;
    font-size: 18px;

    margin-left: 30px;
`;

const BoardHeader = (props) => {
    return (
        <HeaderContainer>
            <SearchBar placeholder='Search..'></SearchBar>
            {props.isLoggedIn ? (
                <Link to={routes.create}><CreateButton>글쓰기</CreateButton></Link>
            ) : (
                null
            )}
        </HeaderContainer>
    );
};

export default BoardHeader;