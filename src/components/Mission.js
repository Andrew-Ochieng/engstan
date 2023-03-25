const Mission = () => {
    const missions = [
        {title: "Our Vision", content: "To be a regional leading enterprise in quality T-Shirts supply and preferred partner in T- Shirts printing."},
        {title: "Our Mission", content: "To offer high quality apparel products and services in a timely manner, that meets customer satisfaction through innovative and creative designs."}
    ]
    return (
        <>
            <div className="md:mb-16 mb-8 lg:mx-64 md:mx-32 mx-6 grid sm:grid-cols-2 md:gap-16 gap-8">
                {missions.map((item) => (
                    <div className="">
                        <h2 className="md:my-4 my-2 text-[#C70B38] content-title">{item.title}</h2>
                        <div className="bg-[#084E7A] md:p-8 p-4 rounded-lg text-white font-light">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Mission;