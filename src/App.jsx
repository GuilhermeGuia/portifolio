import Icon from "./components/IconComponent";

function App() {
  return (
    <div className="h-screen bg-primary w-full flex">
      <div className="min-w-[300px] border-r-2 border-secondary flex flex-col ">
        <div className="header flex items-center justify-between p-5 mt-3">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-100"></div>
            <h1 className="text-white font-bold text-base">Guilherme Guia</h1>
          </div>
          <Icon name="Sun" color="white" size={25} />
        </div>

        <nav className="mt-4 flex-1 p-3 pr-0">
          <ul className="flex flex-col gap-5 ">
            <li className="flex items-center gap-3 bg-secondary p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-light text-base tracking-wider">
                Sobre Mim
              </span>
            </li>
            <li className="flex items-center gap-3  p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-light text-base tracking-wider">
                Projetos
              </span>
            </li>
            <li className="flex items-center gap-3  p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-light text-base tracking-wider">
                Experiência
              </span>
            </li>
            <li className="flex items-center gap-3  p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-light text-base tracking-wider">
                Educação
              </span>
            </li>
            <li className="flex items-center gap-3 p-3 pl-5 rounded-s-xl cursor-pointer">
              <Icon color="white" size={25} name="User" />
              <span className="text-white font-light text-base tracking-wider">
                Contato
              </span>
            </li>
          </ul>
        </nav>

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
      <div className="text-white w-full">
        <header className="border-b-2 border-secondary p-5 flex gap-3">
          <Icon color="white" size={25} name="User" />
          <h1 className="font-bold text-xl">Sobre Mim</h1>
        </header>

        <main>
          <div className="container max-w-[500px] m-auto flex flex-col gap-4 mt-14">
            <section>
              <h2 className="font-bold text-lg">Informações Gerais</h2>
              <p className="font-light">
                Olá, me chamo Guilherme Guia, e sou um desenvolvedor Front-End
                👨‍💻. Sou fascinado por tecnologia e inovação 💻. No meu tempo
                livre eu costumo estudar para aprimorar minhas habilidades ou ir
                a academia ou jogar com meus amigos.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg">Interesses</h2>
              <p className="font-light">
                Busco aprimorar meus conhecimentos e habilidades, com o intuito
                de cada vez alavancar minha carreira e gerar resultados por onde
                passar.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg">Essas são algumas tecnologias que sou bom</h2>
              <div>

              </div>
            </section>

            <section>
              <h2 className="font-bold text-lg">Habilidades Gerais</h2>
              <ul className="font-light">
                <li>Resolução de problemas</li>
                <li>Pesquisa</li>
                <li>Desenvolvimento de Aplicações Web</li>
                <li>Desenvolvimento de Aplicações Responsivas</li>
              </ul>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
