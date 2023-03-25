import styled from "styled-components";

interface IHamburgerLogoLabelProps {
    open: boolean;
  }
  export const HamburgerLogoLabel = styled.label`
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 1rem;
      div {
        width: 2em;
        background-color: black;
        height: 2px;
        position: relative;
        transition: all 0.2s ease-in-out;
        &:nth-child(1) {
          transform: ${(props: IHamburgerLogoLabelProps) =>
            props.open ? "rotate(-45deg)" : "rotate(0deg)"};
          top: ${(props: IHamburgerLogoLabelProps) =>
            props.open ? "6px" : "0px"};
          background-color: ${(props: IHamburgerLogoLabelProps) =>
            props.open ? "white" : "black"};
        }
        &:nth-child(2) {
          transform: ${(props: IHamburgerLogoLabelProps) =>
            props.open ? "rotate(45deg)" : "rotate(0deg)"};
          top: ${(props: IHamburgerLogoLabelProps) =>
            props.open ? "-6px" : "0px"};
          background-color: ${(props: IHamburgerLogoLabelProps) =>
            props.open ? "white" : "black"};
        }
      }
    }
  `;
export const Label = styled.label`
  text-align: end;
  padding-right: 5px;
  font-weight: 500;
  font-size: large;
`;