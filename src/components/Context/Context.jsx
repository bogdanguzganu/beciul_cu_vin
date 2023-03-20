import React, { useState } from "react";
import { createContext } from "react";

export const globalContext = createContext()

const Context = ({children}) => {
const [data, setData] = useState([])

    return(
<globalContext.Provider value={[data, setData]}>
    {children}
</globalContext.Provider>
    )
}

export default Context