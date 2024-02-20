import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Shaping Australia&apos;s AI Future with Open Collaboration
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Discover the Southern Cross AI project, Australia&apos;s pioneering venture into open-source Large
                  Language Model (LLM) development. We unite academia, industry, and government to craft an AI
                  that embodies Australia&apos;s unique context and values. As a hub for innovation and collaboration, 
                  Southern Cross AI is driving the nation&apos;s AI capabilities forward. Join us in shaping a smarter, more
                  inclusive future.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Subscribe to our newsletter!
                  </Link>
                  <Link
                    href="https://github.com/Southern-Cross-AI/"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <Image src="/images/hero/shape-01.svg" alt="Shape 01" width={500} height={300} />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <Image src="/images/hero/shape-02.svg" alt="Shape 02" width={500} height={300} />
        </div>
      </section>
    </>
  );
};

export default Hero;
