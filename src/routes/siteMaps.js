export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie'
    }
  ]
};

export const roomManagementRoutes = {
  label: 'Room Management',
  children: [
    {
      name: 'Rooms',
      to: '/room-management/rooms',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Categories',
      to: '/room-management/categories',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Facilities',
      to: '/room-management/facilities',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Bookings',
      to: '/room-management/bookings',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Guests',
      to: '/room-management/guests',
      icon: 'chart-pie',
      active: true
    }
  ]
};
export const laundaryManagementRoutes = {
  label: 'Laundry Management',
  children: [
    {
      name: 'Orders',
      to: 'laundry-management/orders',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Scheduling',
      to: 'laundry-management/scheduling',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Usage Analytics',
      to: 'laundry-management/usage-analytics',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Tracking & Notifications',
      to: 'laundry-management/tracking-notifications',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Inventory',
      to: 'laundry-management/inventory',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Itemized Billing',
      to: 'laundry-management/itemized-billing',
      icon: 'chart-pie',
      active: true
    }
  ]
};

export const staffManagementRoutes = {
  label: 'Staff Management',
  children: [
    {
      name: 'Staff',
      to: '/staff-management/staff',
      icon: 'user',
      active: true
    },
    {
      name: 'Attendance',
      to: '/staff-management/attendance',
      icon: 'calendar-check',
      active: true
    },
    {
      name: 'Tasks',
      to: '/staff-management/tasks',
      icon: 'calendar-check',
      active: true
    },
    {
      name: 'Staff Categories',
      to: '/staff-management/staff-categories',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Roll Management',
      to: '/staff-management/roll-management',
      icon: 'chart-pie',
      active: true
    }
  ]
};

export const foodManagementRoutes = {
  label: 'Food Management',
  children: [
    {
      name: 'Menu',
      to: '/menu',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Items',
      to: '/items',
      icon: 'chart-pie',
      active: true
    },
    {
      name: 'Inventory',
      to: '/inventory',
      icon: 'chart-pie',
      active: true
    }
  ]
};

export const couponManagementRoutes = {
  label: 'Coupon Management',
  children: [
    {
      name: 'All Coupons',
      to: '/all-coupons',
      icon: 'chart-pie',
      active: true
    }
  ]
};

export const affiliateManagementRoutes = {
  label: 'Affiliate Management',
  children: [
    {
      name: 'All Coupons',
      to: '/all-coupons',
      icon: 'chart-pie',
      active: true
    }
  ]
};

export const settingsRoutes = {
  label: 'Settings',
  children: [
    {
      name: 'Financial Settings',
      to: '/financial-settings',
      icon: 'wrench',
      active: true
    },
    {
      name: 'Property Settings',
      to: '/property-settings',
      icon: 'wrench',
      active: true
    }
  ]
};

export default [
  dashboardRoutes,
  roomManagementRoutes,
  laundaryManagementRoutes,
  staffManagementRoutes,
  couponManagementRoutes,
  affiliateManagementRoutes,
  settingsRoutes
];
