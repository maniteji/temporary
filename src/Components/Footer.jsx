const Footer = () => {
    return(
        <div>
            <div className="flex justify-center flex-row mt-10">
                <div className="h-20 w-20 mr-60">
                    <img src="../src/assets/construct.svg"/>
                    <h1>Industry Specialist</h1>
                </div>
                <div className="h-20 w-20 mr-60">
                    <img src="../src/assets/seal.svg"/>
                    <h1>Guaranteed Results</h1>
                </div>
                <div className="h-20 w-20">
                    <img src="../src/assets/community.svg"/>
                    <h1>Qualified Leads</h1>
                </div>
            </div>
            <img className="block mx-auto object-center pt-20 w-80" src="../src/assets/Logo_noBackground.png"/>
            <h4 className="pt-4 pb-2">MOCA Solutions - @2023 All Rights Reserved</h4>
        </div>
    );
}
export default Footer;