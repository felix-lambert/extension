import React from 'react';
import styled from 'styled-components';

import SuggestionsScreen, {
  SuggestionsScreenProps
} from '../../Settings/SuggestionsScreen/SuggestionsScreen';
import BullesLogo from 'components/atoms/LogoBeta';
import OnboardingButton from '../OnboardingAtoms/OnboardingButton';
import Intro from '../OnboardingAtoms/OnboardingIntro';
import SubTitle from '../OnboardingAtoms/OnboardingSubTitle';
import OnboardingSteps from '../OnboardingAtoms/OnboardingSteps/OnboardingSteps';
import LMEMToBulles from '../OnboardingAtoms/LMEMToBulles';

const Title = styled(SubTitle)`
  margin-top: 20px;
`;

const BottomLineBg = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  padding-top: 30px;
  text-align: center;
  background-color: #fafafa;
`;

const InfoLine = styled.p`
  margin: 0 0 16px;
  font-size: 17px;
  font-weight: bold;
  color: #ba1b1b;
`;

interface SubscribeScreenProps extends SuggestionsScreenProps {
  updatedFromLmem: boolean;
  nbSubscriptions: number;
  next: () => void;
}

export default ({
  updatedFromLmem,
  suggestions,
  subscribe,
  unsubscribe,
  nbSubscriptions,
  next
}: SubscribeScreenProps) => (
  <>
    <Intro>
      {updatedFromLmem ? <LMEMToBulles /> : <BullesLogo />}
      {updatedFromLmem && <OnboardingSteps activeStep={2} />}

      <Title>
        Choisissez vos contributeurs pour recevoir leurs messages durant votre
        navigation
      </Title>
    </Intro>

    <SuggestionsScreen
      suggestions={suggestions}
      subscribe={subscribe}
      unsubscribe={unsubscribe}
    />

    <BottomLineBg>
      {nbSubscriptions === 0 && (
        <InfoLine>Choisir au minimum 1 contributeur</InfoLine>
      )}
      <OnboardingButton disabled={nbSubscriptions === 0} onClick={next}>
        Terminer
      </OnboardingButton>
    </BottomLineBg>
  </>
);