import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ Icon }) => {
  const [isSelected, setIsSelected] = useState();

  return (
    <nav className="mt-4 flex-1 p-3 pr-0">
      <ul className="flex flex-col gap-5 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "navbar bg-secondary" : "navbar"
            }
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Sobre Mim
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projetos"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "navbar bg-secondary" : "navbar"
            }
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Projetos
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiencia"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "navbar bg-secondary" : "navbar"
            }
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Experiência
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/educacao"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "navbar bg-secondary" : "navbar"
            }
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Educação
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "navbar bg-secondary" : "navbar"
            }
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Contato
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
