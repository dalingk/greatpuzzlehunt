PuzzlePageTitle = React.createClass({
    render() {
        return (
        <div className="puzzle-page-title">
            <img src="img/logo-512.png"/>
            <h2>{this.props.title}</h2>
        </div>
        );
    } 
});