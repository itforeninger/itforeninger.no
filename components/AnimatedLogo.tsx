import React from 'react';
import styled from 'styled-components';

const LogoStyling = styled.div`
  .FIF-word {
    margin: auto;
  }

  /* F-one Animation */

  .F-one-down-stroke {
    stroke-dasharray: 180px;
    stroke-dashoffset: 180px;
    animation: F-one-down-move 10s ease forwards;
  }

  .F-one-mid-stroke {
    stroke-dasharray: 150px;
    stroke-dashoffset: 150px;
    animation: F-one-mid-move 20s ease forwards;
  }

  .F-one-top-stroke {
    stroke-dasharray: 150px;
    stroke-dashoffset: 150px;
    animation: F-one-top-move 10s ease forwards;
  }

  @keyframes F-one-down-move {
    0% {
      stroke-dashoffset: 180px;
    }
    2% {
      stroke-dashoffset: 180px;
    }
    20% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes F-one-mid-move {
    0% {
      stroke-dashoffset: 150px;
    }
    6% {
      stroke-dashoffset: 150px;
    }
    20% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes F-one-top-move {
    0% {
      stroke-dashoffset: 150px;
    }
    8% {
      stroke-dashoffset: 150px;
    }
    25% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  /* L One Animation */

  .I-down-stroke {
    stroke-dasharray: 180px;
    stroke-dashoffset: 180px;
    animation: I-down-move 10s ease forwards;
  }

  @keyframes I-down-move {
    0% {
      stroke-dashoffset: 180px;
    }
    2% {
      stroke-dashoffset: 180px;
    }
    20% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  /* F-one Animation */

  .F-two-down-stroke {
    stroke-dasharray: 180px;
    stroke-dashoffset: 180px;
    animation: F-one-down-move 10s ease forwards;
  }

  .F-two-mid-stroke {
    stroke-dasharray: 150px;
    stroke-dashoffset: 150px;
    animation: F-two-mid-move 20s ease forwards;
  }

  .F-two-top-stroke {
    stroke-dasharray: 150px;
    stroke-dashoffset: 150px;
    animation: F-two-top-move 10s ease forwards;
  }

  @keyframes F-two-down-move {
    0% {
      stroke-dashoffset: 180px;
    }
    2% {
      stroke-dashoffset: 180px;
    }
    20% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes F-two-mid-move {
    0% {
      stroke-dashoffset: 150px;
    }
    6% {
      stroke-dashoffset: 150px;
    }
    20% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes F-two-top-move {
    0% {
      stroke-dashoffset: 150px;
    }
    8% {
      stroke-dashoffset: 150px;
    }
    25% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
`;

const AnimatedLogo = () => {
  return (
    <LogoStyling>
      <svg className="FIF-word" width="400" height="400" viewBox="0 0 400 400">
        <g id="F-one-letter">
          <line
            className="F-one-mid-stroke"
            x1="10"
            y1="70"
            x2="95"
            y2="100"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
          <line
            className="F-white-stroke"
            x1="50"
            y1="0"
            x2="50"
            y2="124"
            stroke="#fff"
            fill="none"
            strokeWidth="45"
          />
          <line
            className="F-one-down-stroke"
            x1="50"
            y1="0"
            x2="50"
            y2="180"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
          <line
            className="F-one-top-stroke"
            x1="50"
            y1="15"
            x2="150"
            y2="15"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
        </g>

        <g id="I-letter">
          <line
            className="I-down-stroke"
            x1="195"
            y1="0"
            x2="195"
            y2="180"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
        </g>

        <g id="F-two-letter">
          <line
            className="F-two-mid-stroke"
            x1="240"
            y1="70"
            x2="325"
            y2="100"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
          <line
            className="F-white-stroke"
            x1="280"
            y1="0"
            x2="280"
            y2="124"
            stroke="#FFFFFF"
            fill="none"
            strokeWidth="45"
          />
          <line
            className="F-two-down-stroke"
            x1="280"
            y1="0"
            x2="280"
            y2="180"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
          <line
            className="F-two-top-stroke"
            x1="280"
            y1="15"
            x2="380"
            y2="15"
            stroke="#246C5E"
            fill="none"
            strokeWidth="30"
          />
        </g>
      </svg>
    </LogoStyling>
  );
};

export default AnimatedLogo;
