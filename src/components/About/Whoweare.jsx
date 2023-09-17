import kinoti  from '../../assets/kinoti.png'

const Whoweare = () => {
    return ( 
        <>
            <div className='md:px-32 px-6 md:py-16 py-8'>
                <h1 className="content-title text-center">Who We Are</h1>
                <div className="grid md:grid-cols-2 gap-8 md:pt-4">
                    <div className="md:mt-0 mt-4">
                        <img  src={kinoti} alt='promotional'/>
                    </div>
                    <div>
                        <p className="md:text-base text-sm  text-gray-600 md:leading-relaxed leading-relaxed md:tracking-wide">
                            We are a branding enterprise, specializing mainly in T-Shirts printing and related apparels. 
                            At Engtan, we believe that elegance is essence. We boast of a dedicated team of skilled graphic designers determined to elevate your branding experience to unprecedented heights. You think of any design to customize your gifts, apparel or whatever you may think of. We design and paint it right where you want it printed. We guarantee to create distinctive brands that will spur a lifetime memory in you.
                            Guided by our slogan “Summum Bonum”, we strive to ensure that customer experience and satisfaction is of paramount consideration. Our clientele is unbiased, we serve both corporate institutions, individual clients and ‘hustlers’ because we believe in the spirit of universality where every need is superior. We thus offer services to anyone, in any quantity, both on wholesale and retail terms. 
                            We have branches in Meru and Nairobi and we offer free deliveries for goods delivered within these regions, and at subsidized delivery costs to other parts of the country.
                            Come Brand with us: We will design and brand in any detail you want. Any item, Any size, Any Writing.
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Whoweare;