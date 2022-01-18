import "../css/Photos.css";

function Item(props) {
    return (
    <>
        <img src={props.item.image} alt="album"></img>
    </>
    )
}

export default Item;