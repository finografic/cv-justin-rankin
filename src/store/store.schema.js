export default {
  time: new Date(),
  locale: 'es',
  localeTransition: false,
  name: 'Justin',
  unreadCount: 1,
  sidebar: { isOpen: false },

  colorAccent: 'rgba(168, 136, 106, 0.9)',
  // $color-accent-light: lighten($color-accent,10%);
  // $color-accent-dark: darken($color-accent,15%);

  route: {
    previous: {
      key: undefined,
      pathname: undefined,
      root: undefined,
    },
  },

  page: {
    title: '',
    icon: '',
    type: '', // OR "mode" ?? list, single, edit... etc
    info: [], // OR "summary" ?? total_entries, total_memory/size, updated_date, updated_id
  },
};
