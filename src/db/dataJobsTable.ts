import { Eye, FilePenLine, Trash2 } from "lucide-react";

const dataJobsTable = {
    tableHead: [
        "Job Title", "Location", "Key Skills", "Type", "Actions"
    ],
    tableRows: [
        {
            id: 1,
            title: "Sr. Frontend Developer",
            location: "San Fransico, CA",
            keySkills: "React, TypeScript, CSS",
            type: "Full Time",
            actions: [
                { title: "View" },
                { title: "Edit" },
                { title: "Delete" },
            ]
        },
        {
            id: 2,
            title: "Product Manager",
            location: "Remote",
            keySkills: "Product Strategy, Roadmapping, Agile",
            type: "Full Time",
            actions: [
                { title: "View", icon: Eye },
                { title: "Edit", icon: FilePenLine },
                { title: "Delete", icon: Trash2 },
            ]
        },
        {
            id: 3,
            title: "UX Designer",
            location: "New York, NY",
            keySkills: "Figma, User Research, Ptototyping",
            type: "Contract",
            actions: [
                { title: "View", icon: Eye },
                { title: "Edit", icon: FilePenLine },
                { title: "Delete", icon: Trash2 },
            ]
        },
    ]
}

export default dataJobsTable;