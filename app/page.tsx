export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Working Together to Build
              <br />
              <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                Australia's
              </span>
              <br />
              First Large Language Model
            </h1>

            <p className="py-6">
              "Empowering innovation down under for a smarter and more connected
              future."
            </p>
            <div className="flex justify-center gap-4">
              {" "}
              {/* Flex container with gap */}
              <a
                href="https://huggingface.co/SouthernCrossAI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-t-cyan-500"
              >
                Hugging Face
              </a>
              <a
                href="https://github.com/Southern-Cross-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline  border-t-green-600 "
              >
                Github
              </a>
              <a
                href="https://discord.gg/Hrs3SgRk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-t-red-500"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
