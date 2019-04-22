import React, { Component } from 'react';
import Data from './Data';
import LaborPurpose from './LaborPurpose';
import Knowledge from './Knowledge';
import CoursesorDiplomas from './CoursesorDiplomas';
import WorkExperience from './WorkExperience';
import AcademicFormation from './AcademicFormation';
import PersonalData from './PersonalData';
import { Grid, Row, Col } from "react-flexbox-grid";

class CurriculumVitae extends Component {
  render() {
    return (
      <div className="wholeContainers">


      <Grid fluid>
      <Row>
        <Col xs={8}>

      <div className="space">
          <div className="leftContainer">
        <Data />
        <div className="textAlignLeft">
        <LaborPurpose />
        <AcademicFormation />

        <Knowledge />
        <CoursesorDiplomas />
        <WorkExperience />
          </div>
        </div>
      </div>

        </Col>

        <Col xs="4">
        <PersonalData></PersonalData>
        </Col>
      </Row>
      </Grid>
      </div>
    );
  }
}

export default CurriculumVitae;
