import CTA from './CTA';
import Banner from '../assets/Banner.jpg';

function BackgroundContainer() {
    return (
        <div className="bg-cover bg-center h-full flex "
            style={{ backgroundImage: `linear-gradient(90deg, #00091DBF 32%, #F2295B00 28%), url(${Banner})` }}>
            <CTA />
        </div>
    );
}

export default BackgroundContainer;

