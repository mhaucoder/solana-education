import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { FamilyMember } from '../contentPosts';

const SildeDate = () => {
  return (
    FamilyMember && (
      <Container className="text-center my-2 section section-lg">
        <h1 className="h2">Bạn là ai trong những người dưới đây ?</h1>
        <p className="lead">Hãy xem thử bạn là ai nhé !</p>
        {FamilyMember.map((section, index) => {
          return (
            <Row className="my-3" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <Fade left duration={1500}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Fade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <Fade right duration={1500} >
                  <h3 className="h3 mb-2">{section.role}</h3>
                  <div className="d-flex justify-content-center align-items-center flex-wrap mb-2">
                    <Fragment>{section.wish}</Fragment>
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default SildeDate;
