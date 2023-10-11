import React from "react";
import aus from "../../../../images/studyAbroad/aus.jpg";

const Australia = () => {
  return (
    <div className="country">
      <div className="country-info">
        <h1 className="study-heading">Study Australia</h1>
        <p>
          Australia is a powerhouse of global education with fantastic long-term
          opportunities. The infrastructures, facilities, living environment,
          teaching methodologies and networking experiences are the reasons why
          studying in Australia has become so popular.{" "}
        </p>
      </div>
      <div className="why-study" id="why">
        <img src={aus} alt="" className="country-img" />
        <h2 className="why-head"> Why to Study in Australia ?</h2>
        <p className="desc">
          Moreover, the Australian government has been heavily involved in
          building a ‘truly internationalized’ education system that is driven
          by research to address the challenges of the future. Almost
          $200,000,000 per annum is invested by the Australian government purely
          on international scholarships. Additionally, the diverse range of
          courses offered by Australian Universities has resulted in Australia
          being the 3rd most popular destination for international students.
          Moreover, 7 of the Top 100 Universities in the World are in Australia.
          All these specialties of Australia makes students dream about their
          future in Australia.
        </p>
      </div>
      <div className="education-cost" id="cost">
        <h2 className="edu-head">Education Cost for Studying in Australia</h2>
        Cost of higher education in Canada is quite affordable as compared to
        the cost in the UK, Australia, New Zealand and the US. Here is details
        about tuition fee in Canada:
        <h5 className="tution-fee-head">Tuition Fee (AUD$):</h5>
        <ul>
          <li>Undergraduate Bachelor Degree :$15,000</li>
          <li>Postgraduate Master’s Degree : $10,000 to $16,000</li>
          <li>Accommodation (AUD$) : $3000 – $7500</li>
          <li>
            Minimum Living cost (AUD$) : $30,000 per annum (Average Total)
          </li>
        </ul>
        <p>
          Note: The average living cost for Canada may vary according to
          location, university and individual.
        </p>
      </div>
      <div className="scholorship" id="scholorship">
        <h2 className="head">Scholarships to Study in Canada</h2>
        <p className="desc">
          In order to capitalize on the available scholarships in Canada, we
          advise you to visit our offices as early as possible. We will provide
          you with complete information on the Canada scholarship process. If we
          find you eligible for any scholarships category, you will be granted
          with one.
        </p>
        <p className="desc">
          Students considering Canada as abroad study are recommended to begin
          the application procedure 8-12 months prior to the intake. Scholarship
          deadlines vary amongst institutions.
        </p>
        <p className="desc">
          <span className="scholor-span">Intakes</span>: January, May &
          September
        </p>
      </div>
      <div className="apply-wrapper" id="apply">
        <h2 className="head">How to apply for Australia?</h2>
        <p className="desc">
          To learn about the detailed description of admission process and get
          the equivalent advices regarding Study Process in Australia, students
          should first register themselves at Cambridge Institute of Technology.
          Shortly after the registration, students will be thoroughly guided
          through a number of key stages, maximizing their chances of getting
          admission at the University of their choice. Here is how the process
          goes:
        </p>
        <h5>Registration</h5>
        <p>
          First register yourself at Cambridge Institute of Technology to obtain
          the best quality advices and details.
        </p>
        <h5>Profiling</h5>
        <p>
          Secondly we will make an assessment of your personal information
          including academic qualifications, work experiences, financial status,
          career goals as well as life interests and aspirations.
        </p>
        <h5>Standardized Tests</h5>
        <p>
          After going through your profile, we evaluate the requirement of any
          standardized test that you might need to take or revise your results
          that has already been obtained.
        </p>
        <h5>University & Course Selection</h5>
        <p>
          Then, we list down all the potential universities and courses that
          matches your profile and interests.
        </p>
        <h5>Documentation and Editing</h5>
        <p>
          We go through your documentation, check and correct your writings
          including Statement of Purpose, Letters of Recommendation and Resume
          and forward it for next process.
        </p>
        <h5>Application Review and Submission</h5>
        <p>
          Your complete application forms are then revised and reviewed before
          being submitted to your final choice of universities.
        </p>
        <h5>Interview Preparation</h5>
        <p>
          We assist you for the preparation of your interview. All required
          tests and possible questions are provided to you in order to build
          confidence in you for your interview with your choice of university
          and courses.
        </p>
        <h5>Visa Counselling</h5>
        <p>
          We guide you through a step by step process for proper documentation
          before submission of visa application. We assist you from banking
          assistance to university enrollment process and help you make your way
          for abroad study.
        </p>
        <h5>Pre-Departure Information</h5>
        <p>
          We deliver comprehensive information about the country of your choice
          to ensure that you are completely prepared for a new life at an
          overseas university.
        </p>
      </div>
      <div className="requirements" id="requirements">
        <h2 className="requirements-head">
          Student Visa Requirements for Australia
        </h2>
        Here are the major lists of documents required while processing to
        Australia:
        <ul>
          <li>
            {" "}
            Attested copies of X, XII & Graduate Degree (if applicable), Mark
            Sheets including Backlogs (Resits){" "}
          </li>
          <li>
            Evidence of English Language proficiency tests e.g. IELTS, TOEFL,
          </li>
          <li>
            Standardized Tests e.g. GMAT, GRE (where necessary for the program)
          </li>
          <li>Two academic references</li>
          <li>Two references from employers (where applicable)</li>
          <li>Passport sized photographs</li>
          <li>Statement of Purpose (SOP)</li>
          <li> Resume/CV </li>
          <li>Draft for application fees (if applicable)</li>
          <li>Portfolio (for Art, Design & Architecture Courses)</li>
          <li>
            Other Certificates & Achievements of Extracurricular Activities
          </li>
        </ul>
        <p>
          {" "}
          Note: Documents required for individual universities and individual
          courses in Australia may vary. For more details about the Australia
          admissions process contact us at 01-4223815 | 4256776
        </p>
      </div>
    </div>
  );
};

export default Australia;
