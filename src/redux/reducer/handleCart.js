const cart =[];

const handleCart =(state=cart,action)=>{

    const product =action.payload;
    switch (action.type) {
        case "ADDITEM":
            // chek if product is Already exist
            const exist =state.find((x)=> x.id===product.id);
            if(exist){
                // increase the quantity
                return state.map((x)=>
                x.id ===product.id ?{...x,qty:x.qty+1} :x
                 );
            }else{
                const product =action.payload;
                return[
                    ...state,
                    {...product,qty:1,}
                ]
            };            
          case "DELITEM":
          // const exist1 =state.find((x)=>x.id==action.payload);
          if(action.payload.qty ==1){
            return state.filter((x)=>x.id !==action.payload.id)
          }else{
            return state.map((x)=>
                x.id==action.payload.id ? {...x,qty:x.qty-1} :x
            );
          }
          case "INCREMENT":
            return state.map(el=>el.id==action.payload?{...el,qty:el.qty+1}:el)

        case "DECREMENT":
            return state.map(el=>el.id==action.payload?{...el,qty:el.qty-1}:el)

  

         
    
        default:
            return state;
            
    }
}

export default handleCart;