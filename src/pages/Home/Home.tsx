import React from 'react';
import { HeroSlider } from '../../components/sections/HeroSlider/HeroSlider';
import { WhoAreYou } from '../../components/sections/WhoAreYou/WhoAreYou';
import { Metrics } from '../../components/sections/Metrics/Metrics';
import { Funds } from '../../components/sections/Funds/Funds';
import { Partners } from '../../components/sections/Partners/Partners';
import { History } from '../../components/sections/History/History';

export const Home: React.FC = () => {
  return (
    <>
      <HeroSlider />
      <WhoAreYou />
      <Metrics />
      <Funds />
      <Partners />
      <History />
    </>
  );
};
