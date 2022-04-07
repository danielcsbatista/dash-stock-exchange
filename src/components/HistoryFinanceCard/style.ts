import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 5px;
  margin: 10px;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 0px;
  width: 10px;
  height: 60%;
  background-color: ${(props) => props.color};
`;
