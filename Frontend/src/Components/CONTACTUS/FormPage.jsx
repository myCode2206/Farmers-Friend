import styled from 'styled-components';
import DetailsBar from './DetailsBar';
import InputSide from './InputSide';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 70vh;

  @media only screen and (max-width:850px){
    width: 90%;
    flex-direction: column; 
    height: auto; 
  }
  @media only screen and (min-width:850px){
    width: 90%;
    flex-direction: row; 
    height: auto; 
  }
  @media only screen and (min-width:1000px){
    width: 90%;
    flex-direction: row; 
    height: auto; 
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;
