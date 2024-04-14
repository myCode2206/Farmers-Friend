import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import DetailsBar from "./DetailsBar";
import InputSide from "./InputSide";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 70vh;

  @media only screen and (max-width: 850px) {
    width: 90%;
    flex-direction: column;
    height: auto;
  }
  @media only screen and (min-width: 850px) {
    width: 90%;
    flex-direction: row;
    height: auto;
  }
  @media only screen and (min-width: 1000px) {
    width: 90%;
    flex-direction: row;
    height: auto;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;

const FormPage = () => {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_bkg56qj",
        "template_preg9u4",
        formRef.current,
        "4TiwfDly9BiZRP5N_"
      );
      console.log("Email sent successfully!");
      setMessage("Response sent successfully.");
      alert("Response sent successfully.");
      formRef.current.reset(); // Reset the form fields
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Failed to send email. Please check your network connection or try again later."
      );
    }
  };

  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer ref={formRef} onSubmit={sendEmail}>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;
