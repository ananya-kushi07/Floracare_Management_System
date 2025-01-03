const navItems = [
    {
      label: "Home",
      route: "/",
      icon: <i className="fa-solid fa-house"></i>,
      accessRoles:['*'],
      auth:[false,true]
    },
    {
      label: "Guide",
      route: "/guide",
      icon: <i className="fa-solid fa-book"></i>,
      accessRoles:['*'],
      auth:[false,true]
    },
    {
      label: "Login",
      route: "/login",
      icon: <i className="fa-solid fa-bookmark"></i>,
      accessRoles:["*"],
      auth:[false]
    },
    {
      label: "coupon center",
      route: "/dashboard/coupon",
      icon: <i className="fa-solid fa-ticket"></i>,
      accessRoles:['admin','coordinator','volunteer','participant','mentor'],
      auth:[true]
    },
    {
      label: "canteen",
      route: "/dashboard/canteen",
      icon: <i className="fa-solid fa-utensils"></i>,
      accessRoles:['admin','coordinator'],
      auth:[true]
    },
    {
      label: "teams",
      route: "/dashboard/team",
      icon: <i className="fa-solid fa-users"></i>,
      accessRoles:['admin','coordinator'],
      auth:[true]
    },
    {
      label: "Announcements",
      route: "/dashboard/announcements",
      icon: <i className="fa-solid fa-bullhorn"></i>,
      accessRoles:['admin','coordinator'],
      auth:[true]
    },
    {
      label: "staffs",
      route: "/dashboard/staff",
      icon: <i className="fa-solid fa-users"></i>,
      accessRoles:['admin'],
      auth:[true]
    },
    {
      label: "Profile",
      route: "/profile",
      icon: <i className="fa-solid fa-user"></i>,
      accessRoles:['admin','coordinator','volunteer','participant','mentor'],
      auth:[true]
    }
  ];

  export default navItems;