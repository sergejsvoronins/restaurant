import { useState } from "react";
import { BookingTimeWrapper } from "../styled/Wrappers";

interface IBookingTime {
  bookingTime: string;
  isSelected: boolean;
}

interface ISelectBookingTimeProps {
    handleBookingTime(bookingTime:string):void,
    isAvailableAtFive: boolean,
    isAvailableAtNine: boolean
}

export const SelectBookingTime = (props: ISelectBookingTimeProps) => {
  const [time, setTime] = useState<IBookingTime[]>([
    { bookingTime: "17:00", isSelected: true },
    { bookingTime: "21:00", isSelected: false },
  ]);
  const handleClick = (item: IBookingTime) => {
    props.handleBookingTime(item.bookingTime);
    let options = [...time];
    options.map((o) => (o.isSelected = false));
    options[
      options.findIndex((o) => o.bookingTime === item.bookingTime)
    ].isSelected =
      !options[options.findIndex((o) => o.bookingTime === item.bookingTime)]
        .isSelected;
    setTime(options);
    }
   
    
    const html = time.map((item,i)=>{
        if(i===0){
            if(props.isAvailableAtFive){
                return (
                    
                    <BookingTimeWrapper 
                        key={i} 
                        onClick={()=>{handleClick(item)}} 
                        selected = {item.isSelected} 
                        isTableAvailable = {props.isAvailableAtFive}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
                )
            }
            else {
                return (
                    
                    <BookingTimeWrapper 
                        key={i} 
                        selected = {false} 
                        isTableAvailable = {props.isAvailableAtFive}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
                )
            }
        }
        else if(i===1){
            if(props.isAvailableAtNine){
                return (
                    
                    <BookingTimeWrapper 
                        key={i} 
                        onClick={()=>{handleClick(item)}} 
                        selected = {item.isSelected} 
                        isTableAvailable = {props.isAvailableAtNine}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
                )
            }
            else {
                return (
                    
                    <BookingTimeWrapper 
                        key={i} 
                        selected = {false} 
                        isTableAvailable = {props.isAvailableAtNine}>
                        {item.bookingTime}
                    </BookingTimeWrapper>
                )
            }
        }
    })
  return <>{html}</>;
};
