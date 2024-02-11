'use client'
import type { ReactNode } from "react"
import {createContext, useState} from "react";

export const LinksContext = createContext({});

export function LinksContextProvider({children}: {children: ReactNode}) {
  const [links,setLinks] = useState([]);
  return (
    <LinksContext.Provider value={{links,setLinks}}>
      {children}
    </LinksContext.Provider>
  );
}
