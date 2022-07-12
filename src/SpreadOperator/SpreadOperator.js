
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8];
const SpreadOperator = () => {

   const array3 = [...array1, ...array2];
    return (
        <div>
            {array3.map((item, index ) => <p>{(index + 1) + ': ' + item}</p>)}
        </div>
    )
}
export default SpreadOperator