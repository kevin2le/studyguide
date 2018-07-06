import React, {Component} from 'react';
import './TopScoresPage.css';
import topscoresAPI from '../../utils/topscoresAPI';
import ScoresTable from '../../components/ScoresTable/ScoresTable'

class TopScoresPage extends Component {
  constructor() {
    super();
    this.state = {
      scores: []
    }
  }
  componentDidMount() {
    topscoresAPI.index().then(scores =>
      this.setState({scores})
    );
  }
  render() {
    return (
      <div className='TopScoresPage'>
        <header className="header-footer">Top Scores</header>
        <a href='/'>RETURN</a><br />
        <ScoresTable scores={this.state.scores} />
      </div>
    );
  }
}

export default TopScoresPage;