import { useState } from 'react';

function useForm(initialValues) {
    const [formState, setFormState] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const resetForm = (adr) => {
        const initialValue = {
            address1: '',
            address2: '',
            city: '',
            country: '',
            codePostal: '',
            visibility: 'public',
            addressType: '',
        };
        const contact = {
            email: '',
            telephone: '',
            visibility: 'public',
            contactType:'',
        };
        const educ =  {
            name: '',
            diplome: '',
            description: '',
            field: '',
            degree: '',
            startDate: '',
            endDate: '',
            ecole:'',
            educationSkills:[]
        };
        const exp =  {
            entreprise: '',
            jobTitle: '',
            description: '',
            jobType: '',
            jobModality: '',
            startDate: '',
            endDate: '',

        };
        if(adr==="adressForm") setFormState(initialValue);
        else if (adr==="contact")  setFormState(contact)
        else if (adr==="educ")  setFormState(educ)
        else if (adr==="exp")  setFormState(exp)
    };

    return {
        formState,
        handleChange,
        handleRadioChange,
        resetForm,
    };
}

export default useForm;
