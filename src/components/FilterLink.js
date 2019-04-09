import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'
const Link = ({active, children, onClick}) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
)

//对传入props的做类型检查

const mapStateToProps = (state, ownProps) => ({
    active: state.filterTodo === ownProps.filter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)