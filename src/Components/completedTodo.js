import React from 'react';
import { Link } from 'react-router-dom';
class Completed extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todo: [],
            viewAll: false
        };
        this.onChangeView = this.onChangeView.bind(this);
    }
    onChangeView(e){
        this.setState({
            viewAll: e.target.checked
        });
    }
    componentDidMount(){
        const selectedUser = this.props.location.state.det1;
        const url = "https://jsonplaceholder.typicode.com/todos?userId=" + selectedUser.id;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                todo: data,
            })
        });
    }
    render(){
        const todoDet = this.state.todo.map(todos => {           
                    if(todos.completed != this.state.viewAll){
                    return(                    
                    <tbody>
                    <tr key={todos.id}>
                    <td>{todos.title}</td>
                    </tr>
                    </tbody>
                    )
                    }
                 });
        const todoDet1 = this.state.todo.map(todos => {
                 return(
                        <table>
                        <tbody>
                        <tr key={todos.id}>
                        <td>{todos.title}</td>
                        </tr>
                        </tbody>
                        </table>
                        )
                    
            });
        const { fromPath } = this.props.location.state
        return(
             <div>
              <div>
                <input type="checkbox"
                        value={todoDet}
                        onChange={this.onChangeView}
                        checked={this.state.viewAll}
                />
                <span>View All</span>
                </div>
                <div className="container">
                <div className="card">
                <div className="card-header"><strong>ToDo Details</strong></div>
                <div className="card-body">
                <table className="table">
                   {this.state.viewAll ? <div>{todoDet1}</div> : <div>{todoDet}</div>}
                </table>
                </div> 
                <div className="card-footer">
                <Link className="btn btn-primary" to={fromPath}>Go Back</Link>
            </div>
            </div>            
            </div>
            </div>                         
            
        )
    }
}
export default Completed;