import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { KeyFeatureType } from '../types/sections';
import Fade from 'react-reveal/Fade';

const KeyFeaturesCard = ({ title, desc, descBullets }: KeyFeatureType) => {
  return (
    <Fade left={true} duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{title}</h5>
              <p className="description mt-3">{desc}</p>
              <ul>
                {descBullets
                  ? descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default KeyFeaturesCard;
