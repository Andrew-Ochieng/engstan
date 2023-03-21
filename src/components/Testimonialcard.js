const Testimonialcard = () => {
    const testimonials = [
        {name: "Stanley Kinoti", post: "CEO Engstan Solutions", content: "Everyone is a definition of what they do, if you practice it, you become it, and people see you by it"},
        {name: "Henry Ford", post: "Founder, Ford Motor Company", content: "Quality means doing it right when no one is looking."},
        {name: "Michelle Obama", post: "Lawyer & former first lady, USA", content: "Don’t ever make decisions based on fear. Make decisions based on hope and possibility. Make decisions based on what should happen, not what shouldn’t."}
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