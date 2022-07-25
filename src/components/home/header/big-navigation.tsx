import Link from "next/link";
import styled from "styled-components";
import Emoji from "a11y-react-emoji";
import { FcCalculator } from "react-icons/fc";

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
  color: var(--prime-gray);
  display: flex;
  font-size: 1.2rem;
  padding: 8px 16px;
  transition: border 0.25s;

  &:hover {
    border: 1px solid var(--prime-white);
  }
`;

const AnchorText = styled.div`
  margin-left: 8px;
  white-space: nowrap;
`;

export default function BigNavigation() {
  return (
    <NavBar>
      <NavListElement>
        <Link href="/">
          <Anchor>
            <Emoji symbol="🏠" label="home" />
            <AnchorText>Home</AnchorText>
          </Anchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/lagen-rechner">
          <Anchor>
            <FcCalculator />
            <AnchorText>Lagen Rechner</AnchorText>
          </Anchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/rezepte">
          <Anchor>
            <Emoji symbol="🍜" label="rezepte" />
            <AnchorText>Rezepte</AnchorText>
          </Anchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/hacky-sack">
          <Anchor>
            <Emoji symbol="🤸🏻‍♂️" label="hacky sack" />
            <AnchorText>Hacky Sack</AnchorText>
          </Anchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/about">
          <Anchor>
            <Emoji symbol="❔" label="about" />
            <AnchorText>About</AnchorText>
          </Anchor>
        </Link>
      </NavListElement>
    </NavBar>
  );
}
