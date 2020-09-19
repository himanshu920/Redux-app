import { mount } from 'enzyme';
import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './Home';
import { MemoryRouter } from "react-router-dom";

describe('Home validating home', () => {
    const setup = () => {
        const store = createStore(_.identity, state);
        const wrapper = mount(
            <MemoryRouter>
            <Provider store={store}>
                <Home {...props} />
            </Provider>
            </MemoryRouter>,
        );

        return {
            connectedComponent: wrapper,
            props,
        };
    };

    it('should render hacker news.', () => {
        const { connectedComponent } = setup();
        const Home = connectedComponent.find('storyList');
        expect(Home.exists()).toBe(true);
    });

    
  
});