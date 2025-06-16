import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PublicOnlyRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/dashboard" replace /> : children;
};

PublicOnlyRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicOnlyRoute;
