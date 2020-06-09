import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { CardBlurb, CardContainer, CardContent, CardTitle, ProjectCardAction } from './styles/card-defaults';

interface props {
  title: string;
  description: string;
  link: string;
  image?: FluidObject;
}

const CauseCard: React.FC<props> = ({ title, description, image }) => {
  return (
    <CardContainer to="/projects" state={{ defaultFilter: title }}>
      <CardContent>
        <CardTitle>
          {title}
        </CardTitle>
        <CardBlurb>
          {description}
        </CardBlurb>
        <ProjectCardAction className="ProjectCardAction">
          See all Projects <span>&#8594;</span>
        </ProjectCardAction>
      </CardContent>
      {
        image ?
          <Img fluid={image} alt="Post Image"/> :
          null
      }
    </CardContainer>
  );
};

export default CauseCard;
