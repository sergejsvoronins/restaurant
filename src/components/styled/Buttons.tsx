import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  background-color: black;
  color: white;
  border: 1px black;
  border-radius: 18px;
  margin-top: 15px;
  margin-bottom: 35px;
  font-size: medium;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;
export const AdminBookingButton = styled(Button)`
  width: 75px;
  height: 35px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.75;
  }
`;

export const HomeBookingButton = styled(AdminBookingButton)`
width: 150px;
height: 45px;
font-size: 18px;
&:hover {
  opacity: 0.85;
}
`;
export const SubmitButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 2px;
  transition: all 0.1s linear;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;
export const NotAvailableButton = styled(SubmitButton)`
  width: 100%;
  background-color: white;
  color: gray;
  border-radius: 2px;
  padding: 1rem;
  border: 1px solid gray;
  &:hover {
    cursor: auto;
    transform: scale(1);
    box-shadow: none;
  }
`;