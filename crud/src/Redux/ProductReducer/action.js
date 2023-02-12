
import axios from "axios";
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes";

export const getProductSuccess=(payload)=>{
    return{type:GET_PRODUCT_SUCCESS,payload}
}

export const postProductSuccess=(payload)=>{
    return{type:POST_PRODUCT_SUCCESS,payload}
};

export const productRequest=()=>{
    return{type:PRODUCT_REQUEST}
}

export const productFailure=()=>{
    return{type:PRODUCT_FAILURE}
}


export const addProduct=(payload)=>(dispatch)=>{
     console.log("adddddd")
    dispatch(productRequest())
    axios.post("https://good-tan-rabbit-boot.cyclic.app/Ecommerce",payload).then(()=>{
         console.log("added")
        dispatch(postProductSuccess())
    })
    .catch((err)=>{
        dispatch(productFailure())
    })
};

export const getProduct=(param)=>(dispatch)=>{
    axios.get(`https://good-tan-rabbit-boot.cyclic.app/Ecommerce`,param).then((res)=>{
        console.log(res.data)
        dispatch(getProductSuccess(res.data));
    })
    .catch((err)=>{
        dispatch(productFailure())
    })
}