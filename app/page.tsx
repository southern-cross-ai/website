export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Working Together to Build Australia's <b></b> First Large Language
              Model
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center gap-4">
              {" "}
              {/* Flex container with gap */}
              <a
                href="https://docs.southerncross.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-t-cyan-500"
              >
                Get Started
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
                href="https://github.com/Southern-Cross-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-t-red-500"
              >
                Dicord
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
