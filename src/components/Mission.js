const Mission = () => {
    const missions = [
        {title: "Our Mission", content: "We put every skill we have to it’s limit to ensure that our customers get the best products the market can offer."},
        {title: "Our Vision", content: "Respect customer and co-worker privacy, take pride in every transaction, be fair, honest and knowledgeable while building trust in each and every situation."}
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