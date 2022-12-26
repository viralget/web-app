import { Header } from "../Header";

export default function Guest({ children }) {
    return (
        <>
            <Header />
            <div className="mx-auto w-full">
                {children}
            </div>
        </>
    )
}
