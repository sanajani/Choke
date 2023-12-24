/* eslint-disable react/prop-types */

import Input from "./Input";

const FormikControll = (props) => {
    const {control, ...rest} = props
    switch(control){
        case 'input': return <Input {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null;
    }
}

export default FormikControll