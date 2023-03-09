import React from "react";
import "./main.css";
import logo from "../../images/2205_w046_n004_121a_p1_121 1.png";
import stars from "../../images/stars.png";
import arrow from "../../images/arrow.png";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import skill1 from "../../images/skill1.png";
import skill2 from "../../images/skill2.png";
import skill3 from "../../images/skill3.png";
import skill4 from "../../images/skill4.png";
import CustomizedAccordions from "./Accordian";

const Main = () => {
  return (
    <div className="main">
      <div>
        <div className="section-1" id="home">
          <img className="pic-1" src={logo} alt="pic-1" />

          <div className="section-1-1">
            <h3>EETI Foundation</h3>

            <div className="section-1-container">
              <h1 className="Campus">
                Campus{" "}
                <span>
                  <img src={stars} alt="" />
                </span>
                <br /> Communities
              </h1>
              <div className="reg">
                <a href="">
                  <div className="reg-con">
                    <p className="register">Register Now</p>
                    <button>
                      <img className="arrow" src={arrow} alt="" />
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="about" id="about">
          <div className="about-1">
            <h2>About EETI Foundation</h2>
            <div className="about-container about-cntnr1">
              <div className="about-description">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus nam ea, aliquam totam adipisci perspiciatis eligendi
                  facilis suscipit excepturi voluptatem! Vel tempora voluptatem,
                  odit sint dolore iusto corporis aliquam obcaecati nulla nam
                  praesentium ipsam animi excepturi temporibus consectetur
                  repellat commodi similique, odio accusamus laboriosam? Odio
                  quia assumenda praesentium animi quidem!
                </p>
              </div>
              <div className="img-about">
                <img src={about1} alt="" className="m-hide" />
              </div>
            </div>
          </div>

          <div className="about-2">
            <h2>What are campus communities?</h2>
            <div className="about-container">
              <div className="img-about">
                <img src={about2} alt="" className="m-hide" />
              </div>
              <div className="about-description">
                <p>
                  Campus communities is a programme encouraging a tech learning
                  culture on campuses so that students can grow their abilities
                  and further their careers. Campus communities will help
                  college students who don't think they're getting enough
                  exposure to technology or don't have the ideal environment to
                  study it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="for-you" id="benefits">
          <h2>What's in it for you?</h2>
          <div className="you-container">
            <div className="skill">
              <h2 className="heading">
                Skill Development{" "}
                <span>
                  <img className="skill-img" src={skill2} alt="" />
                </span>
              </h2>
              <p>
                Improve your communication and management skills by being a part
                of the largest student network in the nation
              </p>
            </div>

            <div className="skill">
              <h2 className="heading">
                Organize Events{" "}
                <span>
                  <img className="skill-img" src={skill2} alt="" />
                </span>
              </h2>
              <p>
                Get a chance to conduct events in your college in collaboration
                with the EETI Foundation
              </p>
            </div>

            <div className="skill">
              <h2 className="heading">
                Get verified
                <span>
                  <img className="skill-img" src={skill3} alt="" />
                </span>
              </h2>
              <p>
                Get a certificate of appreciation from The EETI Chairperson on
                successfully completing the tenure
              </p>
            </div>

            <div className="skill">
              <h2 className="heading">
                Get Prizes
                <span>
                  <img className="skill-img" src={skill4} alt="" />
                </span>
              </h2>
              <p>Get Prizes and Goodies</p>
            </div>
          </div>
        </div>

        <div className="faq" id="faq">
          <h2>Frequently Asked Questions</h2>
          <CustomizedAccordions />
        </div>
      </div>
    </div>
  );
};

export default Main;
