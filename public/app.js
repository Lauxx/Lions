console.log("hello");

var TodoList = React.createClass({
	render: function(){
		return(
			<div>
				<p>Hello there TODO list </p>
			</div>	
			)
	}
});

var App = React.createClass({

	getInitialState: function (){
		return{
			todos: []
		}
	},




	render: function(){
		return(
			<div>
				<h1> hello universe </h1>
				<TodoList/>	
			</div>
			)
	}
});


React.render(<App/>, document.getElementById('pickles'));