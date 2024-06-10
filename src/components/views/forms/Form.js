import React, { useState } from 'react';
import { generateSchoolYears } from "@/components/utilities/forms/ProfileFields";
import { useSession } from "next-auth/react";
import { Button, Form } from "react-bootstrap";
import { z } from 'zod';
import useForm from "@/components/views/Hooks/useForm";
import { useLoading } from "@/components/Context/StateApp";

const UserSchema = z.object({
    bio: z.string().nonempty('Bio is required'),
    domain: z.string().nonempty('Domain is required'),
    birthDate: z.string().nonempty('Birth Date is required'),
    promotion: z.string().nonempty('Promotion is required'),
    summary: z.string().nonempty('Summary is required'),
});

export default function CustomForm({ getUser, editedUser }) {
    const { UpdatedObj } = useLoading();
    const { data: session } = useSession();
    const opt = generateSchoolYears(2000, 2024);
    const initialValues = editedUser || {
        bio: '',
        domain: '',
        promotion: '',
        birthDate: '',
        summary: '',
    };
    const { formState, handleChange, resetForm } = useForm(initialValues);
    const [validationErrors, setValidationErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            id: editedUser.id,
            firstName: editedUser.firstName,
            lastName: editedUser.lastName,
            email: session.user.email,
            bio: formState.bio,
            birthDate: formState.birthDate,
            promotion: formState.promotion,
            domain: formState.domain,
            summary: formState.summary,
        };

        try {
            UserSchema.parse(user);
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

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/UserApi/updateUser`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const userData = await response.json();
                console.log('User added successfully:', userData);
                getUser(userData);
                UpdatedObj();
            } else {
                console.error('Failed to add user:', await response.text());
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        type="text"
                        name="bio"
                        value={formState.bio}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.bio}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.bio}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Domain</Form.Label>
                    <Form.Control
                        type="text"
                        name="domain"
                        value={formState.domain}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.domain}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.domain}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="birthDate"
                        value={formState.birthDate}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.birthDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.birthDate}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label htmlFor="choices-single-default">Promotion</Form.Label>
                    <Form.Control
                        as="select"
                        name="promotion"
                        value={formState.promotion}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.promotion}
                    >
                        {opt.map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.promotion}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="summary"
                        value={formState.summary}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.summary}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.summary}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>{' '}
            </Form>
        </>
    );
}
