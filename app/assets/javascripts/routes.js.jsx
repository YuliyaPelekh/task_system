var DefaultRoute = ReactRouter.DefaultRoute;
 var Route = ReactRouter.Route;
 var Link = ReactRouter.Link;
 
  var Router = (
  <Route handler={App}>
    <DefaultRoute handler={FrontPage}/>
    <Route path='/contacts' name='contacts' handler={Contacts} />
    <Route path='/signup' name='signup' handler={NewUser} />
    <Route path='/login' name='login' handler={Login} />
   </Route>
 );
