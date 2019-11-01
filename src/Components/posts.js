import React from 'react';
import { Link } from 'react-router-dom';
class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            postData: []
        };
    }
    componentDidMount(){
        const det = this.props.location.state.det1;
        const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + det.id;
         fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                postData: data
            });
        });
        }
    render() {       
        const length1 = this.state.postData.length;
        const postDet = this.state.postData.map(postDet1 => {
                                                            return <tbody>
                                                                    <tr key={postDet1.id}>
                                                                    <td>{postDet1.title}</td>
                                                                    </tr>
                                                                    <tr key={postDet1.id}>
                                                                    <td>{postDet1.body}</td>
                                                                    </tr>
                                                                    <tr key={postDet1.id}>
                                                                    <td><Link to={
                                                                        {
                                                                                   pathname: '/viewComments',
                                                                                   state: { postDet2: {id: postDet1.id}, fromPath: '/posts'}
                                                                        }
                                                                    }>View Comments</Link></td>                                                                      
                                                                    </tr>                                                                   
                                                            </tbody>
        })
        const { fromPath } = this.props.location.state
        return (
                <div className="container">
                <div className="card">
                <div className="card-header"><strong>Post Details</strong></div>
                <div className="card-body">
                <p align="right"><strong>Total:{length1}</strong></p>
                    <table className="table">
                        {postDet}
                    </table>                                                      
                                   
                </div>
                <div className="card-footer">
                <Link className="btn btn-primary" to={fromPath}>Go Back</Link>

            </div>
            </div>      
        </div>
                    );
     }
}
export default Posts;