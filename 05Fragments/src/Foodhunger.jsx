const Foodhunger = ({list})=>{
    return(
        <>{list.length === 0 ? <h2>i am hungry</h2> : null}</>
    );
}
export default Foodhunger
