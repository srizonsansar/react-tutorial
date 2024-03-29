import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'Dozen of Eggs'
        },
        {
            id: 2,
            checked: false,
            item: 'Item 2'
        },
        {
            id: 3,
            checked: false,
            item: 'Item 3'
        }
    ])

    return(
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" data-id={item.id} key={item.id}>
                        <input
                            type="checkbox" 
                            checked={item.checked} 
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt
                            role="button" 
                            tabIndex="0" 
                        />
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default Content;