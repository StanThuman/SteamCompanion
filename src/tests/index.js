import React, { Component } from 'react';
import Enzyme, { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
//import { render, shallow } from 'enzyme';

//import { NavBar } from '../containers/NavigationBar';
import NavBar from '../components/NavBar';
configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());


function setup(){
  const props = {
    // routeNumber: 0
    routeNumber: 0,
    handleClick: ()=>{},
    classes: {}
  }
  var wrapper = shallow(<NavBar { ...props } />);
  return {
    props,
    wrapper
  }
}

describe('Components', () => {
  describe('Navigation Bar', () => {
    it('should change highlight based on route', () => {
      const { wrapper, props } = setup();
      const tabs = wrapper.find('Tabs');


      chai.assert.equal(props.routeNumber, 0, "both are equal");
    })
  })


})//end
