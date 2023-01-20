import React from "react";
import ItemList from "./ItemList";
import * as S from "./ProductsTableStyle";

const ItemArea = (props) => {
    const data = props.data;
    const { name, stocked } = props.filter;

    const category = [];

    const listDetach = (list) => {
        list.forEach((item) => {
            category.indexOf(item.category) === -1 && category.push(item.category);
        });
    };

    const listFilter = (key, data) => {
        return data.filter((item) => item.category === key);
    };

    let filterData = data.filter((item) => item.name === name);
    filterData = filterData.length > 0 ? filterData : data;

    listDetach(filterData);

    return (
        <div>
            <div>
                <S.Category>Name Price</S.Category>
                {category && category.map((key) => <ItemList key={key} title={key} items={listFilter(key, filterData)} stocked={stocked} />)}
            </div>
        </div>
    );
};

export default ItemArea;
