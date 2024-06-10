import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../../Hooks/useForm';
import { useSession } from 'next-auth/react';
import { useUser } from '@/components/Context/Context';
import { useLoading } from "@/components/Context/StateApp";
import { z } from 'zod';


const addressSchema = z.object({
    address1: z.string().nonempty("Address 1 is required"),
    address2: z.string().optional(),
    city: z.string().nonempty("City is required"),
    country: z.string().nonempty("Country is required"),
    codePostal: z.string().nonempty("Code Postal is required").refine(val => /^\d+$/.test(val), "Code Postal must be a number"),
    visibility: z.enum(["public", "private", "friends"]),
    addressType: z.enum(["professionel", "personel"])
});

export default function AddressForm({ contactToEdit, getContact }) {
    const {  UpdatedObj, AddedObj } = useLoading();
    const { user } = useUser();
    const { data: session } = useSession();
    const [validationErrors, setValidationErrors] = useState({});

    const initialValues = contactToEdit || {
        address1: '',
        address2: '',
        city: '',
        country: '',
        codePostal: '',
        visibility: 'public',
        addressType: '',
    };

    const { formState, handleChange, handleRadioChange, resetForm } = useForm(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const address = {
            user: { ...user },
            address1: formState.address1,
            address2: formState.address2,
            city: formState.city,
            country: formState.country,
            codePostal: formState.codePostal,
            visibility: formState.visibility,
            addressType: formState.addressType,
        };

        if (contactToEdit) {
            address.id = contactToEdit.id;
        }

        try {
            addressSchema.parse(address);
            setValidationErrors({});
        } catch (validationError) {
            if (validationError.errors) {
                const errors = validationError.errors.reduce((acc, error) => {
                    acc[error.path[0]] = error.message;
                    return acc;
                }, {});
                setValidationErrors(errors);
                return;
            }
        }

        const apiEndpoint = contactToEdit
            ? `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/updateAddressUser`
            : `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/saveAddressUser`;

        try {
            const response = await fetch(apiEndpoint, {
                method: contactToEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(address),
            });

            if (response.ok) {
                const addedOrUpdatedAddress = await response.json();
                if (contactToEdit) UpdatedObj();
                else AddedObj();
                getContact(addedOrUpdatedAddress);
            }
        } catch (error) {
            console.error('Error adding or updating address:', error);
        }

        resetForm("adressForm");
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Address 1</Form.Label>
                    <Form.Control
                        type="text"
                        name="address1"
                        value={formState.address1}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.address1}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.address1}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                        type="text"
                        name="address2"
                        value={formState.address2}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.address2}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.address2}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.city}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        name="country"
                        value={formState.country}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.country}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.country}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Code Postale</Form.Label>
                    <Form.Control
                        type="number"
                        name="codePostal"
                        value={formState.codePostal}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.codePostal}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.codePostal}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label htmlFor="choices-single-default">Visibility</Form.Label>
                    <select
                        className="form-select"
                        name="visibility"
                        value={formState.visibility}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.visibility}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="friends">Friends</option>
                    </select>
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.visibility}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <div className="custom-control custom-radio custom-control-inline">
                        <Form.Check.Input
                            type="radio"
                            id="customRadio6"
                            name="addressType"
                            value="professionel"
                            checked={formState.addressType === 'professionel'}
                            onChange={handleRadioChange}
                            disabled={contactToEdit && contactToEdit.addressType !== 'professionel'}
                            isInvalid={!!validationErrors.addressType}
                        />
                        {' '}
                        <Form.Label className="custom-control-label" htmlFor="customRadio6">Professionel</Form.Label>
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.addressType}
                        </Form.Control.Feedback>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <Form.Check.Input
                            type="radio"
                            id="customRadio7"
                            name="addressType"
                            value="personel"
                            checked={formState.addressType === 'personel'}
                            onChange={handleRadioChange}
                            disabled={contactToEdit && contactToEdit.addressType !== 'personel'}
                            isInvalid={!!validationErrors.addressType}
                        />
                        {' '}
                        <Form.Label className="custom-control-label" htmlFor="customRadio7">Personel</Form.Label>
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.addressType}
                        </Form.Control.Feedback>
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>{' '}
            </Form>

        </>
    );
}
