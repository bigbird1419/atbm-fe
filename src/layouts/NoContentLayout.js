
export default function NoContentLayout({ children }) {

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="max-w-6xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}