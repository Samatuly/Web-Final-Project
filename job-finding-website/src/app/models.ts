export interface Company{
    id: number;
    name: string;
    email: string;
}

export interface Vacancy{
    id: number;
    name: string;
    experience: number;
    city: string;
    location: string;
    salary: string;
    description: string;
    company_id: number;
}

export interface AuthToken{
    token: string;
}
