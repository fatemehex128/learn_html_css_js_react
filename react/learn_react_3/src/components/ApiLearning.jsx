import './ApiLearning.css'

export function ApiLearning() {
    return (
        <div>
            <div className="box" id="container">
                <div id="x1" className="mb10">hi</div>
                <div id="x2">امیر</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="rounded hover:bg-indigo-500 m-10 bg-red-500 shadow-lg text-white text-center">امیر</div>
                <div className={"text-center bg-gray-100 rounded-full"}>❤️</div>
                <div className="rounded hover:bg-red-500 m-10 bg-indigo-500 shadow-2lg text-white text-center">فاطمه</div>
            </div>
        </div>
    )
}
