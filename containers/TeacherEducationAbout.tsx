import React, { Fragment, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import CreateNFT from '../components/CreateNFT';
const TeacherEducationAbout = () => {
  return (
    <>
      <Container className="text-center my-2 section section-lg">
        <Row className="my-3">
          <Col lg="12" className="order-1 order-lg-2">
            <CreateNFT />
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg="4" className="order-2 order-lg-1">
            <Fade left={true} duration={1500}>
              <DisplayLottie animationPath={'/lottie/checking.json'} />
            </Fade>
          </Col>
          <Col lg="8" className="order-1 order-lg-2">
            <Fade right duration={1500}>
              <h3 className="h3 mb-2">{'Checking'}</h3>
              <div className="d-flex justify-content-center flex-wrap mb-2">
                <Fragment>{`Be careful with your numbers`}</Fragment>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeacherEducationAbout;
