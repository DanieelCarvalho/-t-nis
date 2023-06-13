import { Outlet } from "react-router-dom";
import { MainNavigation } from "../MainNavigation";

export const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};
