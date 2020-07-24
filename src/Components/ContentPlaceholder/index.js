/**
*
* ContentPlaceholder
*
*/

import styled from "styled-components";

export default styled.div`
  @keyframes placeHolderShimmer {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.75;
    }
    50% {
      opacity: 0.20;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }

  animation: placeHolderShimmer 2s infinite linear;
`;
