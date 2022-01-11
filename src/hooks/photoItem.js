import "../css/Photos.css";

function Item(props) {
    return (
    <>
                <h2>{props.item.name}</h2>
                <img className="e-album-image" src={props.item.image} alt="album"></img>
    </>
    )
}

export default Item;