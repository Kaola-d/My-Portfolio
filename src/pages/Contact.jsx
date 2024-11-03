import styled from "styled-components";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagramSquare, FaEnvelope } from "react-icons/fa";

const Connect = () => {
    return (
        <Wrapper>
            <Aboutcont>
                <Connectone>
                    <h2>Let's Connect</h2>
                    <p>Please fill out the form on this section to contact with me or call between 9:00 A.M and 7:00 P.M WAT, Monday through Friday.</p>

                    <SocialHand>
                        <a href="https://www.facebook.com/adeyemo.olaide?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com/okadeyemo" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare />
                        </a>
                        <a href="https://github.com/Kaola-d" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/adeyemo-olaide" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:olaideadeyemok@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </SocialHand>
                </Connectone>

                <Messageme>
                    <h2>Send Me a Message</h2>
                    <form action="mailto:olaideadeyemok@gmail.com" method="post" enctype="text/plain">
                        <input type="text" name="name" placeholder="Your name" /><br /><br />
                        <input type="email" name="email" placeholder="Your email" /><br /><br />
                        <textarea name="message" placeholder="Message"></textarea><br /><br />
                        <button type="submit">Submit</button>
                    </form>
                </Messageme>
            </Aboutcont>
        </Wrapper>
    )
}

export default Connect

// Styled components
const Wrapper = styled.div`
    margin: 0 auto;
    background-color: #f4e7de;
    width: 100%;
    padding: 30px 0;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Aboutcont = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px 0;
    justify-content: space-between;

    h2 {
        margin-bottom: 20px;
        font-size: 24px;
    }
`;

const Connectone = styled.div`
    flex: 1;
    max-width: 500px;

    p {
        margin-top: 20px;
        line-height: 1.6;
        font-size: 16px;
    }
`;

const SocialHand = styled.div`
    display: flex;
    gap: 20px;
    font-size: 30px;
    margin-top: 20px;

    a {
        color: inherit;
        transition: color 0.3s ease;

        &:hover {
            color: #0072b1; 
        }
    }

    @media (max-width: 768px) {
        gap: 15px;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

const Messageme = styled.div`
    flex: 1;
    max-width: 500px;

    input, textarea {
        width: 100%;
        padding: 15px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
        outline: none;
    }

    textarea {
        height: 120px;
        resize: none;
    }

    button {
        width: 100%;
        padding: 15px;
        background-color: #b31d1d;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #8e1717;
        }
    }
`;
