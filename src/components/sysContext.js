import React from 'react';

export const SysContext = React.createContext (
    {
        system: {
        busDate: new Date(2019,1,6),
        prevBusDate: new Date(2019,1,5),
        nextBustDate: new Date(2019,1,7)},
        user: {
            name: "John Smith",
            accList: [
                1,
                2,
                4,
                5
            ],
            roles: ['admin']
        }
    }
);
