import { createContext, useState } from "react";

const GlobalContext = createContext(null)

function GlobalProvider({ children }: { children: any }) {
    const [filterText, setFilterText] = useState("");


    function changeFilterText(text: string) {
        if (text.trim().length > 0) {
            setFilterText(text.trim())
        } else {
            setFilterText("")
        }
    }

    return <GlobalContext.Provider value={{ filterText, changeFilterText }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider };