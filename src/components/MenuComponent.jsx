import { Link } from "react-router-dom";

const Menu = ({ Icon }) => {
  return (
    <nav className="mt-4 flex-1 p-3 pr-0">
      <ul className="flex flex-col gap-5 ">
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 hover:bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer border border-primary hover:border-gray-700"
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Sobre Mim
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/projetos"
            className="flex items-center gap-3  hover:bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer border border-primary hover:border-gray-700"
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Projetos
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/experiencia"
            className="flex items-center gap-3  hover:bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer border border-primary hover:border-gray-700"
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Experiência
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/educacao"
            className="flex items-center gap-3  hover:bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer border border-primary hover:border-gray-700"
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Educação
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/contato"
            className="flex items-center gap-3  hover:bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer border border-primary hover:border-gray-700"
          >
            <Icon color="white" size={25} name="User" />
            <span className="text-white font-mono text-base tracking-wider">
              Contato
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
