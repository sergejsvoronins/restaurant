import styled from "styled-components";
import myImage from "../../assets/images/landingPage.jpg";


interface IAmountGuestsNumberWrapperProps {
  selected: boolean;
}
interface IBookingTimeWrapperProps {
  selected: boolean,
  isTableAvailable: boolean,
}
interface IGdprWrapperProps {
  showGdpr: boolean
}

export const HamburgerWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 5;
`;

export const StartPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${myImage});
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
`;

export const SocialIconWrapper = styled.div`
  font-size: 24px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const NumberOfGuestsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  padding: 1rem 0;
  h4 {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const AmountGuestsNumberWrapper = styled.div`
  width: 14%;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0.4rem 0;
  text-align: center;
  background-color: ${(props: IAmountGuestsNumberWrapperProps) =>
    props.selected ? "black" : "none"};
  color: ${(props: IAmountGuestsNumberWrapperProps) =>
    props.selected ? "white" : "black"};
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

export const BookingTimeDivWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0;
`;
export const BookingTimeWrapper = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 2px;
  text-align: center;
  background-color: ${(props: IBookingTimeWrapperProps) => props.isTableAvailable ?  (props.selected ? "black" : "none") :"none"};
  border: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "1px solid black" : "1px solid gray"};
  color: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? (props.selected ? "white" : "black") : "gray"};
  padding: 0.5rem 0;
  &:hover {
    cursor: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "pointer" : "auto"};
    box-shadow: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "0 0 5px rgba(0, 0, 0, 0.7)" : "none"};
    transform: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "scale(1.01)pointer" : "scale(1)"};
  }
`;



export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0;
  gap: 0.5rem;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  span {
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    } 
    :nth-child(1) {
      text-align: end;
      width: 30%;
    }
    :nth-child(2) {
      text-align: start;
      width: 60%;
    }
    }
  label {
    width: 30%;
    padding: 0.2rem;
    text-align: end;
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  
  input {
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
  }
  textarea {
    width: 60%;
    height: 100px;
    padding: 0.2rem;
  }
  select {
    width: 60%;
    padding: 0.2rem;
  }
`;




export const AdminBookingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 25px;
`;

export const AdminBookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 15px;
  box-shadow: 1px 0px 20px rgba(151, 149, 149, 0.8),
    0px 10px 5px rgba(151, 149, 149, 0.1);
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: calc(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;

export const AdminBookingInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 18px 0px 5px 0px;
`;

export const AvailableTablesWrapper = styled.div `
  width: 100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  padding: 1rem 0;
  h4 {
    width: 100%;
    padding: 1rem 0;
  }
  div {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 20%;
    }
    span {
      font-size: 24px;
    }
  }
`;

export const MenuWrapper = styled.div`
  margin: 2rem 0;
  padding: 1rem 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
  }
  h4 {
    letter-spacing: 1px;
  }
`;

export const AdminWrapper = styled.div`
  height: 100%;
  margin-bottom: 150px;
  width: 100%;
  text-align: center;
  > button {
    width: 180px;
    height: 45px;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    border: 1px black;
    border-radius: 18px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`;

export const GdprWrapper = styled.div`
  display:${(props:IGdprWrapperProps)=>props.showGdpr ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  background-color: white;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  span {
    font-size: 12px;
  }
`;
export const GdprInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 20%;
    }
 label {
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  padding: 0.6rem;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    }
 }
 input {
  display: none;
 }
`;