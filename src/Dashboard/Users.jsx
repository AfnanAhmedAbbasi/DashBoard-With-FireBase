import React, { useEffect, useState } from 'react';
import AFTable from '../components/AFTable';
import AFScreenHeader from '../components/AFScreenHeader';
import { fetchUsersFromFirestore } from '../firebase/FireBaseFunctions';
import AFButton from '../components/AFButton';
import { useNavigate } from 'react-router-dom';
import '../pages/pages.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            setLoader(true);
            const fetchedUsers = await fetchUsersFromFirestore();
            console.log(fetchedUsers); 
            setLoader(false);
            setUsers(fetchedUsers);
        };

        getUsers();
    }, []);

    return (
        <div className='flex flex-col h-screen w-full'>
            <AFScreenHeader
                Title={"Users"}
                actionButtons={[{
                    display: () => (
                        <AFButton lable={"Add User"} onClick={() => navigate('/userform')} />
                    )
                }]} />

      
            {loader && (
                <div className="">
                    <img
                        src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.gif'
                        alt="Loading..."
                        className="loader"
                    />
                </div>
            )}

            {!loader && (
                <AFTable
                    columns={[
                        { key: "name", label: "User Name" },
                        { key: "phone", label: "Contact Number" },
                        { key: "email", label: "Email" },
                        { key: "website", label: "Website" }
                    ]}
                    data={users}
                />
            )}
        </div>
    );
};

export default Users;
