import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="grid grid-cols-1  bg-white shadow-lg rounded-2xl overflow-hidden max-w-5xl w-full">
        <section className="grid grid-cols-1 gap-2 p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="grid-img-1"
            className="w-full h-48 object-cover rounded-lg"
          />
        </section>
        <section className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Contact Form</h2>
          <form action="#" className="space-y-4">
            
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name..."
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="lname" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name..."
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="Continents" className="block text-sm font-medium text-gray-600">
                Country
              </label>
              <select
                name="Continents"
                id="Continents"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="Africa">Africa</option>
                <option value="Australia">Australia</option>
                <option value="North America">North America</option>
              </select>
            </div>

            <div>
              <label htmlFor="Message" className="block text-sm font-medium text-gray-600"> Message</label>
              <textarea className="block text-sm font-medium text-gray-600" name="message" id="message " placeholder="Write you're message...." ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
