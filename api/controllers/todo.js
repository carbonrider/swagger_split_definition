module.exports = {
  create: create,
  getAll: getAll,
  deleteEntry: deleteEntry
};

var todos= [];

function create(req, res) {
  var todoTitle = req.swagger.params.todoTitle.value;
  var todoID = todos.length + 1;
  todos.push({'title':todoTitle, 'id': todoID});
  res.json({message:"Task created successfully."});
}

function getAll(req, res){
  res.json(todos);
}

function deleteEntry(req, res){
  var todoID = req.swagger.params.todoID.value;
  for(var i=0; i< todos.length; i++){
    if(todos[i].id==todoID){
      todos.splice(i, 1);
      break;
    }
  }
  res.json({message:"TODO deleted successfully."});
}
