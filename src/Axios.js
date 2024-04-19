import React from 'react';
import axios from 'axios';

const AxiosContext = React.createContext();


export const AxiosProvider = ({ children }) => {
    const get = (url) => {
       return axios.get(url).then((response) => {  
        console.log(response.data);
        return response.data;
       });
    }

  return (
    <AxiosContext.Provider value={{get}}>
      {children}
    </AxiosContext.Provider>
  );
};

export default AxiosContext;