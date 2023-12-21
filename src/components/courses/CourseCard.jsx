import React from 'react'


function CourseCard(props) {
  const {title, lesson}  = props.item
  return (
    <div className='single-course'>
      <i className="ri-arrow-right-up-line float-end arrow"></i>
      <div className="course-details">
        <h3 className="course-title mb-4">{title}</h3>
        <h6 className="course-platform">Rapt 'N Rel</h6>
      </div>
      <p className='lesson d-flex align-items-center gap-1 mb-0'>
          {lesson}
      </p>
      <p className="d-flex align-items-center gap-1">
        <a href="#" className='see-more'>Learn</a>
      </p>
    </div>
  )
}

export default CourseCard