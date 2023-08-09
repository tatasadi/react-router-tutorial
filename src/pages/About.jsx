import { FaGithub } from "react-icons/fa";

export default function About() {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        See the source code on Github
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">

      </p>
      <div className="flex justify-center">
        <div className="flex justify-center items-center text-white gap-2 text-2xl border-white border w-fit p-4 rounded-md">
          <FaGithub />
          <a
            className=""
            href="https://github.com/tatasadi/react-router-tutorial"
            alt="Transistor"
            target="_blank"
          >react-router-tutorial</a>

        </div>
      </div>
      <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#0aa17c] opacity-25"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </div>
  </div>
}
