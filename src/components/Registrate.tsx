import { Box } from "@mui/system";
import { SubmitHandler, useForm } from "react-hook-form";
import "../scss/Main.scss";

type Inputs = {
  nombre: string;
  exampleRequired: string;
};

const Registrate = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(errors);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className={"container-auto"}
    >
      <Box className={"box-form"} display={"flex"}>
        <Box className={"box-form_img"}>
          <img src="../assets/image-form.png" alt="" />
        </Box>
        <Box className={"box-form_inputs"}>
          <Box className={"titleBox"}>
            <p className="titleBox_intro paragraph-s">Regístrate</p>
            <h2 className="titleBox_intro_title subtitle">
              Un mundo mejor se está construyendo, sé parte
            </h2>
            <p className=" titleBox_intro_title_text text">
              Si quieres saber más sobre el voluntariado corporativo, solicitar
              una demo o tienes alguna duda, puedes llenar el formulario o
              escribirnos a contacto@fonselp.org y con gusto te responderemos.
            </p>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mt={"4%"}
          >
            <label htmlFor="nombre">
              Nombre - {errors.nombre && <span>This field is required</span>}
            </label>
            <input
              type="text"
              id="nombre"
              className="input"
              placeholder="Nombre y apellido"
              {...register("nombre", { required: true })}
            />

            <label htmlFor="empresa"></label>
            <input
              type="text"
              id="empresa"
              className="input"
              placeholder="Nombre de la empresa / Organización"
            />
            <label htmlFor="correo"></label>
            <input
              type="email"
              id="correo"
              className="input"
              placeholder="Correo electrónico empresarial"
            />
            <label htmlFor="tipo-org"></label>
            <input
              type="text"
              id="tipo-org"
              className="input"
              placeholder="¿Qué tipo de organización eres?"
            />
            <label htmlFor="mensaje"></label>
            {/* <input type="textarea" id="mensaje" className="input" placeholder="Mensaje" /> */}
            <textarea
              id="mensaje"
              className="input"
              placeholder="Mensaje"
              cols={80}
              rows={8}
            />
            <Box>
              <button
                onClick={handleSubmit(onSubmit)}
                className="btn-usar-plataforma"
              >
                Registrarme gratis
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Registrate;
