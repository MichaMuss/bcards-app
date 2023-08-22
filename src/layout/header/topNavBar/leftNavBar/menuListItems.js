import ROUTES from "../../../../routes/routesModel";



const menuListItems = new Array(
    {
        title: "Cards",
        navTo: ROUTES.CARDS,
        userDepKey: null,
        userDepValue: null,
    },
    {
        title: "About",
        navTo: ROUTES.ABOUT,
        userDepKey: null,
        userDepValue: null,
    },
    {
        title: "My Cards",
        navTo: ROUTES.MY_CARDS,
        userDepKey: "isBusiness",
        userDepValue: true,
    },
    {
        title: "Favorite Cards",
        navTo: ROUTES.FAV_CARDS,
        userDepKey: "",
        userDepValue: null,
    },
    {
        title: "Sandbox",
        navTo: ROUTES.SANDBOX,
        userDepKey: "isAdmin",
        userDepValue: true,
    },
    {
        title: "CRM",
        navTo: ROUTES.ADMIN,
        userDepKey: "isAdmin",
        userDepValue: true,
    },
    {
        title: "ErrorPage",
        navTo: "NotExistedRoute",
        userDepKey: "isAdmin",
        userDepValue: true,
    });

export default menuListItems;