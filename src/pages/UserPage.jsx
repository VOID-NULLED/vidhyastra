import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage = () => {
    const [userData, setUserData] = useState(null);
    const accessToken = localStorage.getItem("access");

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/profile/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setUserData(response.data.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        if (accessToken) {
            fetchUserProfile();
        }
    }, [accessToken]);

    return (
        <div>
            {userData ? (
                <div>
                    <h1>User Profile</h1>
                    <p>Email: {userData.email}</p>
                    <p>Username: {userData.username}</p>
                    <p>First Name: {userData.first_name}</p>
                    <p>Last Name: {userData.last_name}</p>
                    <p>Phone Number: {userData.phone_number}</p>
                    <p>Standard: {userData.std}</p>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
};

export default UserPage;
