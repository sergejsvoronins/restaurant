import { ICustomer } from "./ICustomer";

export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
}
