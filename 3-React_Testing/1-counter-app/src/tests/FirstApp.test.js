import FirstApp from '../FirstApp';
import { render } from '@testing-library/react';

describe('Testing FirstApp', () => {
    test('should return Hello, Im Cristhian', () => {
      const greeting = 'Hello, Im Cristhian';
      const { getByText } = render( <FirstApp greeting={greeting} />);

      expect(getByText(greeting)).toBeInTheDocument();
    });
});