import React  from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import home from './Components/home';

const Routes =() =>{
  return (
     <Layout>
       <Switch>
          <Route exact component={home} path="/"/>
       </Switch>
     </Layout>
  )
}


export default Routes;
