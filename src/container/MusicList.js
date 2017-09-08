import React, { Component } from 'react';
import './MusicList.css';

class MusicList extends Component {
    render() {
        const {currentIndex, songlist} = this.props.location.state;
        const list = songlist.map((item, i) => {
            return (
                <li key={item.singerid} onClick={() => {
                    this.props.history.replace('/');
                    sessionStorage.setItem('index', i);
                }} className={parseFloat(currentIndex) === i ? 'active_li' : ''}>{item.songname} -- {item.singername}</li>
            )
        });
        return (
            <div className="components-song-list">
                <h1><span>music list</span><em onClick={this.props.history.goBack}>&times;</em></h1>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
    
}

export default MusicList;