import React from "react";
import CourseCard from "./CourseCard";
import img2 from "../../../../images/course/ieltss.png";
import img1 from "../../../../images/course/ptee.jpg";
// import img3 from "../../../../images/course/sat.jpeg";
// import bgImg from "../../../../images/course/bg.jpg";

const Courses = () => {
  const coursesDetails = [
    {
      id: 0,
      courseName: "PTE",
      desc: "Our aim at Cambridge Institute of Technology is to help our students achieve success in the Pearson Test of English or PTE.",
      courseImg: img1,
      path: "pte",
    },
    {
      id: 1,
      courseName: "IELTS",
      desc: "IELTS (International English Language Testing System) is a globally recognized English language proficiency exam used for academic and immigration purposes.",
      courseImg: img2,
      path: "ielts",
    },
    // {
    //   id: 2,
    //   courseName: "SAT",
    //   desc: "SAT is a standardised exam that tests high school students for their knowledge in areas of reading, analytical skills and mathematical prowess.",
    //   courseImg: img3,
    // },
  ];

  const cards =
    coursesDetails &&
    coursesDetails.map((item) => {
      return <CourseCard cardDetail={item && item} key={item.id} />;
    });

  return (
    <div className="courses">
      <div className="in-wrapper">
        <div className="h-course">
          <h1 className="heading">Our Latest Courses</h1>
          <p className="course-desc">
            We deliver advanced-level classes conducted by subject-matter
            experts who are professionals in their fields.
          </p>
        </div>
        {/* <div className="h-cards"> */}
        <div className="cards-wrapper" data-aos="flip-left">
          {cards && cards}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Courses;
