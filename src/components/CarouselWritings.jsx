import './CarouselWritings.css'

function CarouselWritings({ title, description }) {
    return (
        <div>
            <h4 className="title">{title}</h4>
            <p className="description">{description}</p>
        </div>
    );
}

export default CarouselWritings;