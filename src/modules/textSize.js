/**
 *  action type 정의
 */
const INCREASE = 'textsize/INCREASE';
const DECREASE = 'textsize/DECREASE';

/**
 *  action 생성함수 정의
 */
export const increase = () => ({
    type: INCREASE,
});
export const decrease = () => ({
    type: DECREASE,
});

/**
 *  초기값 세팅
 */
const initialState = {
    textSize: 20,
};

/**
 * Reducer
 */
function textSizeReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                textSize: state.textSize * 2,
            };
        case DECREASE:
            return {
                textSize: state.textSize / 2,
            };
        default:
            return state;
    }
}

export default textSizeReducer;
