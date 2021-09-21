import React from 'react'
import emailjs from 'emailjs-com'

import {
    ContactWrapper,
    // ContactContainer,
    Form,
    // Heading,
    Container,
    StyledTitle,
    Textarea,
    StyledButton,
    WrapperGrid,
    Label,
    Input
} from './ContactElements'


const ContactSection = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_template', e.target, 'user_qAJb2FiKxBIlpPqIXLFnX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <>
            <ContactWrapper id="contact">
                <StyledTitle>Contact Me</StyledTitle>
                <Container wrapper>
                    <div>
                    {/* <h3>Email Us</h3> */}
                        <Form onSubmit={sendEmail}>
                            <WrapperGrid>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" name="name" required />
                            </WrapperGrid>
    
                            <WrapperGrid>
                                <Label htmlFor="email">Email Address</Label>
                                <Input type="email" name="email" required />
                            </WrapperGrid>
    
                            <WrapperGrid full>
                                <Label htmlFor="message">Message</Label>
                                <Textarea name="message" rows="5" required />
                            </WrapperGrid>
                            <WrapperGrid full>
                                <StyledButton type="submit" value="Submit">Submit</StyledButton>
                            </WrapperGrid>
                        </Form>
                    </div>
                </Container>
            </ContactWrapper>

        </>
    )
}

export default ContactSection
