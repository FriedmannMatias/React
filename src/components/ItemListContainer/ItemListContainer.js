const ItemListContainer = ({greeting}) => {
    return (
        <div>
           <h2>{greeting}</h2> 
           <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
            </ul>
        </div>
    )
}

export default ItemListContainer