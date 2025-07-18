import LoginForm from 'components/authentication/LoginForm';
import ExperienceForm from 'components/pages/user/settings/ExperienceForm';
import CreatePost from 'components/app/social/feed/CreatePost';
import Compose from 'components/app/email/compose/Compose';
import EventUpload from 'components/app/events/create-an-event/EventUpload';
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';

import PersonalForm from 'components/wizard/PersonalForm';
import { useForm } from 'react-hook-form';
import paths from 'routes/paths';

const Forms = () => {
  const [experienceFormCollapsed, setExperienceFormCollapsed] = useState(false);

  const {
    register,
    formState: { errors },
    setValue
  } = useForm();

  return (
    <>
      <WidgetSectionTitle
        icon="file-alt"
        title="Forms"
        subtitle="Get different types of data from the user by using Falcon's customizable form."
        transform="shrink-2"
        className="mb-4 mt-6"
      />

      <Row className="g-0">
        <Col lg={5} className="pe-lg-2">
          <Row className="g-0 h-100 align-items-stretch">
            <Col lg={12} className="mb-3">
              <Card className="h-lg-100">
                <Card.Body className="p-4 p-sm-5"></Card.Body>
              </Card>
            </Col>
            <Col lg={12} className="mb-3">
              <Card className="h-lg-100 text-center">
                <Card.Body className="p-4 p-sm-5"></Card.Body>
              </Card>
            </Col>
            <Col lg={12} className="mb-3">
              <Card className="h-lg-100">
                <Card.Header className="bg-shape bg-circle-shape text-center p-2">
                  <Link
                    className="text-white font-sans-serif fw-bolder fs-5 z-1 position-relative"
                    to="/"
                  >
                    falcon
                  </Link>
                </Card.Header>
                <Card.Body className="p-4 p-sm-5">
                  <Flex alignItems="center" justifyContent="between">
                    <h3>Login</h3>
                    <p className="mb-0 fs-10">
                      <span className="fw-semibold">New User? </span>
                      <Link to={paths.splitRegister}>Create account</Link>
                    </p>
                  </Flex>
                  <LoginForm layout="split" hasLabel />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={7} className="ps-lg-2 mb-3">
          <Row className="g-0 h-100 align-items-stretch">
            <Col lg={12} className="mb-3">
              <Card className="h-100">
                <Card.Header>
                  <h5 className="mb-0">Experiences</h5>
                </Card.Header>
                <Card.Body className="bg-body-tertiary pb-0">
                  <ExperienceForm
                    collapsed={experienceFormCollapsed}
                    setCollapsed={setExperienceFormCollapsed}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="h-100">
                <Card.Header>
                  <h5 className="mb-0">Profile</h5>
                </Card.Header>
                <Card.Body className="bg-body-tertiary pb-0">
                  <PersonalForm
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={5}>
          <Card className="h-lg-100 text-center">
            <Card.Body className="p-4 p-sm-5"></Card.Body>
          </Card>
        </Col>
        <Col lg={7}>
          <CreatePost className="h-100" />
        </Col>
      </Row>
      <div className="mb-3">
        <Compose />
      </div>

      <EventUpload />
    </>
  );
};

export default Forms;
