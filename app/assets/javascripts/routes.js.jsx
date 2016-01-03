var DefaultRoute = ReactRouter.DefaultRoute;
 var Route = ReactRouter.Route;
 var Link = ReactRouter.Link;
 
  var Router = (
  <Route handler={App}>
    <DefaultRoute handler={FrontPage}/>
    <Route path='/contacts' name='contacts' handler={Contacts} />
    <Route path='/signup' name='signup' handler={NewUser} />
    <Route path='/login' name='login' handler={Login} />
    <Route path='/users' name='users' handler={Users} />
    <Route path='/gallery' name='gallery' handler={Gallery} />
    <Route path='/users/:userId' name='user' handler={UserShow} />
    <Route path='/tasks/new' name='new_task' handler={NewTask} />
    <Route path='/tasks/:taskId/edit' name='edit_task' handler={EditTask} />
   </Route>
 );
