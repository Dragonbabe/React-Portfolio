import React from 'react';
import '../styles/about.css';
import Gigi from '../assets/Gigi.my.love (2).jpg';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';


function About() {
    return (
        <>
        <Header message={"Welcome To My Portfolio"}/>
        <Wrapper>
            
                <h2 className="about">About Me</h2>

                <img src={Gigi} alt="Gigi my love" style={{width: "100%"}}></img>

                <p>
                    My name is Esther Walker. Some of my favorite hobbies are horse-back riding, hiking,
                    backpacking and climbing. Living in the Pacific Northwest affords many
                    opportunities to enjoy the outdoors until my heart is content! I also enjoy
                    running Spartan races and I completed my first Trifecta in 2019, a combination of the Spartan
                    Sprint with 4+ miles of
                    obstacle racing, 20+ obstacles, the Spartan Super with 8+ miles, 25+ obstacles, and the Spartan Beast
                    with 13+
                    miles, 30+ obstacles. I have goals
                    to participate in a half marathon at the end of 2020 and then participate
                    in an an Ironman in 2021!
                </p>

                <p> I got interested in Software Development because it is an amazing place
                to discover new things and challenge myself. In April of this year I started working at Amazon
                with
                the Dex Robotics
                program. It has been so interesting being a part of the culture of Software Development and the
                amazing things technology is accomplishing! I decided to pursue a career in this field
                ultimately
                because there are
                so many fascinating directions and opportunities to pursue! I have only gotten a taste of it in
                my
                new position at Amazon, and I have gotten to learn even more since I started my education with
                the
                UW Coding Bootcamp! It is very exciting and I am ectstatic to be learning more.
            </p>
            

        </Wrapper>
        </>
    )
}
export default About;