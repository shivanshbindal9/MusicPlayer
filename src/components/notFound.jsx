import React,{ Component } from 'react';
import { Image } from 'semantic-ui-react';
import image from '../Images/pixar.jpg';

class NotFound extends Component {
    render() {
        return (
            <div>
                <Image centered style={{ marginTop: '10vh' }} src={image} />
            </div>
        )
    }
}

export default NotFound;