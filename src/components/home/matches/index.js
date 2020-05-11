import React from 'react';
import { Tag } from '../../utils/misc';
import Blocks from './blocks';

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          bck='#0e1731'
          size='50px'
          color='#fff'
          // add={{
          //   color: 'red'
          // }}
        >
          Matches
        </Tag>

        <Blocks />



        <Tag
          bck='#fff'
          size='22px'
          color='#0e1731'
          link={true}
          linkto='/the_matches'
        >
          See More Matches
        </Tag>

      </div>
      
    </div>
  );
};

export default MatchesHome;
