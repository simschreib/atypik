import { Commentaire } from './commentaire';
import { Reservation } from './reservation';
import { Type } from './type';
import { User } from './user';

export class Hebergement {

  id: string;
  name: string;
	notation: number;
	price: number;
	rooms: number;
	capacity: number;
	position: number;
	type: Type;
	comments: Commentaire[];
	owner: User;
	reservations: Reservation[];
}
