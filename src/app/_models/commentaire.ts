import { Hebergement } from './hebergement';
import { User } from './user';

export class Commentaire {

    id: string;
    creationDate: Date;
    modifDate: Date;
    user: User;
    hebergement: Hebergement;
    content: string;

}
