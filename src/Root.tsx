import { EnthusiasmAction } from 'actions';
import * as React from 'react';
import { Provider } from 'react-redux';
import enthusiasm from 'reducers/enthusiasm';
import { createStore } from 'redux';
import { IStoreState } from 'types';
 
export default (props: any) => {

    const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, props.initialState);

    return (
        <Provider store={store} >
            {props.children}
        </Provider>
    );
}