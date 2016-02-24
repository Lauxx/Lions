console.log("hello");

var BlogList = React.createClass({
	render: function(){
		return(
			<div>
				<p>Hello there bloglist </p>
			</div>	
			)
	}
});

var App = React.createClass({
	render: function(){
		return(
			<div>
				<h1> hello universe </h1>
				<BlogList/>	
			</div>
			)
	}
});


React.render(<App/>, document.getElementById('pickles'));