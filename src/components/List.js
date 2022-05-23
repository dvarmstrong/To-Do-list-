

import React, {useState} from 'react';

const List = props => {
// map through the toDoList and return a list of li's
// each li will have a button that will remove the item from the list
    const {toDoList, setToDoList} = props;
return (
    <ul>
        {
            props.toDoList.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                        <button onClick={() => props.setToDoList(props.toDoList.filter(todo => todo !== item))}>X</button>
                    </li>
                );
            })
        }
        
    </ul>
);
}

export default List;