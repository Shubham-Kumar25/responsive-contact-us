import React from "react";

const ContactUs = () => {
  const backgroundImageUrl =
    "https://www.tatapower.com/images/contact_banner_laptop.jpg";
  const cardImageUrls = [
    "https://cdn-icons-png.flaticon.com/512/3930/3930266.png",
    "https://cdn-icons-png.flaticon.com/512/4230/4230789.png",
    "https://cdn-icons-png.flaticon.com/512/685/685887.png",
  ];

  return (
    <div>
      <div
        className="flex items-center justify-start text-left text-black bg-center bg-cover h-[540px] object-fit"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="ml-4 text-white">
          <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-xl font-bold">
            To leverage the best of Cloud & DevOps, contact OpsTree today.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-10 p-8 mt-10 bg-white">
        <div className="flex flex-col w-full space-y-4 md:w-2/5">
          <div className="flex items-center p-6 text-black bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
              <img
                src={cardImageUrls[0]}
                alt="Marketing & Sales"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-blue-500">
                Marketing & Sales
              </h2>
              <p>
                Get in touch with our sales & marketing team for tailoring a
                perfect plan for your use case.
              </p>
              <p className="mt-5 font-bold">
                <a href="mailto:connect@opstree.com">connect@opstree.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 text-black bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
              <img
                src={cardImageUrls[1]}
                alt="Technical Support"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-blue-500">
                Technical Support
              </h2>
              <p>
                Our support team is here for you. Let us know your query & we
                will ensure you a quick solution.
              </p>
              <p className="mt-5 font-bold">
                <a href="mailto:opensource@opstree.com">
                  opensource@opstree.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 text-black bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
              <img
                src={cardImageUrls[2]}
                alt="Meet our Leader"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-blue-500">
                Meet our Leader
              </h2>
              <p>
                Our CEO is more than happy to have an engaging and insightful
                conversation with you.
              </p>
              <button className="px-4 py-3 mt-5 text-white bg-blue-500 rounded-3xl hover:bg-blue-600">
                Connect Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-6 text-black bg-gray-200 rounded-lg shadow-lg md:w-3/5">
          <div className="p-4">
            <h2 className="mb-4 text-5xl font-bold">
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500">
                Get in Touch
              </span>
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-3xl hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
