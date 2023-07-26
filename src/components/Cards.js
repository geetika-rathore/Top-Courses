import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  const courses = props.courses ?? {}; // Provide an empty object as a default value if courses prop is undefined
  const category = props.category ?? "All"; // Provide "All" as a default category if category prop is undefined
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses(courses, category) {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } 

    else {
      return courses[category] || []; // Return an empty array if the category is not found
    }
    if (!courses || !category) {
      return <div>No courses to display.</div>;
    }
  }
  // Handle cases where courses or category might be undefined
  const filterCourse = getCourses(courses, category);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {filterCourse.map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
