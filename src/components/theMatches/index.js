import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../utils/misc';

import LeagueTable from './table';
import MatchesList from './matchesList';

class TheMatches extends Component {

  state = {
    loading: true,
    matches: [],
    filteredMatches: [],
    playedFilter: 'All',
    resultFilter: 'All'
  }

  componentDidMount() {
    firebaseMatches.once('value').then(snapshot => {
      const matches = firebaseLooper(snapshot);

      this.setState({
        loading: false,
        matches: reverseArray(matches),
        filteredMatches: reverseArray(matches)
      })
    })
  }

  showPlayed = (played) => {
//    console.log('Played ',played);
    const list = this.state.matches.filter((match) =>{
      console.log('Match Played ',match.final);
      return match.final === played
    });

    this.setState({
      filteredMatches: played === 'All' ? this.state.matches : list,
      playedFilter: played,
      resultFilter: 'All'
    })
  }

  showResult = (result) => {
    //    console.log('Played ',played);
        const list = this.state.matches.filter((match) =>{
//          console.log('Match Result ',match.result);
          return match.result === result
        });
    
        this.setState({
          filteredMatches: result === 'All' ? this.state.matches : list,
          playedFilter: 'All',
          resultFilter: result
        })
      }

  render() {
    const state = this.state;
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">
                  Show Match
                </div>
                <div className="cont">
                  <div className={`option ${state.playedFilter === 'All' ? 'active' :''}`}
                       onClick={() => this.showPlayed('All')}
                  >
                    All
                  </div>
                  <div className={`option ${state.playedFilter === 'Yes' ? 'active' :''}`}
                      onClick={() => this.showPlayed('Yes')}
                  >
                    Played
                  </div>
                  <div className={`option ${state.playedFilter === 'No' ? 'active' :''}`}
                       onClick={() => this.showPlayed('No')}
                  >
                    Not Played
                  </div>

                </div>
              </div>

              <div className="match_filters_box">
                <div className="tag">
                  Results Game
                </div>
                <div className="cont">
                  <div className={`option ${state.resultFilter === 'All' ? 'active' :''}`}
                       onClick={() => this.showResult('All')}
                  >
                    All
                  </div>
                  <div className={`option ${state.resultFilter === 'W' ? 'active' :''}`}
                      onClick={() => this.showResult('W')}
                  >
                    W
                  </div>
                  <div className={`option ${state.resultFilter === 'L' ? 'active' :''}`}
                       onClick={() => this.showResult('L')}
                  >
                    L
                  </div>
                  <div className={`option ${state.resultFilter === 'D' ? 'active' :''}`}
                       onClick={() => this.showResult('D')}
                  >
                    D
                  </div>

                </div>
              </div>
            </div>
            <MatchesList matches={state.filteredMatches} />
          </div>

          <div className="right">
            <LeagueTable />
          </div>

        </div>
      </div>
    );
  }
}

export default TheMatches;