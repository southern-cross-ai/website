import React from 'react';
import Link from 'next/link';

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
              "Empowering innovation down under for a smarter and more connected future."
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://huggingface.co/SouthernCrossAI" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-t-cyan-500">Hugging Face</a>
              <a href="https://github.com/Southern-Cross-AI" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-t-green-600">Github</a>
              <a href="https://discord.gg/nvVkJShz6K" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-t-red-500">Discord</a>
            </div>
            <Link href="#moreInfo" className="btn bg-blue-800 text-white px-6 py-3 text-lg rounded-md shadow-lg mt-4 transition duration-300 ease-in-out hover:bg-blue-900">
              More
            </Link>
          </div>
        </div>
      </div>
      <div id="moreInfo" className="bg-blue p-8">
        <div className="text-center max-w-4xl m-auto">
          <h2 className="text-5xl font-bold mb-4">Why Southern Cross AI?</h2>
          <p className="text-lg text-white-800">
            Southern Cross AI is the first initiative to build a foundational large language model specifically for Australia. Our first operational AI model came online in November 2023. While there are plenty of powerful models overseas, our focus is on ensuring this model reflects Australian culture, values, and needs. This will serve as the building block for AI-driven products that can be applied across key sectors like government, education, and defence, in partnership with academia and the open-source community.
          </p>
          <p className="text-lg text-white-800 mt-4">
            By developing this model locally, we’re ensuring that Australia has access to AI solutions that are customized to our unique context. Government agencies, for example, could use the model to develop AI solutions that adhere to local laws and regulations, while businesses can apply it to create more culturally relevant applications. The broader impact will be the development of a strong AI ecosystem in Australia, backed by locally trained talent.
          </p>
          <p className="text-lg text-white-800 mt-4">
            Southern Cross AI isn’t just about developing the model—it’s about building the infrastructure for future AI innovations. Much like an operating system or electric grid, it provides the foundation for a wide variety of future applications. It will empower Australian businesses, researchers, and developers to build upon it, spurring innovation across multiple industries.
          </p>
        </div>
      </div>
    </main>
  );
}
