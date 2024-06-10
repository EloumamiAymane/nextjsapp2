const fields = [
    {
        value: 1,
        label: "bio",
        isInput:true,
        type:"text",

    },
    {
        value: 1,
        label: "domain",
        isInput:true,
        type:"text"
    },
    {
        value: 1,
        label: "birthDate",
        isInput:true,
        type:"date"
    },

    {
        value: 5,
        label: "promotion",
        isInput:false,
        type:"multi"
    },
    // {
    //     value: 6,
    //     label: "select-1",
    //     isInput:false,
    //     type:"check"
    //
    // },
];

// utils/schoolYears.js

export const generateSchoolYears = (startYear, endYear) => {
    const schoolYears = [];
    for (let year = startYear; year <= endYear; year++) {
        schoolYears.push(`${year}-${year + 1}`);
    }
    return schoolYears;
};

export default fields
