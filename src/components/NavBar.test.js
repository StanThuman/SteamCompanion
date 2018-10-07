import chai from 'chai'
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';

import Navbar from './Navbar';
chai.use(chaiEnzyme());

const wrapper = shallow(<NavBar />);
