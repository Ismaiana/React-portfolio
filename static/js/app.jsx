function App() {
    return (
    <ReactRouterDOM.BrowserRouter>
        <Navbar/>
        <div className="container-fluid">
        <ReactRouterDOM.Route exact path="/">
          <Homepage />
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route exact path="/projects">
          <Projects />
        </ReactRouterDOM.Route>
        </div>
    </ReactRouterDOM.BrowserRouter>
    
); 

}

ReactDOM.render(<App />, document.querySelector('#root'));