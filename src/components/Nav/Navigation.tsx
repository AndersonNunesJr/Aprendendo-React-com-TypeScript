import { Header, Logo, Nav, NavbarContain, NavButton } from "components/Nav";

export function Navigation() {
  return (
    <Header>
      <NavbarContain>
        <Logo />
        <Nav />
        <NavButton />
      </NavbarContain>
    </Header>
  );
}
