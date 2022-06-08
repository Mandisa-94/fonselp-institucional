import React from "react";
import { Box } from "@mui/material";
import "../scss/Main.scss";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const SoyEmpresa = React.forwardRef((props, myref) => {
  return (
    <Box  ref={  myref } display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} className={'.container-auto'}>
      <Box className={'titleBox'}>
        <p className='titleBox_intro paragraph-s'>Soy empresa</p>
        <h2 className='titleBox_intro_title subtitle'>Potenciamos el impacto social de las empresas</h2>
        <p className=' titleBox_intro_title_text text'>En nuestra plataforma gratiuta encontrás ong alineadas con los objetivos de sostenibilidad de tu emporesa. Descubre los mejores aliados, ayuda realizando compras responsables, dale una nueva vida a lo que tu empresa ya no necesite.</p>
      </Box>
      <Box className={"boxCards"}>
        <Box className={"boxGratis"}>
          <Box className={"boxGratis_items"} mt={"5%"}>
            <h3 className={"h3 boxGratis_items_title"}>
              Proyectos con impacto
            </h3>
            <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
              <CheckOutlinedIcon className="check-blue" />
              <p className={"text"}>
                Ofrecer donaciones en especie, capacitaciones, pro bono,
                voluntariado y otros.
              </p>
            </Box>
            <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
              <CheckOutlinedIcon className="check-blue" />
              <p className={"text"}>
                Descubrir nuevas organizaciones alineadas con los objetivos de
                sostenibilidad de tu empresa.
              </p>
            </Box>
          </Box>
          <Box className={"boxGratis_items"}>
            <h3 className={"h3 boxGratis_items_title"}>Compras responsables</h3>
            <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
              <CheckOutlinedIcon className="check-blue" />
              <p className={"text"}>
                Acceder a una base de organizaciones que ofrecen productos y
                servicios con impacto social y ambiental.
              </p>
            </Box>
            <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
              <CheckOutlinedIcon className="check-blue" />
              <p className={"text"}>
                Realizar compras inclusivas con impacto social y ambiental.
              </p>
            </Box>
          </Box>
          <Box className={"boxGratis_items"}>
            <h3 className={"h3"}>Scrap</h3>
            <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
              <CheckOutlinedIcon className="check-blue" />
              <p className={"text"}>
                Encontrar organizaciones cercanas que puedan necesitar tu scrap
                o lo que ya no uses.
              </p>
            </Box>
            <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
              <CheckOutlinedIcon className="check-blue" />
              <p className={"text"}>
                Reducir tu impacto ambiental y acercar ayuda a quien la
                necesita.
              </p>
            </Box>
          </Box>
          <Box>
            <button className={"btn-usar-plataforma btn-gratis"}>
              Usar plataforma gratuita
            </button>
          </Box>
        </Box>

        <Box className={"boxPago"}>
          <Box className={"boxPago_item"}>
            <h3 className={"boxPago_item_title"}>Voluntariado corporativo</h3>
            <Box className={"boxPago_item_title_description"}>
              <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
                <CheckOutlinedIcon className="check-white" />
                <p className={"text-w"}>
                  Proponer oportunidades de voluntariado a tus colaboradores.
                </p>
              </Box>
              <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
                <CheckOutlinedIcon className="check-white" />
                <p className={"text-w"}>
                  Gestionar las horas dedicadas por cada voluntario y reconocer
                  su labor social.
                </p>
              </Box>
              <Box display={"flex"} textAlign={"left"} className={"boxIcon"}>
                <CheckOutlinedIcon className="check-white" />
                <p className={"text-w"}>Obtener reportes detallados.</p>
              </Box>
            </Box>
          </Box>
          <Box>
            <button className={"btn-usar-plataforma_blue btn-pago"}>
              Comenzar prueba gratuita
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default SoyEmpresa;
