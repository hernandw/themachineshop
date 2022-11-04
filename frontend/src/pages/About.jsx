import React from "react";

import { Profile } from "../components/Profile";

export const About = () => {
  return (
    <div>
      <h1 className="about__title">¿Quienes somos?</h1>
      <div className="about__description">
        <p>
          The Machine Shop es una empresa familiar dedicada a la fabricación
          integral de artefactos para iluminación mediante el reciclaje que
          nació en pandemia, y hoy se encuentra liderando el mercado.{" "}
        </p>

        <p>
          Contamos con un moderno local donde exhibimos nuestros productos,
          todos únicos, dado que no los fabricamos en masa, todos son
          artesanales. Nuestro personal está capacitado para asesorarte y hacer
          realidad tu proyecto tomando la mejor decisión de compra.
        </p>

        <p>
          Somos sin dudas, la empresa líder en iluminación profesional y
          decorativa, aquirir tus productos en The Machine Shop te brinda la
          tranquilidad de saber que estás comprando calidad, innovación y
          también, una obra de arte.
        </p>

        <p>
          Estamos seguros que tu experiencia con The Machine Shop será 100%
          satisfactoria.
        </p>
      </div>
      <div className="card__person-container">
        <Profile
          img="https://media-exp1.licdn.com/dms/image/C4D03AQFtjP-DuNQLWw/profile-displayphoto-shrink_800_800/0/1648906312350?e=1672876800&v=beta&t=CM_911q7IAR-A7hqeJUiGDd1MxoP7GDhqC20_ITZWwc"
          name="Natalia Balbastro"
          position="Scrum Master"
          socialTwitter=""
          socialGithub=""
          socialLinkedin="https://www.linkedin.com/in/natibalbastro/"
        />

        <Profile
          img="https://media-exp1.licdn.com/dms/image/C4D03AQGiPdL9rqVnYA/profile-displayphoto-shrink_800_800/0/1641610921934?e=1672876800&v=beta&t=HR6v6BAIemMIHM1fTtLYSai0gdjnTlG2Fg19Dnza4l0"
          name="Dorian Battiato"
          position="Product Owner"
          socialTwitter=""
          socialGithub=""
          socialLinkedin="https://www.linkedin.com/in/dorian-battiato-303059188/"
        />

        <Profile
          img="https://avatars.githubusercontent.com/u/43607368?v=4"
          name="Williams Hernández"
          position="Full Stack Javascript"
          socialTwitter="https://twitter.com/hernandw"
          socialGithub="http://github.com/hernandw"
          socialLinkedin="https://www.linkedin.com/in/hernandw/"
        />
        <Profile
          img="https://avatars.githubusercontent.com/u/10404257?v=4"
          name="Rumer Tovar"
          position="Backend Dev"
          socialTwitter=""
          socialGithub=""
          socialLinkedin=""
        />
        <Profile
          img="https://media-exp1.licdn.com/dms/image/C4D03AQEx7jRuQL7oNw/profile-displayphoto-shrink_800_800/0/1648586360516?e=1672876800&v=beta&t=Cc_Qba8u6DOSocAPSYx-8Y4pItNGNDMweKwUdP285Co"
          name="Jazmín Saavedra"
          position="Diseñadora UX/UI"
          socialTwitter=""
          socialGithub=""
          socialLinkedin="https://www.linkedin.com/in/jazmin-saavedra/"
        />
        <Profile
          img="https://avatars.githubusercontent.com/u/59578988?s=400&u=9329bfcf386cb0c402410bc7b84833ec00fbf012&v=4"
          name="Damian Aguirre"
          position="Frontend Dev"
          socialTwitter=""
          socialGithub=""
          socialLinkedin="https://www.linkedin.com/in/damian-javier-aguirre-cerullo-55335522a/"
        />
        <Profile
          img="https://media-exp1.licdn.com/dms/image/D4D35AQEYeNDCvynhwA/profile-framedphoto-shrink_800_800/0/1662511223846?e=1668189600&v=beta&t=n5K6WkK0hNmQAvT3s57Zwm9O4HYYC4MiXVQHktNqPUw"
          name="Virginia Bellizi"
          position="QA Tester Manual"
          socialTwitter=""
          socialGithub=""
          socialLinkedin="https://www.linkedin.com/in/virginia-bellizzi-caballero-756b94241/"
        />
        <Profile img='https://media-exp1.licdn.com/dms/image/D4D35AQENpYr86J0T1g/profile-framedphoto-shrink_800_800/0/1662767168713?e=1668189600&v=beta&t=HCYVT7OAhuAOpIn5m48W8ran1jFC_I_vqoBu35VdZ7w'
        name='Hernan Reyes' position='QA Analyst' socialTwitter='' socialGithub='' socialLinkedin='https://www.linkedin.com/in/hernanemanuelreyes/'/> 
      </div>
    </div>
  );
};
