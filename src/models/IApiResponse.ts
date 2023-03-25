import { IBookingCustomer } from "./IBookingCustomer";
import { IBookingsAdmin } from "./IBookingsAdmin";

export interface IApiResponse {
  bookedTable?: IBookingsAdmin;
  error: string;
  bookingCustomer?: IBookingCustomer
}
