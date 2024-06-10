import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../../Hooks/useForm';
import { useSession } from 'next-auth/react';
import { useUser } from '@/components/Context/Context';
import { useLoading } from "@/components/Context/StateApp";
import { z } from 'zod';

const educationSchema = z.object({
    ecole: z.string().nonempty("Ecole is required"),
    diplome: z.string().nonempty("Diplôme is required"),
    description: z.string().nonempty("Description is required"),
    field: z.string().nonempty("Domaine d’études is required"),
    degree: z.string().nonempty("Résultat obtenu is required"),
    startDate: z.string().nonempty("Start Date is required").refine(date => !isNaN(Date.parse(date)), "Invalid date format"),
    endDate: z.string().nonempty("End Date is required").refine(date => !isNaN(Date.parse(date)), "Invalid date format"),
}).refine(data => new Date(data.endDate) > new Date(data.startDate), {
    message: "End Date must be greater than Start Date",
    path: ["endDate"], // Specify the field that will get the error
});

export default function EducationForm({ educationEdit, getEducation }) {
    const { UpdatedObj, AddedObj, setErrorState } = useLoading();
    const { user } = useUser();
    const { data: session } = useSession();
    const [validationErrors, setValidationErrors] = useState({});
    const initialValues = educationEdit || {
        ecole: '',
        diplome: '',
        description: '',
        field: '',
        degree: '',
        startDate: '',
        endDate: '',

    };
    const { formState, handleChange, resetForm } = useForm(initialValues);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const education = {
            user: { ...user },
            ecole: formState.ecole,
            diplome: formState.diplome,
            description: formState.description,
            field: formState.field,
            degree: formState.degree,
            startDate: formState.startDate,
            endDate: formState.endDate,

        };
      //  console.log(education)
        if (educationEdit) {
            education.id = educationEdit.id;
        }
        try {
            educationSchema.parse(education);
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
        const apiEndpoint = educationEdit
            ? `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/EducationApi/updateEducation`
            : `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/EducationApi/saveEducation`;
        try {
            const response = await fetch(apiEndpoint, {
                method: educationEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(education),
            });
            if (response.ok) {
                const addedOrUpdatedEducation = await response.json();
                if (educationEdit) UpdatedObj();
                else AddedObj();
                getEducation(addedOrUpdatedEducation);
            }
        } catch (error) {
            setErrorState(true);
            console.error('Error adding or updating address:', error);
        }
        resetForm("educ");
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Ecole</Form.Label>
                    <Form.Control
                        type="text"
                        name="ecole"
                        value={formState.ecole}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.ecole}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.ecole}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Diplôme</Form.Label>
                    <Form.Control
                        type="text"
                        name="diplome"
                        value={formState.diplome}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.diplome}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.diplome}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Domaine d’études</Form.Label>
                    <Form.Control
                        type="text"
                        name="field"
                        value={formState.field}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.field}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.field}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Date de début</Form.Label>
                    <Form.Control
                        type="date"
                        name="startDate"
                        value={formState.startDate}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.startDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.startDate}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Date de fin (ou prévue)</Form.Label>
                    <Form.Control
                        type="date"
                        name="endDate"
                        value={formState.endDate}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.endDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.endDate}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Résultat obtenu</Form.Label>
                    <Form.Control
                        type="text"
                        name="degree"
                        value={formState.degree}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.degree}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.degree}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Descriptif</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        name="description"
                        value={formState.description}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.description}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>{' '}
            </Form>
        </>
    );
}















