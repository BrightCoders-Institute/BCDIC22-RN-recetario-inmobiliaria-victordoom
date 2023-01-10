export interface RentalProperties {
    address:       string;
    bathrooms:     number;
    cost:          number;
    favorite:      boolean;
    image:         string;
    name:          string;
    qualification: number;
    rooms:         number;
    surface:       Surface;
}

export interface Surface {
    lenght: number;
    width:  number;
}