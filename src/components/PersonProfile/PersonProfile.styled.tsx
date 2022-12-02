import styled from "styled-components";

export const Container = styled.div``;

export const ProfileContainer = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(280px);
  border-radius: 500px 60px 300px 100px;
  height: 100%;
  margin: 0 auto;
  border-right: 10px solid #362c2c;
  border-bottom: 5px solid #362c2c;
  padding-left: 5%;
  padding-top: 10%;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-top: 20%;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 30px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 70%;
  border-radius: 200px 20px 100px 50px;
`;

export const StyledDataContainer = styled.div`
  width: 100%;
  text-align: center;
  width: 70%;
  margin: 0 auto;
`;
