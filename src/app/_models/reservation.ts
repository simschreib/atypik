import { Hebergement } from './hebergement';
import { User } from './user';

export class Reservation {

    id: string;
    libelle: string;
    prix: number;
    calendrier: Date;
    hebergement: Hebergement;
    client: User;
}
