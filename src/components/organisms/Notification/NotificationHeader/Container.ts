import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  max-height: 32px;
  padding-right: 10px;
  padding-left: 12px;
  border-bottom: 1px solid #a6b1c0;
  background-color: ${props => props.theme.accountListBg};
`;
