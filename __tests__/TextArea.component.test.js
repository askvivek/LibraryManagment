import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from '../app/components/TextArea/TextArea.component';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextArea />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
