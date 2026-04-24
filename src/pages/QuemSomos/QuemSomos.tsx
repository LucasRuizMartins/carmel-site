import React from 'react';
import { QuemSomosIntro } from '../../components/sections/QuemSomosIntro/QuemSomosIntro';
import { Founders } from '../../components/sections/Founders/Founders';
import { DetailedHistory } from '../../components/sections/DetailedHistory/DetailedHistory';
import { Metrics } from '../../components/sections/Metrics/Metrics';
import { InstitutionalDocuments } from '../../components/sections/InstitutionalDocuments/InstitutionalDocuments';
import { Governance } from '../../components/sections/Governance/governance';

export const QuemSomos: React.FC = () => {
  return (
    <>
      <QuemSomosIntro />
      <Founders />
      <DetailedHistory />
      <Metrics />
      <Governance />
      <InstitutionalDocuments />

    </>
  );
};
