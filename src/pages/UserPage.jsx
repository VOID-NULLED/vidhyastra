import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserTie } from "react-icons/fa";

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

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl font-semibold text-gray-600">Loading user profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 px-4 py-5 sm:px-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-white rounded-full p-2">
                            <FaUserTie className="h-12 w-12 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg leading-6 font-medium text-white">
                                {userData.first_name} {userData.last_name}
                            </h3>
                            <p className="text-sm text-blue-200">
                                {userData.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 sm:p-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Username</dt>
                            <dd className="mt-1 text-sm text-gray-900">{userData.username}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                            <dd className="mt-1 text-sm text-gray-900">{userData.phone_number}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Standard</dt>
                            <dd className="mt-1 text-sm text-gray-900">{userData.std}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default UserPage;