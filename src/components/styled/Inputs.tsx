import styled from "styled-components";





export const AdminBookingInput = styled.input`
  width: 60%;
  padding: 0.2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;

export const HamburgerLogoInput = styled.input`
    display: none;
`;


export const Dateinput = styled.input`
  width: 60%;
  padding: 0.2rem;
  position: relative;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-25%);
    height: 100%;
    margin: 0;
    padding: 0;
    padding-left: 100%;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;