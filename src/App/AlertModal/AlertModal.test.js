import React from 'react';
import AlertModal from './AlertModal';
import AlertModalInner from './AlertModalInner';
import AlertModalToggle from './AlertModalToggle';
import { shallow } from 'enzyme';

describe('<AlertModal />', () => {
	const alertMessage = "There was an error";
	const toggleAlert = jest.fn(x => x);

	it('should render two child components when alertActive is true', () => {
		const wrapper = shallow(<AlertModal alertActive={true} toggleAlert={toggleAlert} alertMessage={alertMessage} />);
		expect(wrapper.contains([<AlertModalInner alertMessage={alertMessage} />, <AlertModalToggle toggleAlert={toggleAlert} />])).toBe(true);
	})

	it('should render an empty div with alertActive is false', () => {
		const wrapper = shallow(<AlertModal alertActive={false} toggleAlert={toggleAlert} alertMessage={alertMessage} />);
		expect(wrapper.equals(<div></div>)).toBe(true);
	})
});