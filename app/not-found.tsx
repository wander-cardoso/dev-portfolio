import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  return (
    <>
      <header>
        <title>Não encontrado | Wander</title>
      </header>
      <div className="flex flex-col bg-secondary items-center w-auto justify-center gap-2  py-24">
        <h1 className="text-sm  overflow-hidden  lg:text-3xl text-primary  h-12 text-center animate-bounce">
          Página não encontrada clique na imagem 👇🏼 para retornar a tela
          inicial!
        </h1>
        <Link href="/">
          <div>
            <Image
              src="https://i.imgur.com/BddXWWa_d.png?maxwidth=520&shape=thumb&fidelity=high"
              alt="imagem de erro 404"
              width={800}
              height={800}
              className=" rounded-lg opacity-90 shadow-xl shadow-gray-400"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default notFound;
