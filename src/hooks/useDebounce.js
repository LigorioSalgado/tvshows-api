import React, { useState, useEffect } from 'react';

export default function useDebounce(value, delay){
//c
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() =>{
        const handler = setTimeout(() =>{
            setDebounceValue(value)
            console.log("Valor actual ---> ", value)
        },delay)

        return () => {
            clearTimeout(handler);
        }

    },[value])

    return debounceValue
}