import React from "react";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

export interface ITeacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        Aulas de Matemática bem estruturadas e expositiva.
        <br /> <br />
        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
        Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
        15 reais.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
