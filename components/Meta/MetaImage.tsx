import React from 'react';

import { CANONICAL_LOGO } from '../../constants/about';

export const MetaImage = () => {
  return (
    <>
      <meta property="og:image:url" content={CANONICAL_LOGO} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="840" />
      <meta property="og:image:alt" content="FIF logo" />
    </>
  );
};
