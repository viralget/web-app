import { Header } from "../Header";

export default function App({ children }) {
    return (
        <>
            <Header />
            <div className="mx-auto w-full">
                {children}
            </div>
        </>
    )
}
