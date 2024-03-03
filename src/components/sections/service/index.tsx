import Image from "next/legacy/image";
import SectionServiceProps from "@/data/interfaces/props/section-service";

export default function SectionService({
  image,
  title,
  description,
}: SectionServiceProps) {
  return (
    <section className="max-w-7xl mx-auto mb-36">
      <div className="grid items-center gap-12 lg:grid-cols-10 mx-8 md:mx-auto">
        <div className="service-image col-span-4" data-aos="zoom-in">
          <Image
            src={image}
            alt="service-webdev"
            priority
            className="rounded-tl-3xl rounded-br-3xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="service-content col-span-6" data-aos="fade-right">
          <h2 className="text-4xl md:text-6xl font-bold text-green-600 mb-8">
            {title}
            <br />
            <span className="font-semibold text-neutral-900">Service</span>
          </h2>
          <p className="text-sm lg:text-base text-slate-400">{description}</p>
        </div>
      </div>
    </section>
  );
}
