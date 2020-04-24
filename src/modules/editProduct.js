import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { Link } from "react-router-dom";
import Header from '../components/header/header'

class EditProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_name: "",
      product_image_url: "",
      header_top_right_text: "",
      header_top_left_text: "",
      product_url: "",
      header_top_right_url: "",
      product_cta_text: ""
    }

  }
  componentDidMount() {
    let data = sessionStorage.getItem("editdata")
    this.setState({
      product_name: data["product-name"],
      product_image_url: data["product-image-url"],
      header_top_right_text: data["header_top_right_text"],
      header_top_left_text: data["header_top_left_text"],
      product_url:data["product-url"],
      header_top_right_url: data["header_top_right_url"],
      product_cta_text: data["product_cta_text"]
    })

  }
  componentWillReceiveProps(nextProps) {
    const { isSuccess, isLoggedIn, isError, isLoading } = nextProps.product.getProduct;
    if (isError) {
      alert(" Submition Failed")
    }
    else if (isSuccess) {
      this.props.history.push('/getProduct')
    }
  }
  handleChange(e) {
    const { target: { name, value } } = e
    this.setState({ [name]: value })

  }
  onSubmitLogin() {

    const { product_name, product_image_url, header_top_right_text, header_top_left_text, product_url, header_top_right_url, product_cta_text } = this.state;
    this.props.editProductRequest({
      "product-name": product_name,
      "product-image-url": product_image_url,
      "header-top-right-text": header_top_right_text,
      "header-top-left-text": header_top_left_text,
      "product-url": product_url,
      "header-top-right-url": header_top_right_url,
      "product-cta-text": product_cta_text

    });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className='login-view container-fluid'>
        <Header />
        <div className='row'>
          <div className='col-sm-12'>
            <div className='row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-6 form'>
                <h1 className="pageHeading">ADD PRODUCT</h1>
                <input
                  type='text'
                  placeholder='product_name'
                  name='product_name'
                  value={this.state.product_name}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <input
                  type='text'
                  placeholder='product_image_url'
                  name="product_image_url"
                  value={this.state.product_image_url}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <input
                  type='text'
                  placeholder='header_top_right_text'
                  name='header_top_right_text'
                  value={this.state.header_top_right_text}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <input
                  type='text'
                  placeholder='header_top_left_text'
                  name="header_top_left_text"
                  value={this.state.header_top_left_text}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <input
                  type='text'
                  placeholder='product_url'
                  name='product_url'
                  value={this.state.product_url}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <input
                  type='text'
                  placeholder='header_top_right_url'
                  name='header_top_right_url'
                  value={this.state.header_top_right_url}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />
                <input
                  type='text'
                  placeholder='product_cta_text'
                  name='product_cta_text'
                  value={this.state.product_cta_text}
                  onChange={(e) => this.handleChange(e)}
                />
                <br />

                <button onClick={() => this.onSubmitLogin()} >Submit</button>
                <br />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
