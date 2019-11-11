import React from 'react';
import './modal.scss'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: true,
            addItem: '',
            ...props
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isShowModal: nextProps.isShowModal
        });
    }

    onToggle = (event,data) => {
        this.setState({
            isShowModal: !this.state.isShowModal
        }, () => {
            this.state.onStateChange(this.state);
            this.setState({
                addItem:null,
                selectedId:null
            });
            this.refs['addItemInput'].value = "";
        })
    };

    onAddItem = () => {
        this.setState({
            addItem: this.refs['addItemInput'].value
        },()=>{
            this.onToggle(null,1)
        })
    };


    render() {
        return (
                <div className={"modal " + (this.state.isShowModal ? 'show':'hide')}>
                    <i className="cp icon-close fs24"  onClick={ (e)=>{
                        this.onToggle(e,1);
                    }}/>
                    <span className="modal-triangle"></span>
                    <p>Separate multiple resource name with commas</p>
                    <input ref='addItemInput'  placeholder='Input value' type="text" />
                    <span className="cp modal-action-add" onClick={(e)=>{
                        this.onAddItem();
                    }}>Add Resource</span>
                    <span className="cp modal-action-cancel"  onClick={(e) => {
                        this.onToggle(e,1);
                    }}>Cancel</span>
                </div>

        )
    }
}

export default Modal;