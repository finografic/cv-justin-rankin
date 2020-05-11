const navMore = {
  items: [
    {
      name: 'Components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Charts',
          url: '/charts',
          icon: 'icon-pie-chart',
        },
        {
          name: 'Notifications',
          url: '/notifications',
          icon: 'icon-bell',
          children: [
            {
              name: 'Alerts',
              url: '/notifications/alerts',
              icon: 'icon-bell',
            },
            {
              name: 'Badges',
              url: '/notifications/badges',
              icon: 'icon-bell',
            },
            {
              name: 'Modals',
              url: '/notifications/modals',
              icon: 'icon-bell',
            },
          ],
        },
        {
          name: 'Widgets',
          url: '/widgets',
          icon: 'icon-calculator',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
      ],
    },
  ],
};

export default navMore;
