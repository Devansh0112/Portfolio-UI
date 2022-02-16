function CategoryComponent(props) {
    let heading = props.heading;
    let content = "Some content will go here to fill the box";
    return (
        <div className="CategoryComponent">
            <h3>{ heading }</h3>
            <p>{ content }</p>
        </div>
    );
}

export default CategoryComponent;