import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header/profileHeader";
import { isUserAlreadyLoggedIn } from "../generic/index";

class GetProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData:[]
    };
    
  }

  componentDidMount() {
      this.props.getProductRequest()

  }
  componentWillMount() {
    
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps.product.getProduct.isSuccess){
        this.setState({
            displayData:nextProps.product.getProduct.data
        })
    }
    if(nextProps.product.deleteProduct.isSuccess){
        this.props.getProductRequest()
    }
  }

  onDelete(id){
      this.props.deleteProductRequest(id)
  

  }
  onEdit(val){
      sessionStorage.getItem("editdata",val)
      this.props.history.push("/editProduct")
  }
  createProduct(){
      this.props.history.push("/createProduct")
      
  }

  render() {
      
    
    return (
<div className='login-view container-fluid'>
                <Header />
                <div className='row'>
                    <div className='col-sm-12'>
                            <div className='row'>
                    <div className='col-sm-12'>
                        <button type="button" id ="ccreate" onClick={(e)=>this.createProduct(e)}  >Add Product</button>
                        
                        </div>
                        </div>
                        <div className="row">
                           
                            <div className="col-sm-12">
                                <div className="col-sm-1" />
                                <div className="col-sm-10">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product Name</th>
                                                <th>Product image url</th>
                                                <th>Product url</th>
                                               
                                                <th>Product For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.displayData.hits != undefined ? this.state.displayData.length != 0 ? this.state.displayData.map((val, i) => (

                                                <tr key={i}>
                                                    <td><button className="btn btn-primary" type="button" onClick={() => this.onDelete(val.product-id)}> Delete</button>
                                                    <button className="btn <btn-success>q</btn-success>" type="button" onClick={() => this.onEdit(val)}> edit</button>
                                                    
                                                    </td>
                                                    <td>{val.product-name}</td>
                                                    <td>{val.product-image-url}</td>
                                                    <td>{val.product-url}</td>
                                                    <td>{val.product-top-left-text}</td>

                                                </tr>
                                            )) : <tr width="100%"> No Data Found</tr> : <tr width="100%"> No Data Found</tr>}


                                        </tbody>
                                    </table>

                                </div>
                                <div className="col-sm-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    product: state.product

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GetProduct);
