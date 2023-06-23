import styles from "./style.module.css";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetaEnviar from "../../assets/arrow-right-thin.svg";

export const Contact = () => {
  const { handleSubmit, control, reset } = useForm();

  const notify = () => {
    toast.success("enviado com sucesso!", {
      position: "top-center",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onSubmit = (data, event) => {
    event.preventDefault();

    notify();
    reset({ email: "" });
    console.log(data);
  };

  return (
    <div className={styles["container"]}>
      <div>
        <h1>Faça parte da nossa comunidade</h1>
      </div>
      <div className={styles["container-formulario"]}>
        <p>
          Quer saber mais sobre nossos últimos tênis? Está interessado em
          desconto?Quer conhecer pessoas com o mesmo interesse em tênis que
          você? Junte-se a nossa comunidade agora!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  {...field}
                />
              )}
            />
          </label>
          <button type="submit">
            <img src={SetaEnviar} alt="" />
          </button>
          <ToastContainer
            position="top-center"
            autoClose={200}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  );
};
