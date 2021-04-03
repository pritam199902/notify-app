export const insTypes = [{ id: "1", type: "School" }, { id: "2", type: "College" }, { id: "3", type: "Office" }]
export const InstituteData = {
    isRegistered: {
        flag: false
    },
    Information: () => {
        return {
            fullName: "Murshidabad College of Engineering and Technology",
            shortName: "M.C.E.T.",
            logo: "",
            email: "",
            mobile: "",
            helpDeskEmail: [{ id: "", email: "" }],
            helpDeskMobile: [{ id: "", mobile: "" }]
        }
    },
    Address: () => {
        return {
            address: "",
            district: "",
            pin: "",
            state: "",
            country: ""
        }
    },
    Description: () => {
        return {
            title: "A Center of Technological & Professional Excellence. ESTD : 1998",
            description: "Approved by AICTE | Affiliated to MAKAUT (WBUT) | Aided by Government of W. B. | Supported by Zilla Parishad (MSD)",
            establishedOn: "1998",
            instituteType: insTypes[1], // SELECT - school, college, office
            instituteTypeDescription: ""
        }
    },
    Departments: () => {
        return [
            {
                id: "1hbduy1aldf87g2e",
                departmentTitle: "", // SELET - CSE,ECE,CE
                departmentDescription: ""
            },
            {
                id: "alsjfninia7wy4t",
                departmentTitle: "", // SELET - CSE,ECE,CE
                departmentDescription: ""
            }
        ]

    },
    Sections: () => {
        return [
            {
                department: "",
                sectionTitle: "", //-exp:1st,2nd,3rd,4th year
                sectionDescription: ""
            }
        ]
    }
}



// admin data
export const Admin = {
    AdminList: () => {
        return [
            {
                id: "",
                name: "",
                email: "",
                mobile: "",
            }
        ]
    }
}

