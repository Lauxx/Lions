console.log("hello");

var TodoList = React.createClass({
	render: function(){
		var todosList = this.props.todos.map()
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

	loadTodosFromServer: function(){
		$.ajax({
			url: '/api/lions',
			method: 'GET'
		}).done(function(data){
			this.setState({
				todos: data
			})
		}.bind(this));
	},

	componentDidMount: function(){
		this.loadTodosFromServer();
	},




	render: function(){
		return(
			<div>
				<h1> hello universe </h1>
				<TodoList todos={ this.state.todos }/>	
			</div>
			)
	}
});


React.render(<App/>, document.getElementById('pickles'));