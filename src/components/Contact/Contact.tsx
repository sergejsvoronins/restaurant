
import styled from "styled-components";
import { SubmitButton } from "../styled/Buttons";
import { Form } from "../styled/Forms";
import { H1, H3, H4 } from "../styled/Headings";
import {  InputWrapper } from "../styled/Wrappers";

const Textarea = styled.textarea`
  width: 70vw;
  height: 40vh;
  outline: none;
  border-radius: 18px;
  outline-color: black;
  color: black;
  border: 6px solid black;
  font-size: 16px;
`;

export const Contact = () => {
  const handleSubmit = () => {
    alert(
      "Tack för ditt meddelande! Vi återkommer till dig så fort som möjligt."
    );
  };
  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Kontakta oss</H3>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Namn</label>
          <input type="text" required />
          <label>Email</label>
          <input type="email" required />
          <label>Bokningsnummer</label>
          <input type="text" required />
          <label>Meddelande</label>
          <textarea required></textarea>
        </InputWrapper>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </>
  );
};
