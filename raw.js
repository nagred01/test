(function(React, _reactNative, _reactNavigation, styles, createAppContainer){

  var _inherits = inherits;

  var SimpleView = exports.SimpleView = function (_React$Component) {
  _inherits(SimpleView, _React$Component);

  function SimpleView() {
    _classCallCheck(this, SimpleView);

    return _possibleConstructorReturn(this, (SimpleView.__proto__ || Object.getPrototypeOf(SimpleView)).apply(this, arguments));
  }

  _createClass(SimpleView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _reactNative.Text,
        null,
        'Simple View'
      );
    }
  }]);

  return SimpleView;
}(React.Component);

var AccountSummary = exports.AccountSummary = function (_React$Component2) {
  _inherits(AccountSummary, _React$Component2);

  function AccountSummary(props) {
    _classCallCheck(this, AccountSummary);

    var _this2 = _possibleConstructorReturn(this, (AccountSummary.__proto__ || Object.getPrototypeOf(AccountSummary)).call(this, props));

    _this2.state = {
      AccoutModel: [{
        AccountId: 1,
        AccountName: "Super Savings"
      }, {
        AccountId: 2,
        AccountName: "Checking"
      }, {
        AccountId: 3,
        AccountName: "Deposits"
      }]
    };
    return _this2;
  }

  _createClass(AccountSummary, [{
    key: 'render',
    value: function render() {
      var accounts = this.state.AccountModel.map(function (account) {
        return React.createElement(
          _reactNative.View,
          null,
          React.createElement(
            _reactNative.Text,
            null,
            'AccountId : ',
            account.AccountId
          ),
          React.createElement(
            _reactNative.Text,
            null,
            'AccountName: ',
            account.AccountName
          )
        );
      });
      return React.createElement(
        _reactNative.View,
        null,
        accounts
      );
    }
  }]);

  return AccountSummary;
}(React.Component);
// Notification component


var MyDrawer = function (_React$Component3) {
  _inherits(MyDrawer, _React$Component3);

  function MyDrawer() {
    _classCallCheck(this, MyDrawer);

    return _possibleConstructorReturn(this, (MyDrawer.__proto__ || Object.getPrototypeOf(MyDrawer)).apply(this, arguments));
  }

  _createClass(MyDrawer, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(_reactNative.Button, {
        onPress: function onPress() {
          return _this4.props.navigation.goBack();
        },
        title: 'Go back home'
      });
    }
  }]);

  return MyDrawer;
}(React.Component);

MyDrawer.navigationOptions = {
  drawerLabel: 'Notifications',
  drawerIcon: function drawerIcon(_ref) {
    var tintColor = _ref.tintColor;
    return React.createElement(_reactNative.Image, {
      source: 'https://icons-for-free.com/free-icons/png/64/105234.png',
      style: {
        width: 24,
        height: 24
      }
    });
  }
};

var App = exports.App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _reactNative.View,
        null,
        React.createElement(
          _reactNative.Text,
          null,
          'Main Page'
        )
      );
    }
  }]);

  return App;
}(React.Component);

// Drawer Navigator


var MyDrawerNavigator = (0, _reactNavigation.createDrawerNavigator)({
  App: App,
  AccountSummary: AccountSummary,
  SimpleView: SimpleView,
  Notifications: {
    screen: MyDrawer
  }
});

var MyApp = createAppContainer(MyDrawerNavigator);
  return {
    App: MyApp,
	  AccountSummary: AccountSummary,
    Drawer: MyDrawer,
  }
})
