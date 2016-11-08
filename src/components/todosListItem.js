import React from "react";



export default class ToDosListItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return(
                <td>
                <button >Save</button>
                <button onCLick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
            <button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button>Delete</button>
            </td>
        )
    }

    render() {
        return (
            <tr>
                <td>{this.props.tasks}</td>
                <td>
                    {this.renderActionsSection()}
                </td>
            </tr>
        );
    }
    onEditClick(){
        this.setState({ isEditing: true});
    }

    onCancelClick(){
        this.setState({ isEditing: false})
    }
}
