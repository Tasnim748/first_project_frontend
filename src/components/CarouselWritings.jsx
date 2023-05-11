import './CarouselWritings.css'

function CarouselWritings({ title, description }) {
    return (
        <>
            <h4 className="title">{title}</h4>
            <p className="description">{description}</p>
        </>
    );
}

export default CarouselWritings;