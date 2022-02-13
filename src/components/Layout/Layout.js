import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'components';
import { Header, MainNav, NavLink } from './Layout.styled';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const location = useLocation();
  const prevLocation = { from: location };

  return (
    <div className="Layout">
      <Header>
        <Container>
          <MainNav>
            <NavLink to="/" state={prevLocation}>
              Home
            </NavLink>

            <NavLink to="movies" state={prevLocation}>
              Movies
            </NavLink>
          </MainNav>
        </Container>
      </Header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
