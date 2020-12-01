import { Commentaire } from './commentaire';
import { Reservation } from './reservation';
import { Type } from './type';
import { User } from './user';

export class Hebergement {

  private id: string;
  private name: string;
	private notation: number;
	private price: number;
	private rooms: number;
	private capacity: number;
	private position: number;
	private type: Type;
	private comments: Commentaire[];
	private owner: User;
	private reservations: Reservation[];
}
