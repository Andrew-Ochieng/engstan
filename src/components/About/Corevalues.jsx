const Corevalues = () => {
    const values = [
        {id:1, title: "Quality Products", content: "We put every skill we have to it’s limit to ensure that our customers get the best products the market can offer."},
        {id:2, title: "Timelines", content: "We deliver the services strictly within the set timelines agreed."},
        {id:3, title: "Integrity", content: "Respect customer and co-worker privacy, take pride in every transaction, be fair, honest and knowledgeable while building trust in each and every situation."}
    ]
    return (
        <>
            <div className="bg-gray-200 md:px-32 px-6 md:py-32 py-16">
                <h1 className="text-center md:mb-16 mb-8 md:text-4xl text-3xl content-title">Core Values</h1>
                <div className=" grid sm:grid-cols-3 md:gap-8 gap-4 ">
                    {values.map((item, index) => (
                        <div key={index} className={`${item.id == 1 ? `bg-[#084e7a]` : `bg-white`}  md:px-6 px-4 md:py-4 py-3 rounded-lg`}>
                            <h1 className={`${item.id == 1 ? `text-gray-300` : null} text-[#C70B38] font-bold md:text-2xl text-lg`}>{item.title}</h1>
                            <p className={`${item.id == 1 ? `text-white` : null} mt-2 text-gray-500`}>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default Corevalues;