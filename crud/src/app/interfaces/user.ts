export interface Person {
    id:         number;
    first_name: string;
    last_name:  string;
    email:      string;
    gender:     Gender;
    ip_address: string;
}

export enum Gender {
    Agender = "Agender",
    Bigender = "Bigender",
    Female = "Female",
    Genderfluid = "Genderfluid",
    Genderqueer = "Genderqueer",
    Male = "Male",
    NonBinary = "Non-binary",
    Polygender = "Polygender",
}


export interface PersonDB {
    _id:        string;
    first_name: string;
    last_name:  string;
    email:      string;
    gender:     string;
    ip_address: string;
    __v:        number;
}

