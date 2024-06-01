import Header from "../components/Header";

export default function Layout({ children }) {

    return (
        <div className="wrapper">
            <div className="sticky top-0 shadow px-4 py-2 bg-colorGray">
                <Header />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className=" max-w-4xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}