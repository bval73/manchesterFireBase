import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signin';
import TheTeam from './components/theTeam';
import TheMatches from './components/theMatches';
import NotFound from './components/utils/notFound';

import Dashboard from './components/admin/dashboard';
import AdminMatches from './components/admin/matches';
import EditMatch from './components/admin/matches/editMatch';
import AdminPlayers from './components/admin/players';
import EditPlayers from './components/admin/players/editPlayers';


const Routes = (props) => {

  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path='/admin_players/edit_players/' exact component={EditPlayers} />
        <PrivateRoutes {...props} path='/admin_players/edit_players/:id' exact component={EditPlayers} />
        <PrivateRoutes {...props} path='/admin_players' exact component={AdminPlayers} />

        <PrivateRoutes {...props} path='/admin_matches/edit_match/' exact component={EditMatch} />
        <PrivateRoutes {...props} path='/admin_matches/edit_match/:id' exact component={EditMatch} />
        <PrivateRoutes {...props} path='/admin_matches' exact component={AdminMatches} />
        <PrivateRoutes {...props} path='/dashboard' exact component={Dashboard} />

        <PublicRoutes {...props} restricted={true} exact component={SignIn} path='/sign_in' />
        <PublicRoutes {...props} restricted={false} exact component={TheMatches} path='/the_matches' />
        <PublicRoutes {...props} restricted={false} exact component={TheTeam} path='/the_team' />
        <PublicRoutes {...props} restricted={false} exact component={Home} path='/' />

        <PublicRoutes restricted={false} exact component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default Routes;
