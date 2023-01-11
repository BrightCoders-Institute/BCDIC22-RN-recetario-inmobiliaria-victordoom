import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Home } from '../src/screens/Home';

it('renders correctly', () => {
    renderer.create(<Home />);
});

describe('<Home/>', () => {
    test('Home snapShot', () => {
        const snap = renderer.create(
            <Home />
        ).toJSON();
        expect(snap).toMatchSnapshot();
    });
})