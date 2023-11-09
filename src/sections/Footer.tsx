import Map from "@/components/Footer/Map";

const Footer = () => {
    return (
        <footer className="
        px-4
        sm:px-6
        py-20
        bg-ikeaBlue
        dark:bg-gray-900
        grid
        gap-4
        text-slate-100
        dark:text-slate-500
        grid-cols-1
        md:grid-cols-3
        sm:grid-cols-2
        ">
            <div className="mb-10 sm:mb-0">
                <h1 className='text-4xl font-black mb-5'>Fixterz</h1>
                <p className='text-slate-300 text-sm mb-3'>
                    Fixterz is a leading provider for Handyman services, repair and refurbishing services in the United Arab Emirates. Fixterz serves both residential as well as commercial and office customers.
                </p>
                <p className='text-slate-300 text-sm mb-3'>
                    Fixterz employs experienced professionals lead by a highly qualified management team that understands the maintenance industry well.
                </p>
            </div>
            <div className="mb-10 sm:mb-0">
                <h4 className='text-2xl font-black mb-5'>Our Services</h4>
                <div>
                    <h2>{">> "}Painting</h2>
                    <h2>{">> "}Plumbing</h2>
                    <h2>{">> "}General</h2>
                    <h2>{">> "}Moving</h2>
                    <h2>{">> "}Furniture Assembling</h2>
                    <h2>{">> "}Tiling</h2>
                    <h2>{">> "}Lighting</h2>
                </div>

                <h4 className='text-2xl font-black mt-10 mb-5'>Contact us</h4>
                <div>
                    <div>
                       <span>Phone: </span><a href="tel:+971526262112">+971526262112</a>
                    </div>
                    <div>
                       <span>Email: </span><a href="mailto:fixterz.ae@gmail.com">fixterz.ae@gmail.com</a>
                    </div>
                    <div>
                        <br/>
                        47 <br/>
                        Street 35 <br/>
                        Muhaisnah 1 <br/>

                    </div>
                </div>
            </div>
            <Map/>
        </footer>
    );
};

export default Footer;