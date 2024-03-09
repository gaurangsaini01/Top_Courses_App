import React, { useState } from 'react'
import Card from './Card'
const Cards = ({course,category}) => {

  const[likedCourses,setLikedCourses] = useState([]);

 

  function getCourse(){
    if(category == 'All'){
      let allCourse = [];
      Object.values(course).forEach((courseCategory)=>{
        Object.values(courseCategory).forEach((item)=>{
          allCourse.push(item);
        })
      })
      console.log(allCourse)
      return allCourse;
    }
    else{
      return course[category];
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-6 lg:gap-4 mb-4'>
        {getCourse().map((course)=>{
          return (
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
          )
        })}
    </div>
  )
}

export default Cards