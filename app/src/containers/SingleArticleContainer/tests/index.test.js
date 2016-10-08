import SingleArticle from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as singleArticleContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<SingleArticle />', () => {
  it('should render with default props', () => {
    const store = mockStore({ singleArticleContainer });
    const wrapper = shallow(
      <SingleArticle store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
