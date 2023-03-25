import  { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HamburgerLogo } from "./components/HamburgerLogo/HamburgerLogo";
import {
  GdprWrapper,
  HamburgerWrapper
} from "./components/styled/Wrappers";
import { FooterStyle } from "./components/styled/FooterStyle";

import { getBookings } from "./services/bookingService";
import { IBookingsAdmin } from "./models/IBookingsAdmin";
import { PageWrapper } from "./components/styled/Mains";
import { Header } from "./components/styled/Header";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { Nav } from "./components/styled/Nav";
import { Gdpr } from "./components/gdpr/Gdpr";

export interface IRestaurantContext {
  bookings: IBookingsAdmin[];
  changeLoadedFromApi(): void;
}

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [bookings, setBookings] = useState<IBookingsAdmin[]>([]);
  const [loadedFromApi, setLoadedFromApi] = useState<boolean>(false);
  const [showGdpr, setShowGdpr] = useState<boolean>(true);
  

  useEffect(() => {
    const getBookingData = async () => {
      let bookings = await getBookings();
      setBookings(bookings);
    };
    if (loadedFromApi) {
      return;
    }
    getBookingData();
    setLoadedFromApi(true);
  });
  const handleOpenMenu = (status: boolean) => {
    setOpen(status);
  };
  const changeLoadedFromApi = () => {
    setLoadedFromApi(false);
  };
  const changeGdprStatus = () =>{
    setShowGdpr(false);
  }
  const handleClick = () => {
    setOpen(false);
  }
  return (
    <div className="App">
      <Header>
        <Nav open={open}>
          <HamburgerMenu handleOpenMenu={handleOpenMenu} open={open}></HamburgerMenu>
        </Nav>
        <HamburgerWrapper>
          <HamburgerLogo handleOpenMenu={handleOpenMenu} open={open} />
        </HamburgerWrapper>
      </Header>
      <PageWrapper onClick={handleClick}>
        <Outlet context={{ bookings, changeLoadedFromApi }}></Outlet>
      </PageWrapper>
      <FooterStyle>
        <Footer></Footer>
      </FooterStyle>
      <GdprWrapper showGdpr = {showGdpr}>
          <Gdpr changeGdprStatus = {changeGdprStatus}/>
      </GdprWrapper>
    </div>
  );
}

export default App;
