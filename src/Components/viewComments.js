import React from 'react';
import { Link } from 'react-router-dom';
class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            commentData: []
        };
    }
    componentDidMount() {
        const commentDet = this.props.location.state.postDet2;
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + commentDet.id;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                commentData: data
            });
        });
    }
    render() {
        const length1 = this.state.commentData.length;
        const comments = this.state.commentData.map(cmt => {
            return <tbody>
                    <tr key={cmt.id}>
                    <td> From:  {cmt.name}</td><td>,Email: {cmt.email}</td>
                    </tr>
                    <tr key={cmt.id}>
                    <td>{cmt.body}</td>
                    </tr>
                    </tbody>
        });
        // const { fromPath } = this.props.location.state
            return(
            <div>
            <div>
                <p align="right"><strong>Total:{length1}</strong></p>
            </div>
             <div className="container">
             <div className="card">  
             <div className="card-body"> 
             <table className="table">
                        {comments}
            </table>                                                
             </div>
                {/* <div className="card-footer">
                    <Link className="btn btn-primary" to={fromPath}>Go Back</Link>
                </div> */}
            </div>      
           </div> 
         </div>
       )
    } 

}
export default Comments;