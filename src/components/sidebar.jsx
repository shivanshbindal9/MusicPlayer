import React,{ Component } from 'react';
import { Segment,List,Header,Icon,Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteVideo } from "../actions"

class SideBar extends Component {

    handleDelete=(id) => {
        this.props.deleteVideo(id);
    }

    render() {
        return (
            <Segment inverted>
                <Header as='h2' textAlign='center'>
                    <Icon name='plug' />
                    <Header.Content>Playlist</Header.Content>
                </Header>
                <Divider />
                <List divided inverted verticalAlign='middle'>
                    {this.props.videos.map(video => (
                        <List.Item key={video.id}>
                            <List.Content floated='right'>
                                <Icon name='close' onClick={() => this.handleDelete(video.id)} />
                            </List.Content>
                            <List.Content style={{ width: '60%' }}>
                                <List.Header>{video.url}</List.Header>
                            </List.Content>
                        </List.Item>
                    )
                    )}
                </List>
            </Segment>
        )
    }
}

const mapStateToProps=state => {
    return {
        videos: state.videos,
    }
}


const mapDispatchToProps=dispatch => {
    return {
        deleteVideo: (id) => dispatch(deleteVideo(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);