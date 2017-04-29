import { connect } from 'react-redux';
import { action_init } from '../actions/actions';
import MainContainer from './templates/main/MainContainer';

export default connect( 
    (store) => {
        return {
            data: store.reducer.data
        }
    }, 
    {
        action_init
    }
)(MainContainer);