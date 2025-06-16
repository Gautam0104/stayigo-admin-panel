import api from './api';

export const signupUser = async formData => {
  const payload = {
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    userType: 'Guest',
    signupWith: 'Email'
  };

  const response = await api.post('/auth/signup', payload);
  return response.data;
};

export const loginUser = async ({
  identifier,
  password,
  userType = 'Guest'
}) => {
  const response = await api.post('/auth/login', {
    identifier,
    password,
    userType
  });

  return response.data;
};
