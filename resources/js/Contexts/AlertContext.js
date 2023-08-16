import Alert from "@/Components/Alert";
import { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [runAction, setRunAction] = useState(false);
    const [buttonText, setButtonText] = useState(null);

    const handleRunAction = () => {
        setShowAlert(false);
        setRunAction(true);
    }

    return (
        <AlertContext.Provider value={[showAlert, setShowAlert, setTitle, setContent, runAction, setRunAction, setButtonText]}>
            {children}
            {showAlert && <Alert title={title} content={content} isOpen={showAlert} actionText={buttonText} setIsOpen={setShowAlert} action={handleRunAction} />}
        </AlertContext.Provider>
    )
}