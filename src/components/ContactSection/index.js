import React, { useState } from 'react'

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

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <>
            <ContactWrapper id="contact">
                <StyledTitle>Contact Me</StyledTitle>
                <Container wrapper>
                    <div>
                    {/* <h3>Email Us</h3> */}
                        <Form onSubmit={handleSubmit}>
                            <WrapperGrid>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" name="name" required />
                            </WrapperGrid>
    
                            <WrapperGrid>
                                <Label htmlFor="email">Email Address</Label>
                                <Input type="email" id="email" required />
                            </WrapperGrid>
    
                            <WrapperGrid full>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" rows="5" required />
                            </WrapperGrid>
                            <WrapperGrid full>
                                <StyledButton type="submit">{status}</StyledButton>
                            </WrapperGrid>
                        </Form>
                    </div>
                </Container>
            </ContactWrapper>

        </>
    )
}

export default ContactSection
