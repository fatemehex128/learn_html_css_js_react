export default function BubbleSort() {

    function sort() {
        const myArr = Array.from({length: 1000}, (_, i) => i + 1);

        for (let i = 0; i < myArr.length; i++) {
            for (let j = 0; j < myArr.length; j++) {
                console.log("xxx")
            }
        }
    }

    return <button onClick={sort}>sort</button>
}