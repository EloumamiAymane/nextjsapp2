import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import useForm from '../../Hooks/useForm';
import { useSession } from "next-auth/react";
import { useUser } from "@/components/Context/Context";
import { useLoading } from "@/components/Context/StateApp";
import { z } from 'zod';

const contactSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    telephone: z.string().nonempty("Telephone is required").refine(val => /^\d+$/.test(val), "Telephone must be a number"),
    visibility: z.enum(["public", "private", "friends"]),
    contactType: z.enum(["professionel", "personel"])
});

export default function ContactForm({ getTel, contactToEdit }) {
    const {  UpdatedObj, AddedObj } = useLoading();
    const { user, setUser } = useUser();
    const { data: session } = useSession();
    const [validationErrors, setValidationErrors] = useState({});

    const initialValues = contactToEdit || {
        email: '',
        telephone: '',
        visibility: 'public',
        contactType: '',
    };

    const { formState, handleChange, handleRadioChange, resetForm } = useForm(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contact = {
            user: { ...user },
            email: formState.email,
            telephone: formState.telephone,
            visibility: formState.visibility,
            contactType: formState.contactType,
        };

        if (contactToEdit) {
            contact.id = contactToEdit.id;
        }


        try {
            contactSchema.parse(contact);
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
            ? `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/updateContact`
            : `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/saveContactUser`;

        try {
            const response = await fetch(apiEndpoint, {
                method: contactToEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                const addresse = await response.json();
                if (contactToEdit) UpdatedObj();
                else AddedObj();
                getTel(addresse);
            }
        } catch (error) {
            console.error('Error adding or updating contact:', error);
        }

        resetForm("contact");
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                        type="text"
                        name="telephone"
                        value={formState.telephone}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.telephone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.telephone}
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
                            name="contactType"
                            value="professionel"
                            checked={formState.contactType === 'professionel'}
                            onChange={handleRadioChange}
                            disabled={contactToEdit && contactToEdit.contactType !== 'professionel'}
                            isInvalid={!!validationErrors.contactType}
                        />
                        {' '}
                        <Form.Label className="custom-control-label" htmlFor="customRadio6">Professionel</Form.Label>
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.contactType}
                        </Form.Control.Feedback>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <Form.Check.Input
                            type="radio"
                            id="customRadio7"
                            name="contactType"
                            value="personel"
                            checked={formState.contactType === 'personel'}
                            onChange={handleRadioChange}
                            disabled={contactToEdit && contactToEdit.contactType !== 'personel'}
                            isInvalid={!!validationErrors.contactType}
                        />
                        {' '}
                        <Form.Label className="custom-control-label" htmlFor="customRadio7">Personel</Form.Label>
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.contactType}
                        </Form.Control.Feedback>
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>{' '}
            </Form>
            {/*<ToastContainer />*/}
        </>
    );
}
