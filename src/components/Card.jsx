import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
const Card = ({course,likedCourses,setLikedCourses}) => {

    let substr = course.description.substring(0,150);
    function btnHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses(likedCourses.filter(id => id !== course.id));
            toast.warning('Like Removed');
        }
        else{
            setLikedCourses([...likedCourses,course.id]);
                toast.success('Liked Successfully');
        }
    }

  return (
    <div className='w-[300px] rounded-md bg-opacity-80 bg-[#1a2030] text-white overflow-hidden p-3'>
        <div className='relative'>
            <img className='rounded-md' src ={course.image.url} alt="" />
            <div className='w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center absolute right-1 bottom-1'>
                <button onClick={btnHandler}>
                    {
                        likedCourses.includes(course.id) ?  (<FcLike></FcLike>) : (<FcLikePlaceholder></FcLikePlaceholder>)
                    }
                </button>
            </div>
        </div>

        <div>
            <p className='font-bold text- py-2 text-white'>{course.title}</p>
            <p className=' text-gray-300 leading-6'>{substr}...</p>
        </div>
    </div>
  )
}

export default Card