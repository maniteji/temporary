import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Herosection from "../Components/Herosection";
import Logo from "../Components/Logo";
import Paragraph from "../Components/Paragraph";

const Homepage = () => {
    return (
        <div className="m-0 p-0">
            <Logo />
            <Herosection />
            <Paragraph />            
            <Form />
            <Footer />
        </div>

    );
}

export default Homepage;