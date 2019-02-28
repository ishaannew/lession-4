import React, { Component } from 'react';

class VacancySign extends Component{
  render() {
    const returnText = (this.props.hasvacancy) ? 'Vacancy' : 'No Vacancy';

    return(
        <div>
          <p>{ returnText }</p>
        </div>
      );
  }
}


export default VacancySign;