import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router';
import LocalizedStrings from 'react-localization';
import { localisedText } from '../../lib/localisation.es6';

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: new LocalizedStrings(localisedText),
    };
  }

  render() {
    return (
      <h1 className="centre">
        {this.state.labels.pageNotFound}{' '}
        <b>
          <Link to="/admin" className="btn btn-info btn-sm">
            {this.state.labels.pageNotFoundButtonText}
          </Link>
        </b>
      </h1>
    );
  }
}

export default PageNotFound;
