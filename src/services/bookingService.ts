import axios from "axios";
import { IApiResponse } from "../models/IApiResponse";
import { IBooking } from "../models/IBooking";
import { IBookingConfirmationId } from "../models/IBookingConfirmationId";
import { IBookingCustomer } from "../models/IBookingCustomer";
import { IBookingsAdmin } from "../models/IBookingsAdmin";
import { ICustomer } from "../models/ICustomer";

export const RESTAURANT_ID = "6408a12376187b915f68e171";
export const API_URL = "https://school-restaurant-api.azurewebsites.net";

// export const getRestaurant = async () => {
//   let response = await axios.post(
//     "https://school-restaurant-api.azurewebsites.net/restaurant/create",
//     {
//       name: "Restaurangen Last Dance",
//       address: {
//         street: "Stopvägen 67",
//         zip: "168 35",
//         city: "Bromma",
//       },
//     }
//   );
//   return response.data;
// };

export const sendBooking = async (
  booking: IBooking
): Promise<IBookingConfirmationId> => {
  let response = await axios.post(`${API_URL}/booking/create`, booking);
  return response.data;
};

export const getBookings = async () => {
  let response = await axios.get<IBookingsAdmin[]>(
    `${API_URL}/booking/restaurant/${RESTAURANT_ID}`
  );
  return response.data;
};

export const getBookedTableById = async (id: string): Promise<IApiResponse> => {
  try {
    let response = await axios.get<IBookingsAdmin[]>(
      `${API_URL}/booking/` + id
    );
    return { bookedTable: response.data[0], error: "" };
  } catch {
    return { error: "Ett fel har inträffat" };
  }
};

export const getCustomerById = async (id: string): Promise<IApiResponse> => {
  try {
    let response = await axios.get<IBookingCustomer[]>(
      `${API_URL}/customer/` + id
    );
    return { bookingCustomer: response.data[0], error: "" };
  } catch {
    return { error: "Ett fel har inträffat" };
  }
};

export const deleteBookingById = async (id: string) => {
  let response = await axios.delete<IBookingsAdmin>(
    `${API_URL}/booking/delete/` + id
  );
  console.log(response.status);
};

export const updateBookingById = async (
  id: string,
  bookedTable: IBookingsAdmin
) => {
  try {
    const updatedBooking = {
      ...bookedTable,
      id: bookedTable._id,
      _id: undefined,
    };
    const response = await axios.put<IBookingsAdmin>(
      `${API_URL}/booking/update/` + id,
      updatedBooking
    );
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomerById = async (
  id: string,
  bookedCustomer: IBookingCustomer
) => {
  try {
    const updatedCustomer = {
      ...bookedCustomer,
      id: bookedCustomer._id,
      _id: undefined,
    };
    const response = await axios.put<IBookingCustomer>(
      `${API_URL}/customer/update/` + id,
      updatedCustomer
    );
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};
