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
                    to participate in a half marathon and then an Ironman!
                </p>

                <p> I got interested in Software Development because it is an amazing place
                to discover new things and challenge myself. My current role within Amazon is with the DEX Robotics
                team. This team works on the Amazon Scout, autonomous delivery vehicles. Scouts are making amazing headway into the last mile delivery experience for Amazon customers the world over. It has been so interesting being a part of the culture of Software Development and the
                amazing things technology is accomplishing! I decided to pursue a career in this field
                ultimately
                because there are
                so many fascinating directions and opportunities to pursue. I have gotten to learn even more since attending Coding Bootcamp at the University of Washington! It has opened up a whole new world of learning and connections with awesome people. Looking forward to growing and learning more with these skills and expanding my potential in the software development community to impact the world for the better!
            </p>
            

        </Wrapper>
        </>
    )
}
export default About;