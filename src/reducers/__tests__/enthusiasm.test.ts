import { EnthusiasmAction } from '../../actions';
import * as constants from '../../constants/index';
import { enthusiasm } from '../index';

it('handles actions of type DECREMENT_ENTHUSIASM', () => {
    const action: EnthusiasmAction = {
        type: constants.DECREMENT_ENTHUSIASM
    };

    const newState = enthusiasm({ enthusiasmLevel: 2, languageName: 'Test'}, action);

    expect(newState.enthusiasmLevel).toEqual(1);
});

it('handles actions of type INCREMENT_ENTHUSIASM', () => {
    const action: EnthusiasmAction = {
        type: constants.INCREMENT_ENTHUSIASM
    };

    const newState = enthusiasm({ enthusiasmLevel: 2, languageName: 'Test'}, action);

    expect(newState.enthusiasmLevel).toEqual(3);
});