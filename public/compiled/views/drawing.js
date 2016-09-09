"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function Board() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement("canvas", { id: "canvas", width: "375", height: "375" })
	);
};

var Drawing = function (_React$Component) {
	_inherits(Drawing, _React$Component);

	function Drawing(props) {
		_classCallCheck(this, Drawing);

		var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, props));

		_this.state = {
			drawCanvas: false,
			countdown: 4
		};
		return _this;
	}

	_createClass(Drawing, [{
		key: "componentWillMount",
		value: function componentWillMount() {

			// create canvas
			var image = null;

			socket.on('draw', function () {

				this.setState({
					drawCanvas: true
				});

				var canvas = new fabric.Canvas('canvas', {
					isDrawingMode: true
				});

				// set brush size
				canvas.freeDrawingBrush.width = 10;

				//redirect to draw view
				canvas.on('path:created', function (options) {
					image = JSON.stringify(canvas);
					// console.log('Saving drawing to image variable...');
					// console.log(JSON.stringify(canvas));
				});
			}.bind(this));

			socket.on('end', function () {
				//send image to server
				socket.emit('image', image);
				window.location.href = '#/vote';
			});

			this.setState({
				countdown: setInterval(function () {}.bind(this), 1000)
			});
		}
	}, {
		key: "countdown",
		value: function countdown() {
			document.getElementsByClassName('countdown')[0].style.display = 'none';
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "prompt" },
					"Draw a ",
					window.Animal
				),
				_react2.default.createElement(
					"div",
					{ className: "countdown" },
					" Start drawing in ",
					this.state.countdown ? this.countdown : this.state.countdown
				),
				this.state.drawCanvas ? _react2.default.createElement(Board, null) : null
			);
		}
	}]);

	return Drawing;
}(_react2.default.Component);

