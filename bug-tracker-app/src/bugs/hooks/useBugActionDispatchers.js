import * as bugActionCreators from '../actions'
import { useDispatch } from 'react-redux';

export default function useBugActionDispatchers(){
    const bugActionDispatchers = bindActionCreators(
      bugActionCreators,
      useDispatch()
    );
    return bugActionDispatchers;
}