import React from 'react'
import { Button } from 'react-bootstrap'
import { increaseQty } from './redux/reducres/quantitySlice';
import { useDispatch } from 'react-redux';


function UpdateQtyCart() {
    const dispath = useDispatch();
    const handleClick = () => {
        dispath(increaseQty())
    }
    return (
        <>
            <input></input>
            <Button onClick={handleClick}>Thêm vào giỏ hàng</Button>
        </>
    )
}

export default UpdateQtyCart