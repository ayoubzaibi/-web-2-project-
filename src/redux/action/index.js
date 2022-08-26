// for add item to cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

// for delete item from cart*
export const delCart=(id)=>{
    return{
        type:"DELITEM",
        payload:id
    }
}

export const increment=(id)=>{
    return{
        type:"INCREMENT",
        payload:id
       
    }
}
export const decrement=(id)=>{
    return{
        type:"DECREMENT",
        payload:id
       
    }
}