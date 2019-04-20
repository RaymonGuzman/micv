import React, {Component} from 'react';
import Data from './Data';
import LaborPurpose from './LaborPurpose';
import Knowledge from './Knowledge';
import Computers from './Knowledge/Computers';
import Languages from './Knowledge/Language';
import CoursesorDiplomas from './CoursesorDiplomas';
import  WorkExperience from './WorkExperience';
import AcademicFormation from './AcademicFormation';

class CurriculumVitae extends  Component{
render() {
    return(
<div>
<Data></Data>
<LaborPurpose></LaborPurpose>
<AcademicFormation></AcademicFormation>
<Knowledge></Knowledge>
<Computers></Computers>
<Languages></Languages>
<CoursesorDiplomas></CoursesorDiplomas>
<WorkExperience></WorkExperience>


</div>);
}
};

export default CurriculumVitae;