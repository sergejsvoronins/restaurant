import { Link } from "react-router-dom";
import { HomeBookingButton } from "../styled/Buttons";
import { H1, H4, RestaurantSlogan } from "../styled/Headings";

export const Home = () => {
  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <RestaurantSlogan>
        Njut av traditionell husmanskost tillagad med kärlek och omsorg. En
        smakupplevelse som tar dig tillbaka till gamla goda tider!
      </RestaurantSlogan>
      <Link to="/booking">
        <HomeBookingButton>Boka</HomeBookingButton>
      </Link>
    </>
  );
};
