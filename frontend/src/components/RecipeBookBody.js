import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const RecipeBookBodyContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const RecipeBookChatBox = styled.div`
  height: 90%;
  overflow: auto;
`;
const RecipeBookInput = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
`;
const RecipeBookInputBox = styled.input`
  width: 80%;
`;
const RecipeBookSubmitButton = styled.button`
  width: 20%;
`;
const RecipeBookResponse = styled.p``;
const RecipeBookResponseImage = styled.img``;
const RecipeBookImageContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
`;
const RecipeBookResponseContainer = styled.div`
  margin: 30px;
`;
const FavouriteButton = styled.img`
  width: 30px;
  heigh: 30px;
  cursor: pointer;
`;
const FavouriteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
`;

const chatGptInstance = axios.create({
  baseURL: 'http://localhost:6001/',
});

const RecipeBookBody = () => {
  const [inputValue, setInputValue] = useState('');
  const [recipeResponse, setRecipeResponse] = useState('');
  const [recipeImage, setRecipeImage] = useState(null);
  const [markedFavourite, setMarkedFavourite] = useState(false);

  const handleInputPrompt = async (inputValue) => {
    const test = await chatGptInstance
      .post('/v1/ask-chatgpt', {
        prompt: inputValue,
      })
      .then((response) => {
        console.log('check response pls', response.data);
        setRecipeResponse(response.data.data.promptResponse);
        setRecipeImage(response.data.data.imageUrl);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log('test', test);
  };
  return (
    <RecipeBookBodyContainer>
      <RecipeBookChatBox>
        {recipeResponse !== '' && (
          <FavouriteButtonContainer>
            <FavouriteButton
              src={
                markedFavourite
                  ? '/icons/filledStar.png'
                  : '/icons/blankStar.png'
              }
              onClick={() => setMarkedFavourite(!markedFavourite)}
            ></FavouriteButton>
          </FavouriteButtonContainer>
        )}
        <RecipeBookResponseContainer>
          <RecipeBookResponse>{recipeResponse}</RecipeBookResponse>
        </RecipeBookResponseContainer>
        <RecipeBookImageContainer>
          {recipeImage && (
            <RecipeBookResponseImage
              src={recipeImage}
              alt='recipe'
            ></RecipeBookResponseImage>
          )}
        </RecipeBookImageContainer>
      </RecipeBookChatBox>
      <RecipeBookInput>
        <RecipeBookInputBox
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></RecipeBookInputBox>
        <RecipeBookSubmitButton
          onClick={(e) => {
            e.preventDefault();
            handleInputPrompt(inputValue);
          }}
        >
          Find Recipe
        </RecipeBookSubmitButton>
      </RecipeBookInput>
    </RecipeBookBodyContainer>
  );
};

export default RecipeBookBody;
