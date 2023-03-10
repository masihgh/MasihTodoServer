const Todo = require('../model/Todo')

const getAllTodos = async (req, res) => {
    try {
        const Todos = await Todo.find({})
        res.status(200).json(Todos)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getTodo = async (req, res) => {
    try {
	  const { id } = req.params;
	  const todo = await Todo.findById(id);
	  return res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTodo = async (req, res) => {
    try {
	  const newTodo = new Todo({ ...req.body });
	  const insertedTodo = await newTodo.save();
	  return res.status(201).json(insertedTodo);
	  
    } catch (error) {
      res.status(500).json({ msg: error });
    }
};

const updateTodo = async (req, res) => {
    const {id: _id} = req.params
    const todo = req.body
    
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(_id, {...todo, _id}, {new: true})
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteTodo = async (req, res) => {
    const { id: TodoID } = req.params;
    try {
      await Todo.findOneAndDelete({ _id: TodoID });
  
      res.status(200).json({delete:true});
    } catch (error) {
		console.log(error);
      res.status(500).json({ msg: error });
    }
  };

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}