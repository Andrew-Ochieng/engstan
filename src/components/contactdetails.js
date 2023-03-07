export default function ContactDetails() {
    const contactInfo = [
        {icon: <i className="material-icons">phone</i>, details: '+254 731 873750'},
        {icon: <i className="material-icons">email</i>, details: 'info@engstantechnologies.com'},
        {icon: <i className="material-icons">location_on</i>, details: 'Engstan building, Thika Road - Nairobi'},
    ]

    return(
        <>
            <div className="grid grid-cols-1 md:gap-8 gap-4 md:mt-0 mt-8">
                {contactInfo.map((info) => (
                    <div 
                        class="flex items-center rounded-lg bg-white ease-out duration-300 py-6 md:px-8 px-4 shadow-lg hover:shadow-xl">
                        <span className="bg-gray-100 rounded-full md:py-4 py-3 md:px-5 px-4 text-[#084E7A]">
                            {info.icon}
                        </span>
                        <p class="md:ml-4 ml-2 mt-2 md:text-lg font-light">{info.details}</p>
                    </div>
                ))}
            </div>
        </>
    )
}