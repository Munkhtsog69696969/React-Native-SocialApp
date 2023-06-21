import React from 'react'
import { createContext } from 'react'
import { useState , useEffect } from 'react';

export const DataContext=createContext();

export const DataProvider = (props) => {
    const [createPost,setCreatePost]=useState(false);

    return (
        <DataContext.Provider value={{
           createPost,
           setCreatePost
        }}>
            {props.children}
        </DataContext.Provider>
    )
}