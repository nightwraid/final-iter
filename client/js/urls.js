const base = "http://127.0.0.1:5000/api/v1/";
module.exports = {
  paths: {
    base: base,
    users: {
      logout: base+"users/logout",
      create: base+"users/create",
      authenticate: base+"users/authenticate",
      update:base+"users/update",
      session: base+"users/session",
      get_username: base+"users/get_username",
    },
    credentials: {
      create: base+"credentials/create",
      update: base+"credentials/update",
      delete: base+"credentials/delete",
      get_all: base+"credentials/all",
      //get_mine: base+"credentials/created_by_me",
      get_one: base+"credentials/",
      get_some: base+"credentials/all",
      search: base+"credentials/all/search",
    },
    notes: {
      pages: {
        update: base+"notes/pages/update",
        delete: base+"notes/pages/delete",
        get_by_notebook: base+"notes/pages/by_notebook",
      },
      notebooks: {
        save: base+"notes/notebook/save",
        delete: base+"notes/notebooks/delete",
        get_some: base+"notes/notebook/all",

        search: base+"notes/notebook/search"
      }
    },

    redirects: {
      login_success: "index.html",
      logout_success: "login.html",
    }
  }
}
