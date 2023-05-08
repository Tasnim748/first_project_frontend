import { Fragment } from "react";

function CarouselImage({ url, title }) {
    return (
        <Fragment>
            <img src={url} alt={title} height='410px' width='100%' style={{marginTop: '60px'}} />
        </Fragment>
    )
}

export default CarouselImage;