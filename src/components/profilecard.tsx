// components/ProfileCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Avatar, Paper, Typography } from '@mui/material';

// Sample driver profile object
const driverProfile = {
    picture: '/avatar.jpg',
    name: 'John Doe',
    phone: '+1234567890',
    sex: 'Male',
    age: 30,
    carRegistration: 'F OFF',
    carModel: 'Porsche GT3',
    carPicture: '/PorscheGT3.jpg',
    rating: 4.5,
};

const ProfileCard = () => {
    return (
        <ProfileContainer>
            <StyledPaper elevation={3}>
                <Avatar src={driverProfile.picture} alt="Profile" sx={{ width: 100, height: 100 }} />
                <ProfileInfo>
                    <Typography variant="h6">Driver Profile</Typography>
                    <ProfileDetail><strong>Name:</strong> {driverProfile.name}</ProfileDetail>
                    <ProfileDetail><strong>Phone:</strong> {driverProfile.phone}</ProfileDetail>
                    <ProfileDetail><strong>Sex:</strong> {driverProfile.sex}</ProfileDetail>
                    <ProfileDetail><strong>Age:</strong> {driverProfile.age}</ProfileDetail>
                    <ProfileDetail><strong>Car Registration:</strong> {driverProfile.carRegistration}</ProfileDetail>
                    <ProfileDetail><strong>Car Model:</strong> {driverProfile.carModel}</ProfileDetail>
                    <CarImage src={driverProfile.carPicture} alt="Car" />
                    <ProfileDetail><strong>Rating:</strong> {driverProfile.rating}</ProfileDetail>
                </ProfileInfo>
            </StyledPaper>
        </ProfileContainer>
    );
};

// Styled Components
const ProfileContainer = styled.div`
    width: 40%;
    float: left;
    margin-right: 20px;
`;

const StyledPaper = styled(Paper)`
    padding: 20px;
`;

const ProfileInfo = styled.div`
    margin-top: 20px;
`;

const ProfileDetail = styled.p`
    margin-bottom: 10px;
`;

const CarImage = styled.img`
    width: 100%;
    height: auto;
    margin-top: 10px;
    border-radius: 8px;
`;

export default ProfileCard;