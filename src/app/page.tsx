import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Hello everyone
              <span className="sm:block">
                salah almalawi
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
