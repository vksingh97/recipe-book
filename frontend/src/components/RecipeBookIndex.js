import React from 'react';
import styled from 'styled-components';
import RecipeBookHeader from './RecipeBookHeader';
import RecipeBookBody from './RecipeBookBody';
import RecipeBookFooter from './RecipeBookFooter';

const RecipeBookContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RecipeBookIndex = () => {
  return (
    <RecipeBookContainer>
      <RecipeBookHeader />
      <RecipeBookBody />
      <RecipeBookFooter />
    </RecipeBookContainer>
  );
};

export default RecipeBookIndex;
