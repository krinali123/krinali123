import React from 'react';

function Course({abc}) {
    return (
       <>
       <div>
     
           {/* <p>Course name:androwid</p> */}
           
           {
    abc === 'RW1' ? <p>Course:androwid</p>:<p>Course:NODEJS</p>
        }
      
       </div>
       </>
       
    );
}

export default Course;