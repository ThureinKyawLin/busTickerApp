import { createContext, useState } from "react";



const defaultValueForSearchCar = {
    ele : "null",
    from : "null",
    to : "null",
    updateData  : () => {}
}

export const searchCarResult = createContext(defaultValueForSearchCar)

const searchCarResultProvider = ({children} : any) => {

    const [searchCar , setSerchCar] = useState(defaultValueForSearchCar)

    return (
        // <searchCarResult.Provider value={{...searchCar , updateData : setSerchCar}}>
        //     {children}
        // </searchCarResult.Provider>
        <div></div>
    )
}