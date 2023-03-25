import styled from "styled-components";

interface INavProps {
    open: boolean;
  }
export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    width: 35%;
    position: absolute;
    transition: all 0.3s ease-in-out;
    opacity: ${(props: INavProps) => (props.open ? "1" : "0")};
    top: ${(props: INavProps) => (props.open ? "0" : "-1000px")};
    width: 100%;
    background-color: #525252;
    z-index: 5;
    padding-top: 3rem;
    ul {
      display: flex;
      flex-direction: column;
      padding: 18px 0;
      gap: 10px;
      li {
        list-style-type: none;
        text-align: center;

        a {
          color: white;
          text-decoration: none;
          font-size: 22px;
          transition: all 0.2s ease-in;
          &:hover {
            cursor: pointer;
            opacity: 0.75;
          }
        }
      }
    }
  }
  @media screen and (min-width: 769px) {
    background-color: #525252;
    height: 75px;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      margin: 0;
      gap: 25px;
      li {
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          font-size: 19px;
          transition: all 0.2s ease-in;
          &:hover {
            cursor: pointer;
            opacity: 0.75;
          }
        }
      }
    }
  }
`;