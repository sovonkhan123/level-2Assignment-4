import frist from '../assets/frist.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'


const AboutUsPage = () => {

  return (
    <div className="mt-20 bg-gray-200">
      <div className="max-w-7xl  mx-auto px-6 bg-white rounded-md shadow-lg py-10">
        {/* contact information */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
          <p className="mb-2">
            <strong>Phone:</strong>(+88)01784567890
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contact@campersshop.com
          </p>
        </section>
        {/* map */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <div className="h-64 w-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373631531682!3d-37.816279279751795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778d414b2b9d3!2sCamping%20Store!5e0!3m2!1sen!2sus!4v1619383022632!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
        {/* social media links */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
                alt="Facebook"
                className="h-8"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                alt="Twitter"
                className="h-8"
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                alt="Instagram"
                className="h-8"
              />
            </a>
          </div>
        </section>
        {/* Mission Statement */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p>
            At Campers Shop, our mission is to provide high-quantity camping
            gear and outdoor essentials to adventurers of all levels. We are
            committed to promoting sustainable and environmentally-friendly
            products that allow our customers to explore the great outdoors
            responsibly.
          </p>
        </section>
        {/* team members */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* team member 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src={second}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-700">CEO & Founder</p>
              <p className="text-gray-600 mt-2">
                Jane has over 20 years of experience in the outdoor industry and
                is passionate about helping people connect with nature.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src={frist}
                alt="Team Member 2"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-700">Head of Product Development</p>
              <p className="text-gray-600 mt-2">
                John is an expert in camping gear design and is dedicated to
                creating innovative and durable products for our customers.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src={third}
                alt="Team Member 3"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Emily Brown</h3>
              <p className="text-gray-700">Marketing Manager</p>
              <p className="text-gray-600 mt-2">
                Emily is passionate about outdoor adventures and loves sharing
                our story with the world through engaging marketing campaigns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;

