import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Text = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;