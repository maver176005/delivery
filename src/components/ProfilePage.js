import React from "react";
import styled from "styled-components";

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <h1>Profile Page</h1>
      <p>Welcome to your profile page!</p>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
