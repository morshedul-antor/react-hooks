import React, { useEffect, useState } from "react";

export default function Lists({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("Item Updating!");
    }, [getItems]);

    return items.map((item) => <div key={item}>{item}</div>);
}
