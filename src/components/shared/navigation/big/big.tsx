import Image from "next/image";
import styled from "styled-components";
import Emoji from "a11y-react-emoji";
import { FcCalculator } from "react-icons/fc";
import ActiveLink from "~components/active-link";

const NavBar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-right: -16px;
  padding: 24px 0;
`;

const NavListElement = styled.li`
  align-self: stretch;
  display: flex;
  margin-left: 16px;
`;

const LinkText = styled.div`
  margin-left: 8px;
  white-space: nowrap;
`;

export function Big() {
  return (
    <NavBar>
      <NavListElement>
        <ActiveLink href="/">
          <Emoji symbol="🏠" label="home" />
          <LinkText>Home</LinkText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/lagen-rechner">
          <FcCalculator />
          <LinkText>Lagen Rechner</LinkText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/rezepte">
          <Emoji symbol="🍜" label="rezepte" />
          <LinkText>Rezepte</LinkText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/hacky-sack">
          <Image src="/images/hacky-sign.png" alt="Hacky-Sack Logo" width={17} height={30} />
          <LinkText>Hacky Sack</LinkText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/about">
          <Emoji symbol="❔" label="about" />
          <LinkText>About</LinkText>
        </ActiveLink>
      </NavListElement>
    </NavBar>
  );
}
