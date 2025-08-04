import * as bugActionCreators from '../actions'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export default function useBugActionDispatchers(){
    const bugActionDispatchers = bindActionCreators(
      bugActionCreators,
      useDispatch()
    );
    return bugActionDispatchers;
}