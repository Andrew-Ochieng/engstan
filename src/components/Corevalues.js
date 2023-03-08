const Corevalues = () => {
    const values = [
        {title: "Teamwork", content: "Cooperate and work together for the common good of the people we serve and the organisation’s mission"},
        {title: "Integrity", content: "Respect customer and co-worker privacy, take pride in every transaction, be fair, honest and knowledgeable while building trust in each and every situation."}
    ]
    return (
        <>
            <div className="bg-gray-200 md:px-32 px-6 md:py-32 py-16">
                <h1 className="text-center md:mb-16 mb-8 md:text-4xl text-3xl content-title">Core Values</h1>
                <div className=" grid sm:grid-cols-3 md:gap-8 gap-4 ">
                    <div className="bg-[#084E7A] md:p-8 p-4 rounded-lg">
                        <h1 className="text-gray-300 font-bold md:text-2xl text-lg">Quality Products</h1>
                        <p className="mt-2 font-light text-white">We put every skill we have to it’s limit to ensure that our customers get the best products the market can offer</p>
                    </div>
                    {values.map((value) => (
                        <div className="bg-white md:p-8 p-4 rounded-lg">
                            <h1 className="text-[#C70B38] font-bold md:text-2xl text-lg">{value.title}</h1>
                            <p className="mt-2 font-light text-gray-600">{value.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default Corevalues;