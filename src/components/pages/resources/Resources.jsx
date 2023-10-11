import { Accordion } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import banner from "../../../images/resources/banner.jpg";
import FAQ from "./Accordion";
import OtherBanner from "../../forAll/OtherBanner";

const Resources = () => {
  const { resourcesSlug } = useParams();

  const x = () => {
    if (resourcesSlug === "faq") {
      return <FAQ />;
    } else if (resourcesSlug === "sop") {
      return (
        <div className="sop">
          <h1 className="sop-title">SOP- Statement Of Purpose</h1>
          <h2 className="sop-sub-title">Guidelines</h2>
          <div className="introduction">
            <div className="question">1. Introduction</div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ This paragraph encompasses your self-definition, personal
                background, including your origin, and information about your
                family connections.
              </li>
              <li className="list">
                ✔ This paragraph encompasses your self-definition, personal
                background, including your origin, and information about your
                family connections.
              </li>
            </ul>
          </div>
          <div className="qualifications">
            <div className="question">2. Academic Qualifications</div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ Students should compose their academic achievements,
                prioritizing a chronological sequence to facilitate clarity and
                identify any study gaps. In the event of such gaps, it is
                imperative to provide a clear explanation of activities
                undertaken during those intervals.
              </li>
            </ul>
          </div>
          <div>
            <div className="question">
              3. IELTS / Work Experience / Internships
            </div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ This information can alternatively be included in the
                preceding paragraph, as these gaps can be explained by these
                factors. It is advisable for students to provide a comprehensive
                description of their job roles, including the company name and
                their specific responsibilities during their job or internship
                experiences if applicable.
              </li>
              <li className="list">
                ✔ If there is an English for Academic Purposes (EAP) Program
                offered, it is crucial to outline the merits of this program in
                separate paragraphs, emphasizing its importance as a preliminary
                stage before embarking on the main course of study.
              </li>
            </ul>
          </div>
          <div className="question">4. Why choose this course?</div>
          <ul className="list-wrapper">
            <li className="list"> ✔ Intrest on the Course </li>
            <li className="list"> ✔ Career Outcomes</li>
            <li className="list">
              ✔ What do you expect to learn from this course{" "}
            </li>
            <li className="list">
              ✔ Why not in Nepal or any other destination and why Australia?{" "}
            </li>
            <li className="list">
              ✔ It is better if the student first visits the website of the
              university. It is clearly written on their website
            </li>
          </ul>
          <div>
            <h4 className="question">5. Why you choose Australia?</h4>
            <div className="question">
              6. Why did you choose this university or College?
            </div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ Assessing the university and college against a minimum of five
                other educational institutions with regard to tuition fees,
                available courses or specializations, geographical location,
                class sizes, language prerequisites, and additional factors.
              </li>
            </ul>
          </div>
          <div>
            <div className="question">7. Future career and Plans</div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ In this section, you are required to outline your aspirations
                and plans following the completion of your studies in Australia.
                You may discuss your desire to acquire work experience through
                internships during the Post Study Visa Period, but it's
                important not to indicate any intention of remaining in
                Australia solely for employment purposes. Describing your
                post-study goals is a critical aspect of your application.
                Expressing a clear intention to return to your home country with
                valid reasons is highly favorable, and it's essential for
                students not to overlook this point.
              </li>
              <li className="list">
                ✔ Additionally, ensure that you have some understanding of the
                Government of Nepal's perspective on your selected field,
                including potential upcoming projects, investments, and their
                overall approach. Explain how you can become involved in these
                projects, using the knowledge and skills you acquire in
                Australia to make a meaningful contribution to your community.
              </li>
              <li className="list">
                ✔ Make sure that obtaining a qualification while gaining work
                experience in Australia also enhances your communication skills,
                making you a more suitable candidate for high-paying jobs in
                Nepal upon your return. Your investment in education in
                Australia is bound to yield lifelong rewards, fostering
                qualities such as confidence, creativity, and a strong work
                ethic during your study stay in the country.
              </li>
            </ul>
          </div>
          <div>
            <div className="question">8. Sponsors</div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ Could you please provide details about your financial plan to
                fund your education and living expenses in Australia?
                Specifically, identify your sponsors, typically, which are your
                parents.{" "}
              </li>
              <li className="list">
                {" "}
                ✔ Demonstrate strong reasons to come back to home country
                through datas and research on your field; Governmment plans and
                policies in your respective field,similarly initiatives of NGO,
                INGO as well.
              </li>
            </ul>
          </div>
          <div className="list-wrapper">
            <div className="question">
              9. Reasons to come back Home country Nepal
            </div>
            <ul className="list-wrapper">
              <li className="list">
                Explain the bond of family and relatives, property inheritance,
                cultural and social values of family and society and reasons to
                come back to your loved ones
              </li>
            </ul>
          </div>
          <div>
            <div className="question">10. Visa Conditions</div>
            <ul className="list-wrapper">
              <li className="list">
                ✔ As an international student, it is crucial to have a clear
                understanding of specific visa responsibilities associated with
                the Student Visa Subclass 500. In your own words, outline and
                describe these visa obligations.
              </li>
              <li className="list">
                ✔ Expressing gratitude to the visa office for their time and
                thoughtful consideration has consistently been a significant
                element of a Statement of Purpose (SOP). Extend a warm greeting
                and convey your sincere appreciation to the visa officer.
                Additionally, in concluding your SOP, you may politely request
                their favorable decision to grant you the visa, which would
                enable you to pursue your studies, thereby establishing a
                further connection.
              </li>
            </ul>
          </div>
          <div>
            <div className="question">11. Conclusion</div>
            <ul className="list-wrapper">
              <li className="list"></li>
              <li className="list"></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="interview">
          <h1 className="interview-title">Possible Interview Questions</h1>
          <div>
            <h4 className="guide-title">Top Interview Questions</h4>
            <ul className="list-wrapper">
              <li className="list">
                ✔ Why did you choose this University/Instituion for your further
                studies?
              </li>
              <li className="list">✔ Why do you want to go to this country?</li>
              <li className="list">✔ How long will you be staying?</li>
              <li className="list">✔ Where will you be staying?</li>
              <li className="list">
                ✔ What do you intend to do after your studies?
              </li>
              <li className="list">
                ✔ Do you have any relatives in the (Country)?
              </li>
              <li className="list">✔ Do you have a family?</li>
              <li className="list">
                ✔ Who is sponsoring you? Why is he/ she sponsoring you?
              </li>
              <li className="list">
                ✔ What program of study are you going for?
              </li>
              <li className="list">✔ What is the scope of your program?</li>
              <li className="list">
                ✔ How is your past education relevant for your intended course?
              </li>
              <li className="list">✔ What are your Future Plans?</li>
            </ul>
          </div>
          <div>
            <h4 className="guide-title">Keys for the Successful Interviews </h4>
            <ul className="list-wrapper">
              <li className="list">✔ Confidence</li>
              <li className="list">✔ Clear voice</li>
              <li className="list">
                ✔ When addressing questions, it is important to provide
                comprehensive responses that go beyond simple "yes" or "no"
                answers. Instead, offer explanations by including the word
                "because" to provide a more thorough and informative reply.
              </li>
              <li className="list">
                ✔ Stay in a quiet place at the time of telephone interview
              </li>
              <li className="list">
                ✔ Thoroughly acquaint yourself with the contents of your offer
                letter and all accompanying documents, paying special attention
                to details related to financial matters.
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="resources">
      <OtherBanner bannerImg={banner && banner} />
      <div className="content">{x()}</div>
    </div>
  );
};

export default Resources;
