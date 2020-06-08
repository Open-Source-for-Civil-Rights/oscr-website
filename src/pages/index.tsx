import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Banner = styled.div`
    padding-top: 2.5em;
    padding-bottom: 3em;
    max-width: 830px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;
        font-weight: bold;

        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;

            &:nth-of-type(1) { color: ${colors.blue500}; }
            &:nth-of-type(2) { color: ${colors.orange500}; }
            &:nth-of-type(3) { color: ${colors.purple500}; }
            &:nth-of-type(4) { color: ${colors.green500}; }
            &:nth-of-type(5) { color: ${colors.teal500}; }

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                &:nth-of-type(1) { color: ${colors.blue600};    background-color: ${colors.blue200};}
                &:nth-of-type(2) { color: ${colors.orange600};  background-color: ${colors.orange200};}
                &:nth-of-type(3) { color: ${colors.purple600};  background-color: ${colors.purple200};}
                &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
                &:nth-of-type(5) { color: ${colors.teal600};    background-color: ${colors.teal200};}

            }
        }
    }
`;

const IndexLayout: React.FC = () => {
  return (
    <Layout>
      <Helmet/>
      <Banner>
        <h1>
          The Open Source for Civil Rights (OSCR) organization is dedicated to supporting <Link to="/supported-causes">Civil Rights </Link>
          by developing
          <a href="https://opensource.org/osd"> open source </a>
          software applications to demand <Link to="/projects">political change</Link>.
        </h1>
      </Banner>
      <section>
        <h2>The Impact of Technology on Civil Rights</h2>
        <p>We recognize that the use of technology can either hurt or help any movement towards justice and peace. By harnessing the power of the internet,
          technology can make social movements explode, and empower more people to do what is right. OSCR exists to unify open source developers to create and maintain
          software applications that help social justice causes, from LGTBQ rights to the BLM movement.
        </p>
        <h2>Creating a Vibrant Open Source Community for Civil Rights</h2>
        <p>The open source community thrives in the world of software development, where developers come together to create and maintain frameworks for the benefit of the community.
          Open Source means that software is freely available for anyone to use or edit, free of charge. Open source projects have the potential to open up countless avenues to demand
          justice in various movements with strategically designed applications to maximize the impact of the individual.
        </p>
        <p>
          For example, signing/sending a letter or creating a customized petition can be made easier with a well-designed website. Take it a step further, this process can be
          streamlined further by making it so you <b> only have to text a phone number</b> and a petition will be customized, signed, and delivered according
          to your location and personal information. That's the power of open source software.
        </p>
        <h2>Our Goal</h2>
        <p>
          OSCR was created to unify developers to a central point of contact for contributing to open source software applications that benefit civil rights movements.
          By creating a central access point for hundreds of projects spread across the globe, developers are empowered to contribute to more projects, and benefit the community.
        </p>
      </section>
    </Layout>
  );
};

export default IndexLayout;