exports.default = Drawing;
<<<<<<< 8135fb6d644b754bf594aa482387d30468b9bd9f
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFPcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVksS0FEQTtBQUVaLGNBQVc7QUFGQyxHQUFiO0FBRmtCO0FBTWxCOzs7O3VDQUVvQjs7QUFFcEI7QUFDQSxPQUFJLFFBQVEsSUFBWjs7QUFHQSxVQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFlBQVk7O0FBRTdCLFNBQUssUUFBTCxDQUFjO0FBQ2IsaUJBQVk7QUFEQyxLQUFkOztBQUlBLFFBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUN2QyxvQkFBZTtBQUR3QixLQUE1QixDQUFiOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQzs7QUFFQztBQUNBLFdBQU8sRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBUyxPQUFULEVBQWtCO0FBQzFDLGFBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0E7QUFDQTtBQUNELEtBSkQ7QUFLRCxJQW5CaUIsQ0FtQmhCLElBbkJnQixDQW1CWCxJQW5CVyxDQUFsQjs7QUFxQkEsVUFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCO0FBQ0EsV0FBTyxJQUFQLENBQVksT0FBWixFQUFxQixLQUFyQjtBQUNBLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixRQUF2QjtBQUNELElBSkQ7O0FBTUEsUUFBSyxRQUFMLENBQWM7QUFDYixlQUFXLFlBQVksWUFBVyxDQUVqQyxDQUZzQixDQUVyQixJQUZxQixDQUVoQixJQUZnQixDQUFaLEVBRUUsSUFGRjtBQURFLElBQWQ7QUFLQTs7OzhCQUlXO0FBQ1gsWUFBUyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxFQUFnRCxLQUFoRCxDQUFzRCxPQUF0RCxHQUFnRSxNQUFoRTtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxPQUFLLFdBQVUsUUFBZjtBQUFBO0FBQWdDLFlBQU87QUFBdkMsS0FEQTtBQUVBO0FBQUE7QUFBQSxPQUFLLFdBQVUsV0FBZjtBQUFBO0FBQThDLFVBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsS0FBSyxTQUE1QixHQUF3QyxLQUFLLEtBQUwsQ0FBVztBQUFqRyxLQUZBO0FBR0MsU0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3Qiw4QkFBQyxLQUFELE9BQXhCLEdBQW9DO0FBSHJDLElBREQ7QUFRQTs7OztFQWhFbUMsZ0JBQU0sUzs7a0JBQXRCLE8iLCJmaWxlIjoiZHJhd2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbnZhciBCb2FyZCA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9XCIzNzVcIiBoZWlnaHQ9XCIzNzVcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZSxcblx0XHRcdGNvdW50ZG93bjogNFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIGNyZWF0ZSBjYW52YXNcblx0XHR2YXIgaW1hZ2UgPSBudWxsO1xuXG5cblx0XHRzb2NrZXQub24oJ2RyYXcnLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkcmF3Q2FudmFzOiB0cnVlXG5cdFx0XHR9KVxuXG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycsIHtcblx0XHRcdCAgaXNEcmF3aW5nTW9kZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHNldCBicnVzaCBzaXplXG5cdFx0XHRjYW52YXMuZnJlZURyYXdpbmdCcnVzaC53aWR0aCA9IDEwO1xuXG5cdFx0ICAvL3JlZGlyZWN0IHRvIGRyYXcgdmlld1xuXHRcdCAgY2FudmFzLm9uKCdwYXRoOmNyZWF0ZWQnLCBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0ICAgIGltYWdlID0gSlNPTi5zdHJpbmdpZnkoY2FudmFzKTtcblx0XHQgICAgLy8gY29uc29sZS5sb2coJ1NhdmluZyBkcmF3aW5nIHRvIGltYWdlIHZhcmlhYmxlLi4uJyk7XG5cdFx0ICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNhbnZhcykpO1xuXHRcdCAgfSk7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNvY2tldC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdCAgLy9zZW5kIGltYWdlIHRvIHNlcnZlclxuXHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvdm90ZScgXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvdW50ZG93bjogc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFxuXHRcdFx0fS5iaW5kKHRoaXMpLDEwMDApXG5cdFx0fSlcblx0fVxuXG5cblxuXHRjb3VudGRvd24oKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnRkb3duJylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0XCI+RHJhdyBhIHt3aW5kb3cuQW5pbWFsfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj4gU3RhcnQgZHJhd2luZyBpbiB7dGhpcy5zdGF0ZS5jb3VudGRvd24gPyB0aGlzLmNvdW50ZG93biA6IHRoaXMuc3RhdGUuY291bnRkb3dufTwvZGl2PlxuXHRcdFx0e3RoaXMuc3RhdGUuZHJhd0NhbnZhcyA/IDxCb2FyZCAvPiA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0KVxuXHR9XG59XG5cblxuXG5cblxuIl19
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbIkJvYXJkIiwiRHJhd2luZyIsInByb3BzIiwic3RhdGUiLCJkcmF3Q2FudmFzIiwiaW1hZ2UiLCJzb2NrZXQiLCJvbiIsInNldFN0YXRlIiwiY2FudmFzIiwiZmFicmljIiwiQ2FudmFzIiwiaXNEcmF3aW5nTW9kZSIsImZyZWVEcmF3aW5nQnJ1c2giLCJ3aWR0aCIsIm9wdGlvbnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJlbWl0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiQW5pbWFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLE1BQTFCLEVBQWlDLFFBQU8sS0FBeEM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFNcUJDLE87OztBQUNwQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsZUFBWTtBQURBLEdBQWI7QUFGa0I7QUFLbEI7Ozs7dUNBRW9COztBQUVwQjtBQUNBLE9BQUlDLFFBQVEsSUFBWjs7QUFFQUMsVUFBT0MsRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTs7QUFFN0IsU0FBS0MsUUFBTCxDQUFjO0FBQ2JKLGlCQUFZO0FBREMsS0FBZDs7QUFJQSxRQUFJSyxTQUFTLElBQUlDLE9BQU9DLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEI7QUFDdkNDLG9CQUFlO0FBRHdCLEtBQTVCLENBQWI7O0FBSUE7QUFDQUgsV0FBT0ksZ0JBQVAsQ0FBd0JDLEtBQXhCLEdBQWdDLEVBQWhDOztBQUVDO0FBQ0FMLFdBQU9GLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNRLE9BQVQsRUFBa0I7QUFDMUNWLGFBQVFXLEtBQUtDLFNBQUwsQ0FBZVIsTUFBZixDQUFSO0FBQ0FTLGFBQVFDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBRCxhQUFRQyxHQUFSLENBQVlILEtBQUtDLFNBQUwsQ0FBZVIsTUFBZixDQUFaO0FBQ0QsS0FKRDtBQUtELElBbkJpQixDQW1CaEJXLElBbkJnQixDQW1CWCxJQW5CVyxDQUFsQjs7QUFxQkFkLFVBQU9DLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLFlBQVk7QUFDM0I7QUFDQUQsV0FBT2UsSUFBUCxDQUFZLE9BQVosRUFBcUJoQixLQUFyQjtBQUNBaUIsV0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRCxJQUpEO0FBS0E7OzsyQkFJUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUtGLFlBQU9HO0FBQVosS0FEQTtBQUVDLFNBQUt0QixLQUFMLENBQVdDLFVBQVgsR0FBd0IsOEJBQUMsS0FBRCxPQUF4QixHQUFvQztBQUZyQyxJQUREO0FBT0E7Ozs7RUFuRG1DLGdCQUFNc0IsUzs7a0JBQXRCekIsTyIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xudmFyIEJvYXJkID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjE0MDBcIiBoZWlnaHQ9XCI0ODBcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblxuXHRcdHNvY2tldC5vbignZHJhdycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRyYXdDYW52YXM6IHRydWVcblx0XHRcdH0pXG5cblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJywge1xuXHRcdFx0ICBpc0RyYXdpbmdNb2RlOiB0cnVlXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gc2V0IGJydXNoIHNpemVcblx0XHRcdGNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLndpZHRoID0gMTA7XG5cblx0XHQgIC8vcmVkaXJlY3QgdG8gZHJhdyB2aWV3XG5cdFx0ICBjYW52YXMub24oJ3BhdGg6Y3JlYXRlZCcsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHQgICAgaW1hZ2UgPSBKU09OLnN0cmluZ2lmeShjYW52YXMpO1xuXHRcdCAgICBjb25zb2xlLmxvZygnU2F2aW5nIGRyYXdpbmcgdG8gaW1hZ2UgdmFyaWFibGUuLi4nKTtcblx0XHQgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2FudmFzKSk7XG5cdFx0ICB9KTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0ICAvL3NlbmQgaW1hZ2UgdG8gc2VydmVyXG5cdFx0ICBzb2NrZXQuZW1pdCgnaW1hZ2UnLCBpbWFnZSk7IFxuXHRcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy92b3RlJyBcblx0XHR9KTtcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8aDE+e3dpbmRvdy5BbmltYWx9PC9oMT5cblx0XHRcdHt0aGlzLnN0YXRlLmRyYXdDYW52YXMgPyA8Qm9hcmQgLz4gOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG5cblxuXG5cbiJdfQ==
>>>>>>> Front end changes
