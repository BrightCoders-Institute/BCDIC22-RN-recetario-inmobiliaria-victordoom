import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Item } from '../src/components/Item';
import database from '../src/data/database.json'

it('renders correctly', () => {
    renderer.create(<Item rental={database[1]} />);
});

describe('<Item/>', () => {
    test('Item snapShot', () => {
        const snap = renderer.create(
            <Item rental={database[1]} />
        ).toJSON();
        expect(snap).toMatchSnapshot();
    });
})
it('can render all the properties from the database', () => {
    jest.useFakeTimers();
    const components = [];
    for (const item of database) {
        const component = renderer.create(<Item rental={item} />).toJSON();
        if (component) {
            components.push(component);
        }
    }
    expect(components.length).toBe(database.length);
});