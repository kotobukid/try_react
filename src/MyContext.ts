import React, {createContext} from "react";

type MyContextType = {
    one_value: number,
    set_one_value: React.Dispatch<React.SetStateAction<number>>
}


export const MyContext = createContext<MyContextType | undefined>(undefined);