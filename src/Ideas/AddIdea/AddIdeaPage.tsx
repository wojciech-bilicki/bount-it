import React from 'react';
import styled from 'styled-components';
import { ColorSet } from '../../Colors';
import Layout from '../../Navigation/Layout';
import { useIdeaModel } from './addIdea.hooks';
import AddPhoto from './AddPhoto';
import CustomSelect from './CustomSelect';


const Header = styled.h3`
  color: ${ColorSet.LIGHT_PINK};
  font-style: italic;
`;

const AddIdeaWrapper = styled.div`
  margin: 8px 32px 64px;
`;

const Column = styled.div`
  flex: 40%;
  flex-direction: column;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;


const TwoColumnForm = styled.form`
  display: flex;

  ${Column}:first-child {
    margin-right: 10%;
  }
`;


const TitleInput = styled.input`
  border: none;
  border-bottom: 1px solid ${ColorSet.LIGHT_PINK};
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  color: ${ColorSet.LIGHT_PINK};
  outline: none;
  margin-bottom: 16px;
  
  &::placeholder {
    color: ${ColorSet.LIGHT_PINK};
  }
`;

const DescriptionTextArea = styled.textarea`
  border: 1px solid ${ColorSet.LIGHT_PINK};
  border-radius: 16px;
  min-height: 250px;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  color: ${ColorSet.LIGHT_PINK};
  padding: 16px;
  ::placeholder {
    color: ${ColorSet.LIGHT_PINK};
  }
`;

const AddIdeaPage = () => {
  const { inputProps, onSubmit } = useIdeaModel();
  return (
    <Layout>
      <AddIdeaWrapper>
      <Header>Let's start! Create your first pong!</Header>
      <TwoColumnForm  onSubmit={onSubmit}>
        <Column>
        <TitleInput placeholder="Add an incredible TITLE!" name="idea" {...inputProps.idea} />

        <DescriptionTextArea placeholder="Tell us about your idea!" name="description" {...inputProps.description} />
        <Row>
          <AddPhoto variant="main"/>
          <AddPhoto />
          <AddPhoto />
        </Row>
        </Column>
      <Column>
        <CustomSelect />
      </Column>
      </TwoColumnForm>
      </AddIdeaWrapper>
    </Layout>
  )
}

export default AddIdeaPage;