webpackJsonp([3,5],[
/* 0 */
/***/ function(module, exports) {

	

	var MyComponent = React.createClass({displayName: "MyComponent",
		handleClick: function() {
		  this.refs.myTextInput.focus();
		},
		render: function() {
		  return (
		    React.createElement("div", null, 
		      React.createElement("input", {type: "text", ref: "myTextInput"}), 
		      React.createElement("input", {type: "button", value: "Focus the text input", onClick: this.handleClick})
		    )
		  );
		}
	});

	ReactDOM.render(
		React.createElement(MyComponent, null),
		document.getElementById('example')
	);

/***/ }
]);