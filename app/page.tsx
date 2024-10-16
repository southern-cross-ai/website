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
              <span className="text-base-content relative col-start-1 row-start-1 bg-clip-text bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] text-transparent [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
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
          <h2 className="text-5xl font-bold">
            Why Southern Cross AI?
          </h2>
          <p className="text-lg text-white mt-4">
            Working in conjunction with key partners across Education, Business and Government, we aim to lay the foundation for a thriving AI ecosystem within Australia. Many successful AI models began as open-source, and Southern Cross AI is following that same path. We’re building a model focused on creating a skilled community and developing their expertise locally. As this project grows and evolves, we will generate new applications and opportunities specifically tailored to Australian business, higher education, and government needs.
          </p>
          <h3 className="text-4xl font-semibold mt-6">Why an Australian Large-Language Model AI?</h3>
          <p className="text-lg mt-4">
            By developing this model locally, we’re ensuring that Australia has access to AI solutions that are customized to our unique context. Government agencies, for example, could use the model to develop AI solutions that adhere to local laws and regulations, while businesses can apply it to create more culturally relevant applications. The broader impact will be the development of a strong AI ecosystem in Australia, backed by locally trained talent.
          </p>
          <h3 className="text-4xl font-semibold mt-6">Why This Project Matters:</h3>
          <p className="text-lg mt-4">
            Southern Cross AI is not a single product—it’s the foundation for future AI innovation. Starting as an open-source project with support from a small number of partner organisations, our new large-language model AI is laying the groundwork for a sustainable business and a thriving AI ecosystem within Australia. By supporting this infrastructure now, we’re investing in the core technology that will drive countless future AI applications, all tailored to Australian needs and values.
          </p>
          <h3 className="text-4xl font-semibold mt-6">Why not use existing overseas models?</h3>
          <p className="text-lg mt-4">
            Models like GPT, or services from Azure and AWS, are useful but don’t address the specific needs of Australia. Southern Cross AI provides a localized foundation that aligns with our regulatory requirements and cultural context, ensuring the model is directly relevant to the industries and communities here. By building it locally, we’re fostering critical expertise in AI within Australia, reducing dependence on foreign technologies and cultivating a homegrown capability.
          </p>
          <h3 className="text-4xl font-semibold mt-6">I Represent An Educational, Research, Government or Business Organisation. How Do I Get Involved?</h3>
          <p className="text-lg mt-4">
            We have already engaged in a small number of partnerships with key organisations as we prepare the foundational model for a significant upgrade in capability and infrastructure in 2025. We will be making announcements around these partnerships later in the year, but in the meantime, we welcome enquiries and discussions with any interested potential partners. Please contact us.
          </p>
        </div>
      </div>
    </main>
  );
}
