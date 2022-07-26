import Link from "next/link";
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
  margin-left: 16px;
`;

const Anchor = styled.a`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--c-mercury);
  display: flex;
  font-size: 1.2rem;
  padding: 8px 16px;
  transition: border 0.25s;

  &:hover {
    border: 1px solid var(--c-sun);
  }
`;

const AnchorText = styled.div`
  margin-left: 8px;
  white-space: nowrap;
`;

export function Big() {
  return (
    <NavBar>
      <NavListElement>
        <ActiveLink href="/">
          <Emoji symbol="🏠" label="home" />
          <AnchorText>Home</AnchorText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/lagen-rechner">
          <FcCalculator />
          <AnchorText>Lagen Rechner</AnchorText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/rezepte">
          <Emoji symbol="🍜" label="rezepte" />
          <AnchorText>Rezepte</AnchorText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/hacky-sack">
          <Emoji symbol="🤸🏻‍♂️" label="hacky sack" />
          <AnchorText>Hacky Sack</AnchorText>
        </ActiveLink>
      </NavListElement>
      <NavListElement>
        <ActiveLink href="/about">
          <Emoji symbol="❔" label="about" />
          <AnchorText>About</AnchorText>
        </ActiveLink>
      </NavListElement>
    </NavBar>
  );
}
