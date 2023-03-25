import { ChangeEvent } from "react";
import { HamburgerLogoInput } from "../styled/Inputs";
import { HamburgerLogoLabel } from "../styled/Labels";

interface IHamburgerLogoProps {
    handleOpenMenu(status:boolean): void;
    open: boolean;
}

export const HamburgerLogo = (props:IHamburgerLogoProps) => {

    const handleCLick = (e:ChangeEvent<HTMLInputElement>) => {
        props.handleOpenMenu(e.target.checked);
    }
    return (
        <>
            <HamburgerLogoLabel htmlFor="hamLogo" open = {props.open}>
                <div />
                <div />
            </HamburgerLogoLabel>
            <HamburgerLogoInput type="checkbox" id="hamLogo" onChange={(e)=>{handleCLick(e)}}></HamburgerLogoInput>
        </>
    )
}