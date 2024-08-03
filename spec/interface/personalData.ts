// Define the data interface
export interface ProfileData {
    Name: string;
    Designation: string;
    Address: {
        Primary: string;
        Alternate: string;
    };
    Contact: {
        Email: string;
        Phone: string;
    };
    Profile: {
        DateOfBirth: string;
        Gender: string;
        FatherName: string;
        MotherName: string;
        NomineeName: string;
        LanguageKnown: string[];
        Religion: string;
        BloodGroup: string;
        MaritalStatus: string;
        SpouseName: string;
        Children: string[];
    };
    EmergencyContacts: {
        Name: string;
        Relationship: string;
        ContactNumber: string;
    }[];
    Qualification: {
        Degree: string;
        Institution: string;
        Year: string;
    };
    CareerDetails: {
        Organization: string;
        Designation: string;
        Department: string;
        CurrentlyWorksHere: string;
        WorkingPeriod: string;
        CurrentCTC: number;
        ExpectedCTC: number;
    };
}