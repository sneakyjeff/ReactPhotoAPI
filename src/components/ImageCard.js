//Purpose is to show one image by itself and determine the size of the image

import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const heightOfImage = this.imageRef.current.clientHeight;

        const spans = Math.ceil(heightOfImage/10);
        this.setState({spans : spans});
    }

    render(){
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
            </div>
        )
    }
}

export default ImageCard;