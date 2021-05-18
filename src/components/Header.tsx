import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";

import ButtonLogin from './ButtonLogin';
import ButtonLogout from './ButtonLogout';

const Header = () => {

  const { user, isAuthenticated } = useAuth0();

  return (
    <header>
      <Container>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <h1>Todo</h1>
            {isAuthenticated && user && (
              <p>Hi {user.nickname}. Your todos:</p>
            )}
          </Col>
          <Col>
            {!isAuthenticated && (<ButtonLogin />)}
            {isAuthenticated && (<ButtonLogout />)}
          </Col>
        </Row>
      </Container>
    </header>
  );

};

export default Header;