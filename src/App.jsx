import Icon from "./components/IconComponent";

function App() {
  return (
    <div className="h-screen bg-primary w-full flex gap-20">
      <div className="min-w-[300px] border-r-2 border-secondary flex flex-col ">
        <div className="header flex items-center justify-between p-5 mt-3">

          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-100"></div>
            <h1 className="text-white font-bold text-base">Guilherme Guia</h1>
          </div>
          <Icon name="Sun" color="white" size={25} />
        </div>

        <nav className="mt-4 flex-1 p-3 pr-0">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3 bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-normal text-base tracking-wider">
                Sobre Mim
              </span>
            </li>
            <li className="flex items-center gap-3  p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-normal text-base tracking-wider">
                Projetos
              </span>
            </li>
            <li className="flex items-center gap-3  p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-normal text-base tracking-wider">
                Experiência
              </span>
            </li>
            <li className="flex items-center gap-3  p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-normal text-base tracking-wider">
                Educação
              </span>
            </li>
            <li className="flex items-center gap-3 p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-normal text-base tracking-wider">
                Contato
              </span>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <nav >
            <ul className="flex items-center justify-around mr-3 px-5">
              <li>
                <Icon name="Github" color="white" size={25} />
              </li>
              <li>
                <Icon name="Github" color="white" size={25} />
              </li>
              <li>
                <Icon name="Github" color="white" size={25} />
              </li>
              <li>
                <Icon name="Github" color="white" size={25} />
              </li>
              <li>
                <Icon name="Github" color="white" size={25} />
              </li>
            </ul>
          </nav>
          <div className="w-full h-[1px] bg-secondary"></div>
          <span className="text-white self-center pb-3">
            Feito com <span>💜</span>
          </span>
        </div>
      </div>
      <div className="text-white ">salve</div>
    </div>
  );
}

export default App;
