import React,{ Component } from 'react';
import ReactPlayer from 'react-player';
import { Input,Grid,Container,Button } from 'semantic-ui-react'
import SideBar from './sidebar';
import { connect } from 'react-redux';
import { addVideo,toggleVideo,deleteVideo } from "../actions"
import playercss from '../css/player.js';

class Player extends Component {
    state={
        play: "true",
        mute: "false",
        volume: 0.8,
        url: ""
    }

    ytVidId=(url) => {
        let p=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return (url.match(p))? RegExp.$1:false;
    }

    handleUrl=(e) => {
        this.setState({ url: e.target.value });
    }

    handleAdd=(e) => {
        let url=this.state.url;
        let addurl=this.ytVidId(url);
        if (addurl) {
            this.props.addVideo(this.state.url);
            this.setState({ url: "" });
        }
    }

    handlePlay=() => {
        this.setState(prevState => ({
            play: prevState.play==="true"? "false":"true"
        }))
    }

    handleMute=() => {
        this.setState(prevState => ({
            mute: prevState.mute==="true"? "false":"true"
        }))
    }
    handleEnd=() => {
        this.props.deleteVideo(this.props.videos[0].id);
    }

    setVolume=(e) => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    render() {
        return (
            <div style={playercss.topsearch}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Input style={playercss.topsearch} type='text' value={this.state.url} fluid placeholder='Enter video url here' onChange={(e) => this.handleUrl(e)} >
                                    <input />
                                    <Button type='submit' onClick={(e) => this.handleAdd(e)}>Add</Button>
                                </Input>
                                <ReactPlayer style={playercss.topsearch}
                                    url={this.props.videos[0]===undefined? "":this.props.videos[0].url}
                                    width="100%"
                                    playing={this.state.play==="true"}
                                    muted={this.state.mute==='false'}
                                    volume={this.state.volume}
                                    onEnded={this.handleEnd}
                                />
                                <Button onClick={() => this.handlePlay()}> {this.state.play==="true"? 'pause':'play'} </Button>
                                <Button onClick={() => this.handleMute()}> {this.state.mute==='false'? 'unmute':'mute'} </Button>
                                Volume
                                <Input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={(e) => this.setVolume(e)} />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <SideBar />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
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
        addVideo: (url) => {
            dispatch(addVideo(url))
        },
        deleteVideo: (id) => dispatch(deleteVideo(id)),
        toggleVideo: (id) => dispatch(toggleVideo(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);