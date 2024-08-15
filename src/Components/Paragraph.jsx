const Paragraph = () => {
    return (
        <div className="mb-20">
            <h1 className="text-5xl font-bold pb-7 mt-10">Who are <span className="text-orange-500">We?</span></h1>
            <p className="text-lg pb-20">We're a Chiswick-based agency that helps home improvement companies by delivering top-tier, quote-ready leads through strategic advertising on popular social media sites. Our targeted approach not only frees you up to concentrate on your work, but also ensures your growth is driven by genuinely interested clients, making your business growth smooth and efficient.</p>
            <h1 className="text-5xl font-bold pb-7 mt-10">Our <span className="text-orange-500">Process</span></h1>
            <div className="flex justify-center flex-row text-left">
                <div className="pl-28">
                    <img className="w-14" src="../src/assets/1.svg"/>
                    <h2 className="text-xl">Gather Content</h2>
                    <p>In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation of our strategy, serving to attract a greater number of potential clients to your business.</p>
                </div>
                <div  className="pl-28">
                    <img className="w-14" src="../src/assets/2.svg"/>
                    <h2 className="text-xl">Launch Ads</h2>
                    <p>Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social media platforms to capture clients attention.</p>
                </div>
                <div className="pl-28 pr-3">
                    <img className="w-14" src="../src/assets/3.svg"/>
                    <h2 className="text-xl">Generate Leads</h2>
                    <p>Finally, we collect information from individuals who are genuinely interested in your services. Prioritising quote-ready leads and eliminating tire kickers.</p>
                </div>
            </div>
        </div>
    );
}

export default Paragraph;