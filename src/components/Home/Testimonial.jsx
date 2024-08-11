import frist from '../../assets/frist.jpg'
import second from '../../assets/second.jpg'
import third from '../../assets/third.jpg'

const Testimonial = () => {

    const testimonials = [
        {
          name: "John Doe",
          image: frist,
          title: "Avid Hiker",
          testimonial:
            "This is the best camping gear I've ever purchased! The quality is outstanding, and it made my trip so much more enjoyable. Highly recommend!",
        },
        {
          name: "Jane Smith",
          image: second,
          title: "Outdoor Enthusiast",
          testimonial:
            "The customer service was amazing, and the products are top-notch. I can't wait for my next adventure with my new gear!",
        },
        {
          name: "Emily Johnson",
          image: third,
          title: "Backpacking Expert",
          testimonial:
            "I’ve tried many different brands, but nothing compares to what I found here. The equipment is reliable and perfect for any outdoor activity.",
        },
      ];
    return (
        <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Customers Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-600 italic">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Testimonial;