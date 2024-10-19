import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { FamilyMember } from '../contentPosts';

const IntroEducation = () => {
  return (
    <Container className="text-center my-2 section section-lg">
      <h1 className="h2">Who are you ?</h1>
      <Row className="my-3">
        <Col lg="6" className="order-2 order-lg-1">
          <Fade left={true} duration={1500}>
            <DisplayLottie animationPath={'/lottie/teacher.json'} />
          </Fade>
        </Col>
        <Col lg="6" className="order-1 order-lg-2">
          <Fade right duration={1500}>
            <h3 className="h3 mb-2">{'Teacher'}</h3>
            <div className="d-flex justify-content-center flex-wrap mb-2">
              <Fragment>{`This tool will help you easily keep track of tests after you grade your students' assignments.`}</Fragment>
            </div>
          </Fade>
        </Col>
      </Row>
      <Row className="my-3">
        <Col lg="6" className="order-2 order-lg-1">
          <Fade left={true} duration={1500}>
            <DisplayLottie animationPath={'/lottie/student.json'} />
          </Fade>
        </Col>
        <Col lg="6" className="order-1 order-lg-2">
          <Fade right duration={1500}>
            <h3 className="h3 mb-2">{'Student'}</h3>
            <div className="d-flex justify-content-center flex-wrap mb-2">
              <Fragment>{`This tool will help you easily know whether your tests are accurate or not.`}</Fragment>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroEducation;
