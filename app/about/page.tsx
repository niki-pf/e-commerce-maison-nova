import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <section>
        <div className="relative w-full h-[32rem] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1605630367546-cd7e2cf07be1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fabric texture closeup"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold max-w-[15ch] leading-none">
              We believe we can all make a difference.
            </h1>
            <p className="mt-4 max-w-[36ch] text-lg md:text-sm tracking-wide font-bold">
              Our way: Exceptional quality. Ethical factories. Radical
              Transparency.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl text-center font-medium max-w-[42ch] m-16">
            At Everlane, we want the right choice to be as easy as putting on a
            great T-shirt. That’s why we partner with the best, ethical
            factories around the world. Source only the finest materials. And
            share those stories with you—down to the true cost of every product
            we make. It’s a new way of doing things. We call it Radical
            Transparency.
          </h2>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full bg-orange-50">
        <div className="relative w-full md:w-1/2 aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1745323221397-5fe9349c672c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy woman working with a sewing machine"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 aspect-[4/3]">
          <p className="uppercase text-lg md:text-base tracking-wide text-gray-600 font-bold">
            OUR FACTORIES
          </p>
          <h3 className="text-5xl md:text-4xl font-bold mb-4">
            Our ethical approach.
          </h3>
          <p className="text-lg md:text-base leading-relaxed max-w-[70ch]">
            We spend months finding the best factories around the world—the same
            ones that produce your favorite designer labels. We visit them often
            and build strong personal relationships with the owners. Each
            factory is given a compliance audit to evaluate factors like fair
            wages, reasonable hours, and environment. Our goal? A score of 90 or
            above for every factory.
          </p>
        </div>
      </section>

      <section className="relative w-full">
        <div className="relative w-full hidden lg:block h-[32rem] max-h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1687226426216-82ada1a5568a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Threads and textile closeup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-amber-100/25 backdrop-brightness-90"></div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row w-full bg-orange-50">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 aspect-[4/3]">
          <p className="uppercase text-lg md:text-base tracking-wide text-gray-600 font-bold">
            OUR QUALITY
          </p>
          <h3 className="text-5xl md:text-4xl font-bold mb-4">
            Designed to last.
          </h3>
          <p className="text-lg md:text-base leading-relaxed max-w-[70ch]">
            At Everlane, we’re not big on trends. We want you to wear our pieces
            for years, even decades, to come. That’s why we source the finest
            materials and factories for our timeless products—like our Grade-A
            cashmere sweaters, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1739384879592-79903b12b2a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Woman sewing in factory"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative w-full">
        <div className="relative w-full hidden lg:block h-[32rem] max-h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1753162659771-d5b192b52678?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Threads on table with warm lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-amber-100/25 backdrop-brightness-90"></div>
        </div>
      </section>
    </div>
  );
}
