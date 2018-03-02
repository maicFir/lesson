import React from 'react';

import ReactDOM from 'react-dom';
var div = require("./Genter.js");
import CSSModules from 'react-css-modules';
import {
	Modal,
	Button,
	Form,
	FormGroup,
	Col,
	Row,
	Checkbox,
	FormControl,
	ControlLabel,
	ButtonToolbar,
	ButtonGroup,
	DropdownButton,
	MenuItem,
	SplitButton,
	Popover,
	OverlayTrigger,
	Tooltip,
	Nav,
	NavItem,
	NavDropdown,
	Tabs,
	Tab,
	Pagination,
	Pager
} from 'react-bootstrap';

import Routers from "./router.js";
//import styles from "./style/style.styl";
//document.getElementById("app").appendChild(div());
/*
var Elem = React.createClass({
	render:function(){
		return(<div>
			<p>从0到1dewdedwed hello react</p>	
		</div>)
	}

})
*/

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];



const MyLargeModal = React.createClass({

	render() {
		return(
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
		);
	}
})

const tooltip2 = (
	<Tooltip id="tooltip2"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
)
class Elem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}
	open() {
		this.setState({ showModal: true });
	}
	close() {
		this.setState({ showModal: false });
	}
	handleSelect(selectedKey) {
		alert(selectedKey + "===" + `${selectedKey}`)
	}
	getInitialState() {
	    return {
	      activePage: 1
	    }
  	}
	handleSelects(selectedKey) {
		this.setState({
			activePage:selectedKey
		})
	}
	handleSelect2(eventKey){
		this.setState({
			activePage: eventKey
		})
	}
	render() {

		const popover = (
			<Popover id="modal-popover" title="今日头条">
		         嘻嘻,哈哈
		      </Popover>
		)
		const tooltip = (
			<Tooltip id="modal-tooltip">
		        wow.
		      </Tooltip>
		)
		let smClose = () => this.setState({ smShow: false });
		let lgClose = () => this.setState({ lgShow: false });
		return(
			<div>
					 <Routers/>
					 <br/><br/><br/>
					 <Button bsStyle="danger">Danger</Button>
				     <Button bsStyle="primary" className="btn btn-default" bsSize="large" active>Primary button</Button>
				     <Button bsSize="large" active>Button2</Button>  
				     <ButtonToolbar>
					      <Button href="#">Link</Button>
					      <Button>Button</Button>
    				</ButtonToolbar>
    				<ButtonGroup vertical block>
					    <Button>Button</Button>
					    <Button>Button</Button>
					    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
					      <MenuItem eventKey="1">Dropdown link</MenuItem>
					      <MenuItem eventKey="2">Dropdown link</MenuItem>
					    </DropdownButton>
					    <Button>Button</Button>
					    <Button>Button</Button>
					    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
					      <MenuItem eventKey="1">Dropdown link</MenuItem>
					      <MenuItem eventKey="2">Dropdown link</MenuItem>
					    </DropdownButton>
					    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
					      <MenuItem eventKey="1">Dropdown link</MenuItem>
					      <MenuItem eventKey="2">Dropdown link</MenuItem>
					    </DropdownButton>
  					</ButtonGroup>
    				 <ButtonGroup justified>
					    <Button href="#">Left</Button>
					    <Button href="#">Middle</Button>
					    <DropdownButton title="Dropdown" id="bg-justified-dropdown">
					      <MenuItem eventKey="1">Dropdown link</MenuItem>
					      <MenuItem eventKey="2">Dropdown link</MenuItem>
					    </DropdownButton>
  					</ButtonGroup>
  					<ButtonGroup>
	  					{
							BUTTONS.map(function(title, i) {
							  return (
							    <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
							      <MenuItem eventKey="1">Action</MenuItem>
							      <MenuItem eventKey="2">Another action</MenuItem>
							      <MenuItem eventKey="3">Something else here</MenuItem>
							      <MenuItem divider />
							      <MenuItem eventKey="4">Separated link</MenuItem>
							    </SplitButton>
							  )
							})
	  					}
	  				</ButtonGroup>
  					
  					 <ButtonToolbar>
					      <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
					        <MenuItem eventKey="1">Action</MenuItem>
					        <MenuItem eventKey="2">Another action</MenuItem>
					        <MenuItem eventKey="3">Something else here</MenuItem>
					        <MenuItem divider />
					        <MenuItem eventKey="4">Separated link</MenuItem>
					      </DropdownButton>
    				</ButtonToolbar>
  					
  					<ButtonToolbar>
					    <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
					      <MenuItem eventKey="1">Action</MenuItem>
					      <MenuItem eventKey="2">Another action</MenuItem>
					      <MenuItem eventKey="3">Something else here</MenuItem>
					      <MenuItem divider />
					      <MenuItem eventKey="4">Separated link</MenuItem>
					    </DropdownButton>
  					</ButtonToolbar>
  					
  					<ButtonToolbar>
				      <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
				        <MenuItem eventKey="1">Action</MenuItem>
				        <MenuItem eventKey="2">Another action</MenuItem>
				        <MenuItem eventKey="3">Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey="4">Separated link</MenuItem>
				      </SplitButton>
    				</ButtonToolbar>
  					
  					<Button
				          bsStyle="primary"
				          bsSize="large"
				          onClick={this.open.bind(this)}
				        >
          				打开
        			</Button>
  					 <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
				          <Modal.Header closeButton>
				            <Modal.Title>Modal heading</Modal.Title>
				          </Modal.Header>
				          <Modal.Body>
					            <h4>Text in a modal</h4>
					            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
						
					            <h4>Popover in a modal</h4>
					           	<p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
					
					            <h4>Tooltips in a modal</h4>
					          	 <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
					            <hr />
					            <h4>Overflowing text to show scroll behavior</h4>
					            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
					            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
					            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
				          </Modal.Body>
				          <Modal.Footer>
				            	<Button onClick={this.close.bind(this)}>Close</Button>
				          </Modal.Footer>
        			</Modal>
 
        			 <ButtonToolbar>
				        <Button bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
				          Launch large demo modal
				        </Button>
				        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      				 </ButtonToolbar>
      				
      				 <OverlayTrigger placement="right" positionLeft={200} overlay={tooltip2} title="Popover right">
      					<Button bsStyle="default">Holy guacamole!</Button>
    				</OverlayTrigger>
      				 
      				 
      				 <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
				        <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
				        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
				        <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
				        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
				          <MenuItem eventKey="4.1">Action</MenuItem>
				          <MenuItem eventKey="4.2">Another action</MenuItem>
				          <MenuItem eventKey="4.3">Something else here</MenuItem>
				          <MenuItem divider />
				          <MenuItem eventKey="4.4">Separated link</MenuItem>
				        </NavDropdown>
				      </Nav>
				      
				      
				      
				      
				       <h2>Tab</h2>
				       <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
						    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
						    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
						    <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
  						</Tabs>	
  						 <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first" aria-controls>
						    <Row className="clearfix">
						      <Col sm={4}>
						        <Nav bsStyle="tabs" id="">
						          <NavItem eventKey="first">
						            Tab 1
						          </NavItem>
						          <NavItem eventKey="second">
						            Tab 2
						          </NavItem>
						          <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
						            <MenuItem eventKey="3.1">Action</MenuItem>
						            <MenuItem eventKey="3.2">Another action</MenuItem>
						            <MenuItem eventKey="3.3">Something else here</MenuItem>
						            <MenuItem divider />
						            <MenuItem eventKey="3.4">Separated link</MenuItem>
						          </NavDropdown>
						        </Nav>
						      </Col>
						      <Col sm={8}>
						        <Tab.Content animation>
						          <Tab.Pane eventKey="first">
						            Tab 1 content
						          </Tab.Pane>
						          <Tab.Pane eventKey="second">
						            Tab 2 content
						          </Tab.Pane>
						          <Tab.Pane eventKey="3.1">
						            Tab 3.1 content
						          </Tab.Pane>
						          <Tab.Pane eventKey="3.2">
						            Tab 3.2 content
						          </Tab.Pane>
						          <Tab.Pane eventKey="3.3">
						            Tab 3.3 content
						          </Tab.Pane>
						          <Tab.Pane eventKey="3.4">
						            Tab 3.4 content
						          </Tab.Pane>
						        </Tab.Content>
						      </Col>
    				</Row>
 				 </Tab.Container>
  				<h2>tabContainer</h2>
  				<Tab.Container id="left-tabs-example" defaultActiveKey="2" aria-controls>
				    <Row className="clearfix">
				      <Col sm={4}>
				        <Nav bsStyle="pills" stacked>
				          <NavItem eventKey="1">
				            Tab 1
				          </NavItem>
				          <NavItem eventKey="2">
				            Tab 2
				          </NavItem>
				        </Nav>
				      </Col>
				      <Col sm={4}>
				        <Tab.Content animation>
				          <Tab.Pane eventKey="1">
				            Tab 1 content
				          </Tab.Pane>
				          <Tab.Pane eventKey="2">
				            Tab 2 content
				          </Tab.Pane>
				        </Tab.Content>
				      </Col>
				      
				    </Row>
  				</Tab.Container>		
  				 <Pagination
		          bsSize="large"
		          items={10}
          		  activePage={this.state.activePage}
          		  onSelect={this.handleSelects.bind(this)} />	
  				
  				 <Pagination
			        prev
			        next
			        first
			        last
			        ellipsis
			        boundaryLinks
			        items={20}
			        maxButtons={6}
			        activePage={this.state.activePage}
			        onSelect={this.handleSelect2.bind(this)} />
  				
  					<Pager bsClass="pager">
	  					<Pager.Item previous href="#">&larr; prev</Pager.Item>
	    				<Pager.Item next href="#">next &rarr;</Pager.Item>
	    			</Pager>
	    			<h1>栅格布局</h1>
	    			<Row className="show-grid">
						 <Col xs={12} md={8}>8等分</Col>
      					 <Col xs={6} md={4}>4等分</Col>
	    			</Row>
	    			
	    			 <Row className="show-grid">
				      <Col md={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
				      <Col md={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
    				</Row>
				</div>
		)
	}
}

ReactDOM.render(<Elem/>, document.getElementById("app2"));