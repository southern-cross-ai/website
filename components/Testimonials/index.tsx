import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Elena Roberts",
    designation: "AI Researcher @TechInnovate",
    content:
      "Joining Southern Cross AI was a game-changer. The open-source platform enabled our team to contribute to meaningful AI advancements. The community's support and resources have been invaluable.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Marcus Tan",
    designation: "Product Manager @DataSolve",
    content:
      "Southern Cross AI's collaborative approach has revolutionized how we implement AI solutions. The ecosystem fosters innovation, making complex projects more manageable and successful.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Sienna Patel",
    designation: "CTO @GreenTechAI",
    content:
      "Our partnership with Southern Cross AI has accelerated our mission towards sustainable AI solutions. Their ethical AI focus aligns perfectly with our goals, making collaboration seamless and impactful.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Participants and Members Say"
          paragraph="Across the AI landscape, numerous success stories emerge, yet it's the collaborative spirit and innovation within the Southern Cross AI community that truly sets us apart."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
