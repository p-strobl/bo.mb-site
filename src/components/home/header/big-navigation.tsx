import Link from "next/link";
import styled from "styled-components";

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

const NavListAnchor = styled.a`
  padding: 8px 16px;
`;

export default function BigNavigation() {
  return (
    <NavBar>
      <NavListElement>
        <Link href="/lagen-rechner">
          <NavListAnchor>Lagen Rechner</NavListAnchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/rezepte">
          <NavListAnchor>Rezepte</NavListAnchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/hacky-sack">
          <NavListAnchor>Hacky Sack</NavListAnchor>
        </Link>
      </NavListElement>
      <NavListElement>
        <Link href="/about">
          <NavListAnchor>About</NavListAnchor>
        </Link>
      </NavListElement>
    </NavBar>
  );
}
