import React, { useState } from "react";
import {
   FaCalendarAlt,
   FaClock,
   FaUser,
   FaPhone,
   FaCheck,
   FaArrowRight,
} from "react-icons/fa";
import freeTrialHero from "../../public/imgs/IMG_8766.JPG"; // Add your image

const FreeTrial = () => {
   const [formData, setFormData] = useState({
      parentName: "",
      childName: "",
      childAge: "",
      email: "",
      phone: "",
      preferredDate: "",
      experience: "",
      message: "",
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Form submission logic here
      console.log("Form submitted:", formData);
      alert(
         "Thank you! We'll contact you within 24 hours to schedule your free trial."
      );
   };

   return (
      <>
         {/* Hero Section with Background Image - UPDATED */}
         <section className="relative mt-20 py-20 text-white overflow-hidden min-h-[70vh] flex items-center justify-center">
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{
                  backgroundImage: `url(${freeTrialHero})`,
               }}
            ></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
               <h1
                  className="text-4xl lg:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
                  data-aos="fade-up"
               >
                  Claim Your Free Trial Session
               </h1>
               <p
                  className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  Experience the magic of rhythmic gymnastics with a
                  complimentary introductory class
               </p>

               <div
                  className="grid md:grid-cols-3 gap-6 mb-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  <div className="flex items-center justify-center gap-3">
                     <FaCheck className="text-amber-300 text-xl drop-shadow" />
                     <span className="text-white drop-shadow-sm">
                        No Commitment
                     </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                     <FaCheck className="text-amber-300 text-xl drop-shadow" />
                     <span className="text-white drop-shadow-sm">
                        Expert Coaches
                     </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                     <FaCheck className="text-amber-300 text-xl drop-shadow" />
                     <span className="text-white drop-shadow-sm">
                        Fun & Safe Environment
                     </span>
                  </div>
               </div>
            </div>
         </section>

         {/* Rest of your existing code remains exactly the same */}
         <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
               {/* Registration Form */}
               <div
                  className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8"
                  data-aos="fade-right"
               >
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                     Schedule Your Free Class
                  </h2>
                  <p className="text-gray-600 mb-8">
                     Fill out the form below and we'll contact you within 24
                     hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     {/* Parent Information */}
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              <FaUser className="inline mr-2 text-blue-600" />
                              Parent's Name *
                           </label>
                           <input
                              type="text"
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              placeholder="Enter your full name"
                           />
                        </div>

                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              <FaPhone className="inline mr-2 text-blue-600" />
                              Phone Number *
                           </label>
                           <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              placeholder="(555) 123-4567"
                           />
                        </div>
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                           Email Address *
                        </label>
                        <input
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           placeholder="your@email.com"
                        />
                     </div>

                     {/* Child Information */}
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              Child's Name *
                           </label>
                           <input
                              type="text"
                              name="childName"
                              value={formData.childName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              placeholder="Child's full name"
                           />
                        </div>

                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              Child's Age *
                           </label>
                           <select
                              name="childAge"
                              value={formData.childAge}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           >
                              <option value="">Select age</option>
                              <option value="3-4">3-4 years</option>
                              <option value="5-6">5-6 years</option>
                              <option value="7-9">7-9 years</option>
                              <option value="10-12">10-12 years</option>
                              <option value="13-17">13-17 years</option>
                           </select>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              <FaCalendarAlt className="inline mr-2 text-blue-600" />
                              Preferred Date
                           </label>
                           <input
                              type="date"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           />
                        </div>

                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              <FaClock className="inline mr-2 text-blue-600" />
                              Experience Level
                           </label>
                           <select
                              name="experience"
                              value={formData.experience}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           >
                              <option value="">Select level</option>
                              <option value="beginner">
                                 Beginner (No experience)
                              </option>
                              <option value="some-experience">
                                 Some experience
                              </option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                           </select>
                        </div>
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                           Additional Notes
                        </label>
                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           rows="4"
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           placeholder="Any specific goals, concerns, or questions..."
                        ></textarea>
                     </div>

                     <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                     >
                        Claim Free Trial Session
                        <FaArrowRight />
                     </button>

                     <p className="text-center text-gray-500 text-sm">
                        * We respect your privacy. Your information will never
                        be shared with third parties.
                     </p>
                  </form>
               </div>

               {/* Benefits Sidebar */}
               <div className="space-y-6" data-aos="fade-left">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8">
                     <h3 className="text-2xl font-bold mb-4">
                        What's Included in Your Free Trial?
                     </h3>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                           <FaCheck className="text-amber-300 mt-1 flex-shrink-0" />
                           <span>
                              45-minute introductory class with certified
                              coaches
                           </span>
                        </li>
                        <li className="flex items-start gap-3">
                           <FaCheck className="text-amber-300 mt-1 flex-shrink-0" />
                           <span>
                              Basic rhythmic gymnastics equipment experience
                           </span>
                        </li>
                        <li className="flex items-start gap-3">
                           <FaCheck className="text-amber-300 mt-1 flex-shrink-0" />
                           <span>Personalized skill assessment</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <FaCheck className="text-amber-300 mt-1 flex-shrink-0" />
                           <span>Tour of our state-of-the-art facility</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <FaCheck className="text-amber-300 mt-1 flex-shrink-0" />
                           <span>
                              Program recommendations based on skill level
                           </span>
                        </li>
                        <li className="flex items-start gap-3">
                           <FaCheck className="text-amber-300 mt-1 flex-shrink-0" />
                           <span>No pressure - just fun and learning!</span>
                        </li>
                     </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
                     <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Prefer to Call?
                     </h3>
                     <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-700">
                           <FaPhone className="text-blue-600" />
                           <span className="font-semibold">(555) 123-GYMN</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                           Our team is available Monday-Friday, 8AM-6PM to
                           answer your questions and schedule your trial.
                        </p>
                     </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8">
                     <h3 className="text-xl font-bold mb-3">
                        Why Parents Choose Us
                     </h3>
                     <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                           <div className="text-2xl font-bold">500+</div>
                           <div className="text-sm">Happy Students</div>
                        </div>
                        <div>
                           <div className="text-2xl font-bold">10+</div>
                           <div className="text-sm">Years Experience</div>
                        </div>
                        <div>
                           <div className="text-2xl font-bold">50+</div>
                           <div className="text-sm">Competition Awards</div>
                        </div>
                        <div>
                           <div className="text-2xl font-bold">100%</div>
                           <div className="text-sm">Safe Environment</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
               <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Free Trial FAQs
               </h2>
               <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-blue-50 rounded-xl p-6">
                     <h4 className="font-semibold text-blue-900 mb-2">
                        What should my child wear?
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Comfortable athletic wear or a leotard. Bare feet or
                        gymnastics shoes are perfect!
                     </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                     <h4 className="font-semibold text-blue-900 mb-2">
                        Do I need to stay during the trial?
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Parents are welcome to observe or you can drop off -
                        whatever makes you comfortable!
                     </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                     <h4 className="font-semibold text-blue-900 mb-2">
                        What if my child has no experience?
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Perfect! Our trial classes are designed specifically for
                        beginners.
                     </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                     <h4 className="font-semibold text-blue-900 mb-2">
                        How soon can we start?
                     </h4>
                     <p className="text-gray-600 text-sm">
                        We typically schedule trials within 1-3 days of
                        registration.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default FreeTrial;
