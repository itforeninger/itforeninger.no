import styled from 'styled-components';

interface RowWrapperProps {
  start: number;
  end: number;
  backgroundColor?: string;
}

const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  grid-column: ${(props) => props.start + '/' + (props.end + 1)};
  position: relative;

  ${(props) =>
    props.backgroundColor &&
    `
  &:before {
    z-index: -1;
    content: '';
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
    height: 100%;
    background:` +
      props.backgroundColor +
      `;
    position: absolute;
  }`};
`;

export default RowWrapper;
