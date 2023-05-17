
const Navegation = ({Icon}) => {
  return (
    <header className="border-b-2 border-secondary p-5 flex gap-3">
      <Icon color="white" size={25} name="User" />
      <h1 className="font-bold text-xl">Sobre Mim</h1>
    </header>
  );
};


export default Navegation;