export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/logo.webp')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Southern Cross AI</h1>
          <p className="mb-5">
            We are a research initiative aimed at developing Australia's first
            open-source Large Language Model (LLM). Our project aims brings
            together a diverse team of experts from academia, research,
            government, and business sectors, united by a shared vision of
            advancing AI technology in Australia.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
