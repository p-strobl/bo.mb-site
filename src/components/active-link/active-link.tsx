import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

interface IActiveLink {
  children: JSX.Element[] | JSX.Element;
  href: string;
}

interface IAnchor {
  isActive: boolean;
}

const Anchor = styled.a<IAnchor>`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--c-mercury);
  display: flex;
  font-size: 1.2rem;
  overflow-x: hidden;
  padding: 8px 16px;
  position: relative;

  &:hover {
    ::after {
      transform: translateX(0);
    }
  }

  ::after {
    background-color: var(--c-sun);
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
    transform: translateX(${(props) => (props.isActive ? "0" : "-100%")});
    transition: transform 0.25s;
  }
`;

export function ActiveLink({ children, href }: IActiveLink) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    router.push(href);
  };

  return (
    <Link href={href}>
      <Anchor isActive={router.asPath === href} onClick={handleClick}>
        {children}
      </Anchor>
    </Link>
  );
}
