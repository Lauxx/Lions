console.log("hello");

var TodoList = React.createClass({
	render: function(){
		var self = this;
		var todosList = this.props.todos.map(function(todo){
			return (
				 <ul>
				<p>{todo.name}</p>
					<p>{todo.dueDate}</p>
					<p>{todo.description}</p>
					<button onClick = {self.props.handleDelete.bind(this, todo._id)}>delete</button>
				</ul>
				
				)
		})
		return(
			<div>
				{todosList} 
			</div>	
			)
	}
});


var TodoForm = React.createClass({
	render: function(){
		return(
			<form action="" method="POST" className="form-horizontal" role="form">
					<div className="form-group">
						<legend>Todo Form</legend>
					</div>
					<div>
					<input type="text" placeholder="name"/>
					</div>
					<div>
					<input type="text" placeholder="dueDate"/>
					</div>
					<div>
					<input type="text" placeholder="description"/>
					</div>
			
					<div className="form-group">
						<div className="col-sm-10 col-sm-offset-2">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</div>
			</form>

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
			url: '/api/todos',
			method: 'GET'
		}).done(function(data){
			this.setState({
				todos: data
			})
		}.bind(this));
	},

	handleDelete: function(id){
		var self = this;
		var id = id;
		$.ajax({
			url: '/api/todos/' + id,
			method: 'DELETE'
		}).done(function(){
			console.log('deleted todo');
			self.loadTodosFromServer();
		})
	},


	


	componentDidMount: function(){
		this.loadTodosFromServer();
	},




	render: function(){
		return(
			<div>
				<h1> hello universe </h1>
				<TodoList handleDelete={this.handleDelete} todos={ this.state.todos }/>	
				<TodoForm/>
			</div>
			)
	}
});


React.render(<App/>, document.getElementById('pickles'));


