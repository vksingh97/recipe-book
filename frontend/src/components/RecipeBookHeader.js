import React from 'react';
import styled from 'styled-components';

const RecipeBookHeaderContainer = styled.div`
  height: 10%;
  background-color: grey;
`;

const RecipeBookHeader = () => {
  return <RecipeBookHeaderContainer>Recipe Book</RecipeBookHeaderContainer>;
};

export default RecipeBookHeader;
