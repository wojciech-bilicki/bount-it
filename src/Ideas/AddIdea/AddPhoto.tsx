import React from 'react';
import styled from 'styled-components';
import { ColorSet } from '../../Colors';

interface Props {
  variant?: "main";
}

const AddPhotoButton = styled.button`
  width: 100px;
  height: 100px;
  background: none;
  border: 1px dashed;
  border-radius: 15px;
  cursor: pointer;
`;

const AddPhotoWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  i {
    color: ${ColorSet.MAIN_PINK};
    background-color: ${props => props.variant === "main" ? ColorSet.LIGHT_PINK : "#F7C1BB"};
    border-radius: 50%;
  }

  p {
    font-size: 10px;
    text-align: center;

    color: ${props => props.variant === "main" ? ColorSet.MAIN_PINK : ColorSet.LIGHT_PINK};
  }

  ${AddPhotoButton} {
    border-color: ${props => props.variant === "main" ? ColorSet.MAIN_PINK : ColorSet.LIGHT_PINK};
  }

  &:hover {
    ${AddPhotoButton} {
      background-color: #FCE8E6; 
    }
  }
`;

const AddPhoto: React.FC<Props> = ({variant}: Props) => {

  return (
    <AddPhotoWrapper variant={variant}>
    <AddPhotoButton>
      <i className="material-icons">add</i>
    </AddPhotoButton>
    <p>{variant === "main" ? "Add main photo" : "Add photo"}</p>
    </AddPhotoWrapper>
  )

}

export default AddPhoto;