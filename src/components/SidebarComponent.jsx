import Menu from "./MenuComponent";

const Sidebar = ({ Icon }) => {
  return (
    <div className="min-w-[300px] border-r-2 border-secondary flex flex-col ">
      <div className="header flex items-center justify-between p-5 mt-3">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-100"></div>
          <h1 className="text-white font-bold text-base">Guilherme Guia</h1>
        </div>
        <Icon name="Sun" color="white" size={25} />
      </div>

      <Menu Icon={Icon}/>

      <div className="flex flex-col gap-4">
        <nav>
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
  );
};

export default Sidebar;
