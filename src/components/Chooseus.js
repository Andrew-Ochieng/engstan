const Chooseus = () => {
    const items = [
        {icon: <i className="material-icons text-[#C70B38]">ac_unit</i>, title: "Dedicated Customer Care", content: "24x7 onsite and offsite supports round the year"},
        {icon: <i className="material-icons text-[#C70B38]">access_alarm</i>, title: "Reliable Branding", content: "Industrial grade bandwidth management and DPI solutions"},
        {icon: <i className="material-icons text-[#C70B38]">add_alert</i>, title: "Competent Tech Solutions", content: "Industrial grade bandwidth management and DPI solutions"}
    ]
    return (
        <>
            <div className="md:px-32 px-6 md:py-32 py-16">
                <h1 className="title md:text-5xl text-3xl text-center text-[#C70B38] capitalize">Why choose us</h1>
                <div className="grid sm:grid-cols-3 md:gap-8 gap-4 md:mt-12 mt-6">
                    {items.map((item) => (
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="md:p-6 p-3 md:mb-4 mb-2 bg-gray-200 rounded-full">{item.icon}</span>
                            <h3 className="font-bold md:text-2xl text-lg text-gray-800">{item.title}</h3>
                            <p className="md:text-lg font-light text-gray-600 mt-2">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default Chooseus;