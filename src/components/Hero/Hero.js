import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm a passionate and dedicated fullstack web developer. I like to build the frontend with special animation and interactivity. And I also like to think about the ingenious mechanisms of the backend. Rigorous, voluntary, meticulous and perfectionist with a taste for initiative and challenge, I like to work independently and in a team.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;