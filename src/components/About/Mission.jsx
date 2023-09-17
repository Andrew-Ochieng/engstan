const Mission = () => {
    const missions = [
        {title: "Our Mission", content: "To offer high quality apparel products and services in a timely manner, that meets customer satisfaction through innovative and creative designs."},
        {title: "Our Vision", content: "To be a regional leading enterprise in quality T-Shirts supply and preferred partner in T- Shirts printing."},
    ]
    return (
        <>
            <div className="md:mb-16 mb-8 lg:mx-64 md:mx-32 mx-6 grid sm:grid-cols-2 md:gap-16 gap-8">
                {missions.map((item) => (
                    <div className="">
                        <h2 className="md:my-4 my-2 text-[#C70B38] md:text-xl text-lg font-semibold">{item.title}</h2>
                        <div className="border-2 border-[#084E7A] hover:bg-[#084E7A] shadow-lg hover:shadow-xl duration-500 md:px-6 px-4 md:py-4 py-3 rounded-xl text-gray-500 hover:text-white ">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Mission;