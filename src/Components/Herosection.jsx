const Herosection = () => {
    return (
            <div className="relative w-full">
                <img class="object-cover" src="../src/assets/HeroImage.jpg"/>
                <div class="absolute inset-0 bg-gray-700 opacity-60"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Efforless Business Growth</h1>
                    <h1 className="text-white text-7xl font-bold">We Generate <span className="text-orange-500">Quote-ready</span> Homes</h1>
                    <h1 className="text-white text-7xl font-bold">Imrovement <span className="text-orange-500">Leads for you</span></h1>
                    <h1 className="text-white text-3xl font-bold">No Heavy Lifting Rquired</h1>
                </div>
            </div>
            );
}
export default Herosection;

