import FirstApp from '../FirstApp';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Testing FirstApp', () => {
    // test('should return Hello, Im Cristhian', () => {
    //   const greeting = 'Hello, Im Cristhian';
    //   const { getByText } = render( <FirstApp greeting={greeting} />);
    //
    //   expect(getByText(greeting)).toBeInTheDocument();
    // });

    test('should return <FirstApp /> correctly', () => {
        const greeting = 'Hello, Im Cristhian';
        const wrapper = shallow(<FirstApp greeting={ greeting } /> );

        expect(wrapper).toMatchSnapshot();
    });

    test('should show the subtitle sent by props', () => {
        const greeting = 'Hello, Im Cristhian';
        const subtitle = 'Hello, Im a subtitle';

        const wrapper = shallow(
            <FirstApp
                greeting={ greeting }
                subtitle={ subtitle }
            />
        );

        const text = wrapper.find('#text').text();

        expect(text).toBe(subtitle);
    });

});