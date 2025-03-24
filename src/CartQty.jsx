import React from 'react'
import { Badge, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function CartQty() {
    const qty = useSelector((state) => {
        return state.quantity.value;
    })
    return (
        <Button variant="primary">
            Cart <Badge bg="secondary">{qty}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )
}

export default CartQty