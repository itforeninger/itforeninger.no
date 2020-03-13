import styled from 'styled-components';

interface RowWrapperProps {
  start: number;
  end: number;
  backgroundColor?: string;
}

const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => props.start + '/' + (props.end + 1)};

  ${(props) =>
    props.backgroundColor &&
    `
  &:before {
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    background:` +
      props.backgroundColor +
      `;
    position: absolute;
  }`};
`;

export default RowWrapper;
