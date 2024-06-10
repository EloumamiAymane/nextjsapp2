import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import {useUser} from "@/components/Context/Context";
import {useSession} from "next-auth/react";
import {toast} from "react-toastify";

const SkillForm = ({ initialSkills = [],getSkills }) => {
    const [skills, setSkills] = useState(initialSkills);
    const { user } = useUser();
    const { data: session } = useSession();

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const handleTagsChange = (newTags) => {
        setSkills(newTags);
    };

    const handleSubmit = async (e) => {
        console.log(e)
        e.preventDefault();
        const skillList = skills.map(skill => ({
            name: skill,
            user: { ...user }
        }));

        let skill={
            skillList
        }

console.log(skill)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}/addedSkills`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(skill),
            });

            if (response.ok) {
                const data = await response.json();
                getSkills(data);
               // console.log(data)
              toast.success("skills added ")
            } else {
                console.error('Failed to submit skills');
                toast.success("Failed to submit skills ")
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="form-group">
                <Form.Label>Compétences</Form.Label>
                <TagsInput
                    value={skills}
                    onChange={handleTagsChange}
                    inputProps={{ placeholder: 'Ajouter des tags' }}
                    onlyUnique={true}
                />
            </Form.Group>
            <Button type="submit">Enregistrer</Button>
        </Form>
    );
};

export default SkillForm;
