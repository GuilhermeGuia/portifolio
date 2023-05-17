import Navegation from "./components/NavegationComponent";
import Sidebar from "./components/SidebarComponent";
import Icon from './components/IconComponent';

function App() {
  return (
    <div className="h-screen bg-primary w-full flex">
      <Sidebar Icon={Icon} />
      <div className="text-white w-full">

        <Navegation Icon={Icon}/>

        <main>
          <div className="container max-w-[560px] m-auto flex flex-col gap-4 mt-14">
            <section>
              <h2 className="font-bold text-lg mb-3">Informações Gerais</h2>
              <p className="font-light text-base leading-7">
                Olá, me chamo Guilherme Guia, e sou um desenvolvedor Front-End
                👨‍💻. Sou fascinado por tecnologia e inovação 💻. No meu tempo
                livre eu costumo estudar para aprimorar minhas habilidades ou ir
                a academia ou jogar com meus amigos.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg mb-3">Interesses</h2>
              <p className="font-light text-base">
                Busco aprimorar meus conhecimentos e habilidades, com o intuito
                de cada vez alavancar minha carreira e gerar resultados por onde
                passar.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg mb-3">Essas são algumas tecnologias que sou bom</h2>
              <div>

              </div>
            </section>

            <section>
              <h2 className="font-bold text-lg mb-3">Habilidades Gerais</h2>
              <ul className="font-light flex flex-col gap-2">
                <li>Pesquisa</li>
                <li>Resolução de problemas</li>
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
