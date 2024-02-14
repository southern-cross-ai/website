export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-200">
      <h1 className="text-4xl font-bold z-10 text-blue-900">
        Southern Cross AI
      </h1>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:blur-2xl after:content-[''] before:dark:from-blue-900 before:dark:to-blue-800 before:dark:opacity-10 after:dark:from-blue-900 after:dark:via-blue-800 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    </main>
  );
}
