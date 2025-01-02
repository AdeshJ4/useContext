import { createContext, useState } from "react";

export const UserContext = createContext(null);


export const UserProvider = ({ children }) => {
    const [data, setData] = useState({
        fname: 'Adesh',
        lname: 'Jadhav',
        age: 22,
        address: {
            city: 'Pune',
            village: 'Lohegaon',
            hometown: {
                village: 'Palagad',
                city: 'Ratnagiri'
            }
        }
    });

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}
