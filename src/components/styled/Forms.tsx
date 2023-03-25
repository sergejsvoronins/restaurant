import styled from "styled-components";

export const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1000px) {
    width: 45%;
  }
`;