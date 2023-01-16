import React from "react";

const SearchBar = (props) => {
    const { name, stocked } = props.filter;
    const style = {
        marginBottom: "20px",
    };

    const onChangeInput = (e) => {
        props.handlerOnChange(e.target.name, e.target.value);
    };

    const onChangeCheckBox = (e) => {
        props.handlerOnChange(e.target.name, e.target.checked);
    };

    return (
        <div style={style}>
            <input type="text" name={"name"} value={name} placeholder="Search..." onChange={onChangeInput} />
            <br></br>
            <input id="stockCheck" name={"stocked"} value={stocked} type="checkbox" onChange={onChangeCheckBox} /> <label htmlFor="stockCheck">Only show products in stock</label>
        </div>
    );
};

export default SearchBar;
