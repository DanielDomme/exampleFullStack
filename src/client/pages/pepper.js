import React, { Component } from 'react';
import { func } from 'prop-types';
import pepperGallery from '../../resources/pepperCardImage.png';
import pepperMedical from '../../resources/medicalPepper.png';
import pepperAwards from '../../resources/awardsPepper.png';
import pepperStats from '../../resources/busyPepper.png';
import { ImageCardButton } from '../components/buttons';
import PepperGallery from './subPages/pepperGallery';

export default class Pepper extends Component {
  state = {
    shouldButtonsBeLarge: true,
    shouldPepperGalleryShow: false
  };

  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Pepper\'s Corner');
  }

  componentWillUnmount() {
    this.setState({ shouldButtonsBeLarge: true });
  }

  alternateButtonSize = () => {
    this.setState({ shouldButtonsBeLarge: false });
  }

  hideAllComponents = () => {
    this.setState({ shouldPepperGalleryShow: false });
  }

  onGalleryClick = () => {
    this.hideAllComponents();
    this.setState({ shouldPepperGalleryShow: true });
    this.alternateButtonSize();
    console.log('Gallery Click');
  }

  onMedicalClick = () => {
    this.hideAllComponents();
    this.alternateButtonSize();
    console.log('Medical Click');
  }

  onAwardsClick = () => {
    this.hideAllComponents();
    this.alternateButtonSize();
    console.log('Awards Click');
  }

  onStatsClick = () => {
    this.hideAllComponents();
    this.alternateButtonSize();
    console.log('Stats Click');
  }

  render() {
    const { shouldButtonsBeLarge, shouldPepperGalleryShow } = this.state;
    return (
      <div>
        <h1>
          Welcome a Page Dedicated to All Things Pepper
        </h1>
        <div className="flex-container">
          <div className="flex-row d-flex justify-content-center">
            <ImageCardButton buttonClickHandler={this.onGalleryClick} size={shouldButtonsBeLarge} buttonText={'Pepper\'s Gallery'} cardImage={pepperGallery} />
            <ImageCardButton buttonClickHandler={this.onMedicalClick} size={shouldButtonsBeLarge} buttonText={'Pepper\'s Medical'} cardImage={pepperMedical} />
            {/* </div> */}
            {/* <div className="flex-row d-flex justify-content-center"> */}
            <ImageCardButton buttonClickHandler={this.onAwardsClick} size={shouldButtonsBeLarge} buttonText={'Pepper\'s Awards'} cardImage={pepperAwards} />
            <ImageCardButton buttonClickHandler={this.onStatsClick} size={shouldButtonsBeLarge} cardImage={pepperStats} buttonText={'Pepper\'s Stats'} />
          </div>
          {shouldPepperGalleryShow ? <PepperGallery /> : null}
        </div>
      </div>
    );
  }
}

Pepper.propTypes = {
  updatePageTitle: func.isRequired
};
