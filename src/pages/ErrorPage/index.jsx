import { MainNavigation } from "../../components/MainNavigation";
export const ErrorPage = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <h1>Ops...</h1>
        <p>Nao foi possível encontrar essa página</p>
      </main>
    </div>
  );
};
