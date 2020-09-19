import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNewsList, deleteNews } from '../actions';
import { Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loader from './common/Loader';
import _ from 'lodash';



const Home = (props) =>  {
    let loader = true;
    useEffect(() => {
      props.getNewsList()
    },[])

    let storyList = '';
    if(!_.isEmpty(props.newsList)) {
      loader = false
      storyList = props.newsList.map( (dataItem, i) => {
        return(
          <tr key={dataItem.data.id}>
            <td>{i+1}</td>
            <td><a href={dataItem.data.url} target="_blank" rel="noopener noreferrer">{dataItem.data.title}</a></td>
            <td>{dataItem.data.descendants}</td>
            <td>{dataItem.data.time}</td>
            <td><Button onClick={()=> props.deleteNews(dataItem.data.id)}>Delete</Button></td>
          </tr>
        )
      })
    } else {
      storyList = <tr style={{ textAlign:'center'}} ><td colSpan="5">No Record Found</td></tr>
    }
  	return(
  			<div>
          <hr />
          { loader && <Loader /> }
          <div style={{ textAlign:'center', padding:'15px'}}>
                    <h1>Hacker News Portal</h1> 

                    <Link to="" onClick={()=> props.getNewsList()} >Refresh</Link>

          </div>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {storyList}
            </tbody>
          </Table>

  			</div>
  	)
}

const mapStateToProps = (state) => {
	return {
		newsList: state.newsList,
	}
}



const mapDispathcToProps = (dispatch) => {
	return {
		getNewsList : () => (dispatch(getNewsList())),
    deleteNews : (id) => (dispatch(deleteNews(id))),
	}
}

export default connect(mapStateToProps,mapDispathcToProps)(Home);

