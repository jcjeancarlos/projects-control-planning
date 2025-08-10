import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";
import Budget from "./Budget";

function Project() {
return (  
  <div className='Project'>
    <h1>Project planning</h1>
    < ProjectName />
    < ProjectDescription />
    < Budget />
  </div>
)
}

export default Project;