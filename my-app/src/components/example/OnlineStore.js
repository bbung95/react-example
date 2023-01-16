import React, { useEffect, useState, useRef } from "react";
import StoreTable from "./StoreTable";
import SearchBar from "./SearchBar";

const OnlineStore = () => {
    const [searchFilter, setSearchFilter] = useState({
        name: "",
        stocked: "",
    });

    const [listData, setListData] = useState([]);

    const setItemListAPI = async () => {
        const res = await fetch("/data/items.json");
        const data = await res.json();
        const newData = data === undefined ? [] : data;

        console.log(newData, "newData");
        setListData(newData);
    };

    const updateSearchFilter = (key, value) => {
        setSearchFilter({ ...searchFilter, [key]: value });
    };

    // useMount
    useEffect(() => {
        setItemListAPI();
    }, []);

    return (
        <div>
            <SearchBar filter={searchFilter} handlerOnChange={updateSearchFilter} />
            <StoreTable filter={searchFilter} data={listData} />
        </div>
    );
};

export default OnlineStore;
