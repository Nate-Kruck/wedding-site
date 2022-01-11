import "../css/Photos.css";

function Item(props) {
    return (
    <>
        {/* <div className="album-wrapper"> */}
                <h2>{props.item.name}</h2>
                <img className="album-image" src={props.item.image} alt="album"></img>
        {/* </div> */}
    </>
    )
}

export default Item;