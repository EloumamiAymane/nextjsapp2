import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../../Hooks/useForm';
import { useSession } from 'next-auth/react';
import { useUser } from '@/components/Context/Context';
import { useLoading } from "@/components/Context/StateApp";
import { z } from 'zod';

const experienceSchema = z.object({
    entreprise: z.string().nonempty("Entreprise is required"),
    jobTitle: z.string().nonempty("Job Title is required"),
    description: z.string().nonempty("Description is required"),
    jobType: z.enum(["CDD", "CDI", "Stage"]),
    jobModality: z.enum(["A Distance", "Sur Site", "Hybride"]),
    startDate: z.string().nonempty("Start Date is required").refine(date => !isNaN(Date.parse(date)), "Invalid date format"),
    endDate: z.string().nonempty("End Date is required").refine(date => !isNaN(Date.parse(date)), "Invalid date format"),
}).refine(data => new Date(data.endDate) > new Date(data.startDate), {
    message: "End Date must be greater than Start Date",
    path: ["endDate"], // Specify the field that will get the error
});

export default function ExperienceForm({ experienceEdit, getExperience }) {
    const {  UpdatedObj, AddedObj } = useLoading();
    const { user } = useUser();
    const { data: session } = useSession();
    const [validationErrors, setValidationErrors] = useState({});

    const initialValues = experienceEdit || {
        entreprise: '',
        jobTitle: '',
        description: '',
        jobType: '',
        jobModality: '',
        startDate: '',
        endDate: '',
    };

    const { formState, handleChange, resetForm } = useForm(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const exp = {
            user: { ...user },
            jobType: formState.jobType,
            jobModality: formState.jobModality,
            description: formState.description,
            jobTitle: formState.jobTitle,
            entreprise: formState.entreprise,
            startDate: formState.startDate,
            endDate: formState.endDate,
        };

        if (experienceEdit) {
            exp.id = experienceEdit.id;
        }


        try {
            experienceSchema.parse(exp);
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

        const apiEndpoint = experienceEdit
            ? `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/ExperienceApi/updateExperience`
            : `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/ExperienceApi/saveExperience`;

        try {
            const response = await fetch(apiEndpoint, {
                method: experienceEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(exp),
            });

            if (response.ok) {
                const addedOrUpdatedExp = await response.json();
                if (experienceEdit) UpdatedObj();
                else AddedObj();
                getExperience(addedOrUpdatedExp);
            }
        } catch (error) {
            setShowA2(true);
            console.error('Error', error);
        }

        resetForm("exp");
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Entreprise</Form.Label>
                    <Form.Control
                        type="text"
                        name="entreprise"
                        value={formState.entreprise}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.entreprise}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.entreprise}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="jobTitle"
                        value={formState.jobTitle}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.jobTitle}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.jobTitle}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        name="jobType"
                        value={formState.jobType}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.jobType}
                    >
                        <option>Job Type</option>
                        <option value="CDD">CDD</option>
                        <option value="CDI">CDI</option>
                        <option value="Stage">Stage</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.jobType}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Job Modality</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        name="jobModality"
                        value={formState.jobModality}
                        onChange={handleChange}
                        isInvalid={!!validationErrors.jobModality}
                    >
                        <option>Job Modality</option>
                        <option value="A Distance">A Distance</option>
                        <option value="Sur Site">Sur Site</option>
                        <option value="Hybride">Hybride</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.jobModality}
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
