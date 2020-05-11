// import navDev from 'config/nav-dev';

const navMain = {
  items: [
    // {
    //   divider: true,
    // },
    // {
    //   title: true,
    //   name: 'JUSTIN RANKIN',
    // },
    // {
    //   name: 'Contact',
    //   url: '/contact',
    //   // icon: 'icon-puzzle',
    // },
    {
      name: 'Profile',
      url: 'profile',
      // icon: 'icon-puzzle',
    },
    {
      name: 'Technologies',
      url: 'technologies',
      // icon: 'icon-puzzle',
    },
    {
      name: 'Principles',
      url: 'principles',
      // icon: 'icon-puzzle',
    },
    {
      name: 'Work Experience',
      url: 'work-experience',
      // icon: 'icon-puzzle',
    },
    {
      name: 'University Education',
      url: 'education',
      // icon: 'icon-puzzle',
    },
    {
      name: 'My Stack',
      url: 'my-stack',
      // icon: 'icon-puzzle',
    },
    {
      name: 'Example Projects',
      url: 'example-projects',
      // icon: 'icon-puzzle',
    },
    {
      name: 'Connected Study',
      url: 'connected-study',
      // icon: 'icon-puzzle',
    },
    {
      name: 'Languages',
      url: 'languages',
      // icon: 'icon-puzzle',
    },
  ],
};

const nav = Object.assign({
  items: [
    ...navMain.items,
    // ...navDev.items
  ],
});

export default nav;
