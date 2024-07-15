"use client";
import Colors from "@/app/_utils/Colors";
import { devices } from "@/app/_utils/Responsive";
import Link from "next/link";
import { useState } from "react";
import { styled } from "styled-components";
import { AppRoutes } from "@/app/_utils/Router";
import { ILang } from "@/app/lang/dictionaries/ILang";
import NavLink from "@/app/_utils/NavLink";
import Image from "next/image";
import { getImage } from "@/app/_utils/Media";

import logo from "@/public/assets/images/logo-blue-2.png";

//Navbar component props
interface INavbarProps {
  lang: ILang;
}

//Navbar component styles and animations
const navbarSpeed = ".5s";

export default function Navbar({ lang }: INavbarProps) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Methods
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledComponent>
      <Wrapper>
        <Link href={AppRoutes.Home}>
          <WrapperLogo
            src={logo}
            alt="Move2Cloud"
            width={200}
            height={50}
            quality={100}
            priority={true}
            unoptimized={true}
            // alt={process.env.REACT_APP_NAME}
          />
        </Link>
        <WrapperToggle open={isOpen} onClick={onToggle} />
      </Wrapper>
      <Menu>
        <MenuItems open={isOpen}>
          <MenuItem>
            <MenuItemLink
              href={AppRoutes.Home}
              customClassName={({ isActive, isPending }) => {
                return isPending ? "pending" : isActive ? "active" : "";
              }}
            >
              {lang.navbar.links.home}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href={AppRoutes.Services}
              customClassName={({ isActive, isPending }) => {
                return isPending ? "pending" : isActive ? "active" : "";
              }}
            >
              {lang.navbar.links.services}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href={AppRoutes.Carriers}
              customClassName={({ isActive, isPending }) => {
                return isPending ? "pending" : isActive ? "active" : "";
              }}
            >
              {lang.navbar.links.carriers}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href={AppRoutes.About}
              customClassName={({ isActive, isPending }) => {
                return isPending ? "pending" : isActive ? "active" : "";
              }}
            >
              {lang.navbar.links.aboutUs}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="https://ui.boondmanager.com/?customerCode=move2cloud"
              target="_blank"
              customClassName={({ isActive, isPending }) => {
                return isPending ? "pending" : isActive ? "active" : "";
              }}
            >
              {lang.navbar.links.boond}
            </MenuItemLink>
          </MenuItem>
        </MenuItems>
        <MenuButtonLink href={AppRoutes.Contact}>
          {lang.navbar.contact}
        </MenuButtonLink>
      </Menu>
    </StyledComponent>
  );
}

const StyledComponent = styled.nav`
  border-bottom: 1px solid ${Colors.lightGray};
  padding: 20px 20px 0 20px;

  @media screen and (${devices.lg}) {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const Menu = styled.div`
  @media screen and (${devices.lg}) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

interface MenuItemsProps {
  open: boolean;
}

const MenuItems = styled.ul<MenuItemsProps>`
  padding: 0;
  list-style: none;
  -webkit-transition: max-height ${navbarSpeed} ease-in;
  -moz-transition: max-height ${navbarSpeed} ease-in;
  -ms-transition: max-height ${navbarSpeed} ease-in;
  -o-transition: max-height ${navbarSpeed} ease-in;
  transition: max-height ${navbarSpeed} ease-in;
  overflow: hidden;
  max-height: 0;

  @media screen and (${devices.lg}) {
    max-height: initial;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  ${(props) => {
    if (props.open) {
      return `
        max-height: 200px;
      `;
    }
  }}
`;
const MenuItem = styled.li`
  margin-bottom: 20px;

  @media screen and (${devices.lg}) {
    margin: 0 20px;
  }
`;
const MenuItemLink = styled(NavLink)`
  color: ${Colors.primary};
  text-decoration: none;

  &.active {
    border-bottom: 1px solid ${Colors.primary};
  }
`;
const MenuButtonLink = styled(NavLink)`
  color: white;
  background-color: ${Colors.primary};
  border-radius: 10px;
  padding: 10px 20px;
  display: block;
  transition: 0.2s;
  font-weight: 500;
  margin-bottom: 20px;

  &:hover {
    transition: 0.2s;
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
  }

  @media screen and (${devices.lg}) {
    margin-left: auto;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperLogo = styled(Image)`
  display: block;
`;

interface WrapperToggleProps {
  open: boolean;
}

const WrapperToggle = styled.div<WrapperToggleProps>`
  width: 20px;
  height: 2px;
  background-color: ${Colors.primary};
  position: relative;
  -webkit-transition: -webkit-transform 0.1s ease-in;
  -ms-transition: -ms-transform 0.1s ease-in;
  transition: transform 0.1s ease-in;
  cursor: pointer;

  @media screen and (${devices.lg}) {
    display: none;
  }

  ${(props) => {
    if (props.open) {
      return `
              background-color: transparent;
  
          &::before {
              content: ""; 
              top: 0 !important;
              transform: rotate(45deg);
              background-color: transparent;
              -webkit-transition: inherit;
              -ms-transition: inherit;
              transition: inherit;   
          }
  
          &::after {
              content: "";
              top: 0 !important;
              transform: rotate(-45deg);
              -webkit-transition: inherit;
              -ms-transition: inherit;
              transition: inherit;
          }
          `;
    }
  }}

  &::before {
    content: "";
    position: absolute;
    top: -7px;
    width: inherit;
    height: inherit;
    background-color: ${Colors.primary};
    -webkit-transition: inherit;
    -ms-transition: inherit;
    transition: inherit;
  }

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    width: inherit;
    height: inherit;
    background-color: ${Colors.primary};
    -webkit-transition: inherit;
    -ms-transition: inherit;
    transition: inherit;
  }
`;
