export type entity = {
    id: number;
}

export type visual = {
    image: string;
}

export type agency  = entity & visual &{
    name: string;
    address: string;
    email: string;
    fax: number;
}

export type offer = entity &{
    price: number;
}

export type excursion = entity & offer & visual &{
    departureLocation: string;
    arrivalLocation: string;
    departureDate: Date;
    arrivalDate: Date;
    departureTime: string;
    arrivalTime: string;
    hotelID?: number;
}

export type hotel = entity &{
    name: string;
    address: string;
    category: number;
}


export type facility = entity &{
    description: string;
}

export type rol = 'admin' | 'tourist' | 'marketing' | 'agent';

export type user = entity &{
    username: string;
    // password: string;
    // email: string;
    webToken: string;
    rol: rol;
}

export type touristPackage = entity & offer & visual &{
    agencyID: number;
    excursionID: number;
    facilities: facility[];
    description: string;
    duration: number;
}