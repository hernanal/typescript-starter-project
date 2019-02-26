import * as constants from '../../constants/index';
import { decrementEnthusiasm, IDecrementEnthusiasm, incrementEnthusiasm, IncrementEnthusiasm} from '../index';

describe('decrementEnthusiasm', () => {

    it('has the correct type', () => {
        const action: IDecrementEnthusiasm = decrementEnthusiasm();

        expect(action.type).toEqual(constants.DECREMENT_ENTHUSIASM);
    });
});

describe('incrementEnthusiasm', () => {

    it('has the correct type', () => {
        const action: IncrementEnthusiasm = incrementEnthusiasm();

        expect(action.type).toEqual(constants.INCREMENT_ENTHUSIASM);
    });
});