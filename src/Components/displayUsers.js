import React from 'react';
import { Link } from 'react-router-dom';
import Completed from './completedTodo';
import Posts from './posts';
import './Users.css';
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                users: data
            })
        });
    }
    render(){
        var length1 = this.state.users.length;
        const usersdet = this.state.users.map(det => {
               return <tbody>
                  <tr key={ det.id }>
                  <td>{det.name}</td>
                  <td>{det.username}</td>
                  <td>{det.email}</td>                                 
                  <td>
                      <tr><td>{det.address.street}</td></tr>
                      <tr><td>{det.address.suite}</td></tr>
                      <tr><td>{det.address.city}</td></tr>
                      <tr><td>{det.address.zipcode}</td></tr>
                  </td>
                  <td><Link to={
                          {
                              pathname: '/completedTodo',
                              state: { det1: {id: det.id}, fromPath: '/displayUsers'}
                          }
                      }>view</Link></td> 
                    <td><Link to={
                        {
                            pathname: '/posts',
                            state: { det1: {id: det.id}, fromPath: '/displayUsers'}
                        }
                    }>View</Link></td>                                 
                    </tr>
                    </tbody>                                  
          });
          return (
              <div>
                  <div className="Num-user">
                  <p align="right"><strong>Number of Users: {length1}</strong></p>
                  </div>
                  <div>
                  <table className="table table-hover">
                      <thead>
                          <tr><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Todos</th><th>Posts</th></tr>
                      </thead>
                      
                          {usersdet}
                      
                  </table>
                  </div>
              </div>
          )
    }
}
export default Users;