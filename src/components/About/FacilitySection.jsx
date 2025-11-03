import React from "react";

export default function FacilitySection({ images }) {
  return (
    <section className=" bg-white rounded-xl shadow p-6" data-aos="fade-up-left">
      <h3 className="text-xl font-semibold text-[#0677BA]">State-of-the-Art Facility</h3>
      <p className="text-gray-600 mt-2">
        From Olympic-quality equipment to safe, welcoming spaces, our gym provides everything young athletes need.
      </p>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <img key={i} src="" alt={`facility-${i}`} className="rounded-lg h-36 w-full object-cover" />
        ))}
      </div>
    </section>
  );
}
