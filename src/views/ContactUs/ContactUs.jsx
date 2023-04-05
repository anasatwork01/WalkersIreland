import React from "react";
import { Contact, Text, ContactDiv, CenterDiv } from "./style";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <ContactDiv>
        <Contact>Contact Us</Contact>
        <Text>
          Got a question ?<br /> We'd love to hear from you. Send us a message
          and we will respond as soon as possible
        </Text>
        <ContactUsForm />
    </ContactDiv>
  );
};

export default ContactUs;
