import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

// Importing images
import projectone from "../assets/png/projectone.png";
import projecttwo from "../assets/png/projecttwo.png";
import projectthree from "../assets/png/projectthree.png";
import projectfour from "../assets/png/projectfour.png";
import projectfive from "../assets/png/projectfive.png";
import pictureCode from "../assets/png/pictureCode.png";

const Projects = () => {
    const projects = [
        { image: projectone, description: "The super fast color palettes generator home page" },
        { image: projecttwo, description: "Kuda-Clone App E-commerce home page" },
        { image: projectthree, description: "Website for a booking service" },
        { image: projectfour, description: "All countries details website" },
        { image: projectfive, description: "Nexcent Landing Page" },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDescription, setCurrentDescription] = useState(projects[0].description);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
        setCurrentDescription(projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].description);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
        setCurrentDescription(projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1].description);
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setCurrentDescription(projects[index].description);
    };

    return (
        <Wrapper>
            <Workscont>
                <h1>Projects</h1>
                <Worksdetails>
                    <Detailswork>
                        <Workimage>
                            <Iconstyles onClick={handlePrev} as={IoIosArrowDropleftCircle} />
                            <SlideContainer>
                                <img
                                    src={projects[currentIndex].image}
                                    alt={`Project ${currentIndex + 1}`}
                                    onClick={() => handleImageClick(currentIndex)}
                                />
                                <Description>{currentDescription}</Description>
                            </SlideContainer>
                            <Iconstyles onClick={handleNext} as={IoIosArrowDroprightCircle} />
                        </Workimage>
                    </Detailswork>
                </Worksdetails>
            </Workscont>
        </Wrapper>
    );
};

export default Projects;

// Styled components
const Wrapper = styled.div`
    max-width: 1920px;
    height: auto;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${pictureCode});
    background-size: cover;
    border-radius: 30px 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Workscont = styled.div`
    max-width: 1280px;
    width: 85%;
    margin: 0 auto;

    h1 {
        text-align: center;
        color: tomato;
        font-size: 2.2rem;
        margin-bottom: 20px;
    }
`;

const Worksdetails = styled.div`
    text-align: center;
    margin-top: 50px;

    p {
        font-size: 26px;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-bottom: 40px;
        color: white;
        background-color: tomato;
        font-weight: 700;
    }
`;

const Detailswork = styled.div``;

const Workimage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Iconstyles = styled.div`
    font-size: 50px;
    cursor: pointer;
    color: #b31d1d;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const SlideContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    img {
        width: 100%;
        transition: transform 0.5s ease;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 300px;
    }

    @media (max-width: 480px) {
        width: 250px;
    }
`;

const Description = styled.p`
    margin-top: 25px;
    font-size: 18px;
    color: #333;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;
