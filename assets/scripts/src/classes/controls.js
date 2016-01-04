import React from 'react';
import Parser from 'react-dom-parser';
import Volume from './volume';
import dom from '../utils/dom';

class Controls extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			overlayOpen: true
		};
		
		Parser.onParseComplete(() => {
			this.player = Parser.getByNode(document.getElementById('player'));
		});

	}

	voteUp(e) {

	}

	voteDown(e) {

	}

	toggleOverlay(e) {
		dom.$body.toggleClass('overlay-open');
		this.setState({overlayOpen: !this.state.overlayOpen});
	}

	changeSong(e) {
		let songs = ['RzB6JlEVYcQ', 'UclCCFNG9q4', 'RWYOYhAHKDA', 'YQHsXMglC9A'],
			randomSong = songs[Math.floor(Math.random() * songs.length)];
		this.player.changeVideo(randomSong);
	}

	render() {
		return (
			<div className="controls-wrapper">
				<button type="button" onClick={this.changeSong.bind(this)}>Change Song (for testing)</button>
				<button type="button" onClick={this.toggleOverlay.bind(this)}><i className={this.state.overlayOpen ? "fa fa-expand" : "fa fa-compress"}></i></button>
				<button type="button" onClick={this.voteDown.bind(this)}><i className="fa fa-thumbs-o-down"></i></button>
				<button type="button" onClick={this.voteUp.bind(this)}><i className="fa fa-thumbs-o-up"></i></button>
				<Volume />
			</div>
		);
	}

}

Controls.defaultProps = {};

export default Controls;