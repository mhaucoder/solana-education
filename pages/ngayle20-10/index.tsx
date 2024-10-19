import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../../components/Navigation'));
const Date20_10 = dynamic(() => import('../../containers/Date20-10'));
import SEO from '../../components/SEO';

import SildeDate from '../../containers/SildeDate20-10';
import { Card, Col, Container, Row } from 'reactstrap';
import SocialLinks from '../../components/SocialLinks';

export default function getPromt() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Date20_10 />
      <SildeDate />
      <Card className="section-lg bg-gradient-dark shadow-lg border-0 p-0">
        <Container>
          <Row className="p-2">
            <Col lg="8" className="order-lg-1">
              <h3 className="text-white mt-3">Solana Education</h3>
              <p className="text-white mt-3">
                Lời thoại và phát triển : Nguyễn Minh Hậu
              </p>
            </Col>
            <Col className="order-lg-2" lg="4">
              <div className="mt-3">
                <SocialLinks />
              </div>
              <p className="text-white mt-3">
                Copyright by Solana Education © 2023
              </p>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
