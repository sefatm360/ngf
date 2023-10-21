import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileSidebar from '../utils/ProfileSidebar';

const ProfileSidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='profileWrapper py-5'>
      <Container>
        <Row>
          <Col lg={3}>
            <ProfileSidebar />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileSidebarLayout;
