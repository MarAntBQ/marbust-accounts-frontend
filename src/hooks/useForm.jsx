import React, { useState } from 'react'

export const useForm = (initObj = {}) => {
    const [form, setFom] = useState(initObj);

    const changed = ({ target }) => {
        const { name, value } = target;
        setFom({
            ...form,
            [name]: value
        });
    }
  
    return {
        form,
        changed
    };
}
