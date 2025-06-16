// src/routes/index.js
import React from 'react';
import App from 'App';
import paths, { rootPaths } from './paths';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';

import Analytics from 'components/dashboards/analytics';
import Crm from 'components/dashboards/crm';
import Saas from 'components/dashboards/saas';
import Ecommerce from 'components/dashboards/e-commerce';
import Lms from 'components/dashboards/lms';

import Error404 from 'components/errors/Error404';
import Error500 from 'components/errors/Error500';

import CardLogin from 'components/authentication/card/Login';
import CardLogout from 'components/authentication/card/Logout';
import CardRegistration from 'components/authentication/card/Registration';
import CardForgetPassword from 'components/authentication/card/ForgetPassword';
import CardConfirmMail from 'components/authentication/card/ConfirmMail';
import CardPasswordReset from 'components/authentication/card/PasswordReset';
import CardLockScreen from 'components/authentication/card/LockScreen';

import Dashboard from 'components/dashboards/default';

import Test from '../components/pages/testing/Text';
import Welcome from 'components/pages/testing/Welcome';

import Room from '../components/room-management/rooms/Room';

import ProtectedRoute from 'components/common/ProtectedRoute';
import PublicOnlyRoute from 'components/common/PublicOnlyRoute';
import Categories from 'components/room-management/categories/Categories';
import Facilities from 'components/room-management/facilities/Facilities';
import Bookings from 'components/room-management/bookings/Booking';
import Guests from 'components/room-management/guests/Guests';
import AddRoom from 'components/room-management/rooms/AddRoom';
import LaundryOrders from '../components/laundry-management/orders/LaundryOrders';
import Scheduling from 'components/laundry-management/scheduling/Scheduling';
import UsageAnalytics from 'components/laundry-management/usage-analytics/UsageAnalytics';
import TrackingAndNotification from 'components/laundry-management/tracking-and-notification/TrackingAndNotification';
import InventoryManagement from 'components/laundry-management/inventory/InventoryManagement';
import ItemizedBilling from 'components/laundry-management/itemized-billing/ItemizedBilling';
import AddLaundryOrder from 'components/laundry-management/orders/AddLaundryOrder';
import AddSchedule from 'components/laundry-management/scheduling/AddSchedule';
import AddUsageAnalytics from 'components/laundry-management/usage-analytics/AddUsageAnalytics';
import AddTrackingAndNotification from 'components/laundry-management/tracking-and-notification/AddTrackingAndNotification';
import AddInventory from 'components/laundry-management/inventory/AddInventory';
import AddBilling from 'components/laundry-management/itemized-billing/AddBilling';
import Staff from 'components/staff-management/staff/Staff';

import Attendance from 'components/staff-management/attendance/Attendance';
import Tasks from 'components/staff-management/tasks/Tasks';
import StaffCategories from 'components/staff-management/staff-categories/StaffCategories';
import RoleManagement from 'components/staff-management/roll-management/RoleManagement';

const routes = [
  {
    element: <App />,
    children: [
      // Protected Routes
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: rootPaths.dashboardRoot,
            children: [
              { path: paths.analytics, element: <Analytics /> },
              { path: paths.crm, element: <Crm /> },
              { path: paths.saas, element: <Saas /> },
              { path: paths.ecommerce, element: <Ecommerce /> },
              { path: paths.lms, element: <Lms /> }
            ]
          },
          {
            path: '/room-management',
            children: [
              { path: 'rooms', element: <Room /> },
              {
                path: 'addroom',
                element: <AddRoom />
              },
              {
                path: 'categories',
                element: <Categories />
              },
              {
                path: 'facilities',
                element: <Facilities />
              },
              {
                path: 'bookings',
                element: <Bookings />
              },
              {
                path: 'guests',
                element: <Guests />
              }
            ]
          },
          {
            path: '/laundry-management',
            children: [
              { path: 'orders', element: <LaundryOrders /> },
              {
                path: 'add-orders',
                element: <AddLaundryOrder />
              },
              {
                path: 'scheduling',
                element: <Scheduling />
              },
              {
                path: 'usage-analytics',
                element: <UsageAnalytics />
              },
              {
                path: 'tracking-notifications',
                element: <TrackingAndNotification />
              },
              {
                path: 'inventory',
                element: <InventoryManagement />
              },
              {
                path: 'itemized-billing',
                element: <ItemizedBilling />
              },
              {
                path: 'add-scheduling',
                element: <AddSchedule />
              },
              {
                path: 'add-usage-analytics',
                element: <AddUsageAnalytics />
              },
              {
                path: 'add-tracking-notifications',
                element: <AddTrackingAndNotification />
              },
              {
                path: 'add-inventory',
                element: <AddInventory />
              },
              {
                path: 'generate-billing',
                element: <AddBilling />
              }
            ]
          },
          {
            path: '/staff-management',
            children: [
              {
                path: 'staff',
                element: <Staff />
              },
              {
                path: 'attendance',
                element: <Attendance />
              },
              {
                path: 'tasks',
                element: <Tasks />
              },
              {
                path: 'staff-categories',
                element: <StaffCategories />
              },
              {
                path: 'roll-management',
                element: <RoleManagement />
              }
            ]
          }
        ]
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />
          }
        ]
      },
      {
        path: 'test',
        element: (
          <ProtectedRoute>
            <Test />
          </ProtectedRoute>
        )
      },
      {
        path: 'welcome',
        element: (
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        )
      },

      // Auth Routes (PublicOnly)
      {
        path: rootPaths.authRoot,
        children: [
          {
            path: rootPaths.authCardRoot,
            children: [
              {
                path: paths.cardLogin,
                element: (
                  <PublicOnlyRoute>
                    <CardLogin />
                  </PublicOnlyRoute>
                )
              },
              {
                path: paths.cardRegister,
                element: (
                  <PublicOnlyRoute>
                    <CardRegistration />
                  </PublicOnlyRoute>
                )
              },
              {
                path: paths.cardLogout,
                element: <CardLogout />
              },
              {
                path: paths.cardForgotPassword,
                element: <CardForgetPassword />
              },
              {
                path: paths.cardResetPassword,
                element: <CardPasswordReset />
              },
              {
                path: paths.cardConfirmMail,
                element: <CardConfirmMail />
              },
              {
                path: paths.cardLockScreen,
                element: <CardLockScreen />
              }
            ]
          }
        ]
      },

      // Error Routes
      {
        path: rootPaths.errorsRoot,
        element: <ErrorLayout />,
        children: [
          { path: paths.error404, element: <Error404 /> },
          { path: paths.error500, element: <Error500 /> }
        ]
      },

      // Catch-all: redirect to 404
      {
        path: '*',
        element: <Navigate to={paths.error404} replace />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL
});

export default routes;
