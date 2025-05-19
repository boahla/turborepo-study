export const ROUTES = {
  HOME: "/",
  EXAM: {
    LIST: "/exam/list",
    // NEW: "/exam/new",
  },
  LIBRARY: {
    LIST: "/library/list",
    NEW: "/library/new",
    EDIT: (id: number) => `/library/${id}/edit`,
  },
  SURVEY: {
    LIST: "/survey/list",
    NEW: "/survey/new",
  },
};
