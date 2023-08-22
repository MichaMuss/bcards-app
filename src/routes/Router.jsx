import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPage from "../cards/pages/CardsPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import FirstComponent from "../sandbox/components/FirstComponent";
import LifeCycle from "../sandbox/components/LifeCycle";
import SecondComponent from "../sandbox/components/SecondComponent";
import SandBox from "../sandbox/SandBox";
import EditUser from "../users/pages/EditUser";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import UserProfile from "../users/pages/UserProfile";
import ROUTES from "./routesModel";
import Country from "../sandbox/components/Country";
import Memoization from "../sandbox/components/Memoization";
import MyCounter from "../sandbox/components/MyCounter";
import Countires from "../sandbox/components/Countires";
import GrandComponent from "../sandbox/context/GrandComponent";
import TestForm from "../sandbox/forms/TestForm";
import CreateCardPage from "../cards/pages/CreateCardPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import Crm from "../admin/Crm";
import Users from "../admin/components/Users";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDIT_USER} element={<UserProfile swapColumns={true} />} />
      <Route path={`${ROUTES.EDIT_USER_ADMIN}/:id`} element={<EditUser />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile swapColumns={false} />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="first" element={<FirstComponent />} />
        <Route path="second" element={<SecondComponent />} />
        <Route path="life-cycle" element={<LifeCycle />} />
        <Route path="country" element={<Country />} />
        <Route path="memo" element={<Memoization />} />
        <Route path="counter" element={<MyCounter />} />
        <Route path="countries" element={<Countires />} />
        <Route path="grand" element={<GrandComponent />} />
        <Route path="form" element={<TestForm />} />
      </Route>
      <Route path={ROUTES.ADMIN} element={<Crm />}>
      <Route path="" element={<Users />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
