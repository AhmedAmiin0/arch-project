import {ContactFormStyles, ContactFormUserData} from "./ContactForm.styles";
import {Container} from "../../layout/GlobalStyle ";

export default function ContactForm() {
    return <Container>
        <ContactFormStyles>
            <ContactFormUserData>
                <input type="text" placeholder='name' />
                <input type="email" placeholder='Email Address' />
                <input type="text" placeholder='Phone Number' />
            </ContactFormUserData>
            <ContactFormUserData>
                <textarea name="text" placeholder='text'></textarea>
                <input type="submit" value="send"/>
            </ContactFormUserData>
        </ContactFormStyles>

    </Container>

}