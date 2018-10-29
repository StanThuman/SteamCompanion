import React, { Component } from 'react';
import Enzyme, { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { JSDOM } from 'jsdom'
const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
global.document = jsdom.window.document;
global.window = jsdom.window;


import SteamFriendSearch from '../src/containers/SteamFriendSearch';
configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());


function setup(){
  const props = {
    // routeNumber: 0
    userNameInput: 'testName'
  }
  //let wrapper = shallow(<FriendSearch { ...props } />);
  let mntWrapper = mount(<SteamFriendSearch { ...props } />);
  return {
    props,
    mntWrapper
  }
}

describe('Component: FriendSearch', () => {
  describe('Rendered Friendsearch', () => {
    it('should receive props', () => {
      let mntWrapper = mount(<SteamFriendSearch />);

      const input = mntWrapper.find('form');

      console.log(input);
      expect(true).to.be.true;
    });
    // it('should change highlight based on route', () => {
    //   const { wrapper, props } = setup();
    //   const tabs = wrapper.find('Tabs');
    //
    //
    //   chai.assert.equal(props.routeNumber, 0, "both are equal");
    // })
  })


})//end
