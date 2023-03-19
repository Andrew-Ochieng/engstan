const Testimonialcard = () => {
    const testimonials = [
        {name: "Martin Jonnes", post: "CEO, Magenta", content: "Respect customer and co-worker privacy, take pride in every, be fair, honest and knowledgeable while building trust."},
        {name: "Stanley Kinoti", post: "CEO, Engstan", content: "Respect customer and co-worker privacy, take pride in every, be fair, honest and knowledgeable while building trust."},
        {name: "Martin Jonnes", post: "CEO, Magenta", content: "Respect customer and co-worker privacy, take pride in every, be fair, honest and knowledgeable while building trust."}
    ]
    return (
        <>
            {testimonials.map((item) => (
                <div className="bg-[#084E7A] md:p-6 p-3 rounded-xl">
                    <p className="text-gray-200 font-light md:text-base text-sm ">{item.content}</p>
                    <h2 className="my-2 text-[#C70B38] font-bold md:text-xl text-lg">{item.name}</h2>
                    <h3 className="text-white font-medium">{item.post}</h3>
                </div>
            ))}
        </>
    );
}
 
export default Testimonialcard;