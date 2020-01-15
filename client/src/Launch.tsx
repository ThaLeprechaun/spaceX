import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { RouteComponentProps} from 'react-router';
// import {Link} from 'react-router-dom';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!){
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_success
      launch_year
    }
  }
`

export class Launch extends Component<RouteComponentProps, {}, null> {
  render() {
    let {flight_number}:any = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Query query={LAUNCH_QUERY} variables={{flight_number}}>
          {({loading, error, data}: any) => {
            if(loading) return <h4>Loading...</h4>;
            if(error) console.log(error);
            const {flight_number, mission_name, launch_year, launch_success} = data.launch;
            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-dark">Mission</span> {mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight Number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Launch Year: {launch_year}
                  </li>
                  <li className="list-group-item">
                    Launch Successful: <span className={launch_success ? "text-success":"text-danger"}>{launch_success ? "Yes":"No"}</span>
                  </li>
                </ul>
              </div>
            );
          }}
        </Query>
    )
  }
}

export default Launch
