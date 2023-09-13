import { SplideSlide } from "@splidejs/react-splide";

const Testimonialcard = () => {
    const testimonials = [
        {name: "Stanley Kinoti", post: "CEO, Engstan Solutions", content: "Everyone is a definition of what they do, if you practice it, you become it, and people see you by it."},
        {name: "Henry Langat", post: "Founder, Apex Software Company", content: "Quality means doing it right when no one is looking."},
        {name: "Michelle Wambua", post: "Lawyer, Wambua Advocates", content: "Don’t ever make decisions based on fear. Make decisions based on hope and possibility. Make decisions based on what should happen, not what shouldn’t."},
        {name: "Henry Langat", post: "Founder, Apex Software Company", content: "Quality means doing it right when no one is looking."}
    ]
    return (
        <>
            {testimonials.map((item, index) => (
                <SplideSlide>
                    <div key={index} className="bg-[#084E7A] md:px-6 px-3 md:py-4 py-2 rounded-br-3xl md:mx-8 mx-4 md:h-48  h-44">
                        <p className="text-gray-200 font-light text-sm ">{item.content}</p>
                        <h2 className="my-2 text-gray-300 font-medium ">{item.name}</h2>
                        <h3 className="text-white font-medium text-sm">{item.post}</h3>
                    </div>
                </SplideSlide>
            ))}
        </>
    );
}
 
export default Testimonialcard;