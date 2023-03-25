import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { ICustomer } from "../../models/ICustomer";
import { sendBooking } from "../../services/bookingService";
import { useOutletContext } from "react-router";
import { IRestaurantContext } from "../../App";
import {
  BookingTimeDivWrapper,
  GdprWrapper,
  InputWrapper,
  NumberOfGuestsWrapper,
} from "../styled/Wrappers";
import { SelectGuestsAmount } from "../SelectGuestsAmount/SelectGuestsAmount";
import { SelectBookingTime } from "../SelectBookingTime/SelectBookingTime";
import { checkedAvailableTables } from "../../functions/checkedAvailableTables";
import { useNavigate } from "react-router-dom";
import { IAvailableTime } from "../../models/IAvailableTime";
import { getStartDate } from "../../functions/getStartDate";
import { H1, H3, H4 } from "../styled/Headings";
import { SubmitButton } from "../styled/Buttons";
import { Form } from "../styled/Forms";
import { Gdpr } from "../gdpr/Gdpr";

export const Booking = () => {
  let startDate = getStartDate();
  const startValueCustomer: ICustomer = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  };
  const startValueBooking: IBooking = {
    restaurantId: "6408a12376187b915f68e171",
    date: startDate,
    time: "",
    numberOfGuests: 1,
    customer: startValueCustomer,
  };
  const [customer, setCustomer] = useState<ICustomer>(startValueCustomer);
  const [booking, setBooking] = useState<IBooking>(startValueBooking);
  const { bookings, changeLoadedFromApi } =
    useOutletContext<IRestaurantContext>();
  const [availableTimes, setAvailableTimes] = useState<IAvailableTime[]>([
    { bookingTime: "17:00", numOfAvailableTables: 0, isAvailable: true },
    { bookingTime: "21:00", numOfAvailableTables: 0, isAvailable: true },
  ]);
  // const [showGdpr, setShowGdpr] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    let list = checkedAvailableTables(
      bookings,
      booking.date,
      booking.numberOfGuests
    );
    setAvailableTimes(list);
  }, [booking]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newCustomer = { ...customer, [e.target.name]: e.target.value };
    setCustomer(newCustomer);
    setBooking({ ...booking, customer: newCustomer });
    if (e.target.type === "date") {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    }
  };
  // const changeGdprStatus = () =>{
  //   setShowGdpr(false);
  // }
  const handleGuestsNum = (item: number) => {
    setBooking({ ...booking, numberOfGuests: item });
  };
  const handleBookingTime = (bookingTime: string) => {
    setBooking({ ...booking, time: bookingTime });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let response = await sendBooking(booking);
    let id = response.insertedId;
    setCustomer(startValueCustomer);
    setBooking(startValueBooking);
    changeLoadedFromApi();
    localStorage.setItem("booking", JSON.stringify(booking));
    navigate(`/booking/${id}`);
  };

  
  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Bokning</H3>
      <Form onSubmit={handleSubmit}>
        <NumberOfGuestsWrapper>
          <H4>Antal personer</H4>
          <SelectGuestsAmount
            handleGuestsNum={handleGuestsNum}
            startNumber={1}
          />
        </NumberOfGuestsWrapper>
        <InputWrapper>
          <label htmlFor="start">Datum: </label>
          <input
            type="date"
            id="start"
            value={booking.date}
            onChange={handleChange}
            name="date"
            min="2023-03-09"
            max="2023-12-31"
            required
          />
        </InputWrapper>
        <BookingTimeDivWrapper>
          <SelectBookingTime
            handleBookingTime={handleBookingTime}
            isAvailableAtFive={availableTimes[0].isAvailable}
            isAvailableAtNine={availableTimes[1].isAvailable}
          />
        </BookingTimeDivWrapper>
        {availableTimes[0].isAvailable || availableTimes[1].isAvailable ? (
          <>
            <InputWrapper>
              <label htmlFor="firstname">Förnamn</label>
              <input
                type="text"
                id="firstname"
                placeholder="Förnamn"
                autoComplete="off"
                name="name"
                value={customer.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastname">Efternamn</label>
              <input
                type="text"
                id="lastname"
                placeholder="Efternamn"
                autoComplete="off"
                name="lastname"
                value={customer.lastname}
                onChange={handleChange}
                required
              />
              <label htmlFor="epost">Email</label>
              <input
                type="email"
                id="epost"
                placeholder="Epost"
                autoComplete="off"
                name="email"
                value={customer.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Mobil</label>
              <input
                type="tel"
                id="phone"
                autoComplete="off"
                placeholder="Tel-xxxxxxxxxx"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </InputWrapper>
            <SubmitButton type="submit">Boka</SubmitButton>
          </>
        ) : 
          <h4>Det finns inga lediga bord</h4>
        }
      </Form>
      {/* <GdprWrapper showGdpr = {showGdpr}>
        <Gdpr changeGdprStatus = {changeGdprStatus}/>
      </GdprWrapper> */}
    </>
  );
};
