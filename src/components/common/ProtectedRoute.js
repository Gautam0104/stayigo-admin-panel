import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? (
    children
  ) : (
    <Navigate to="/authentication/card/login" replace />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
