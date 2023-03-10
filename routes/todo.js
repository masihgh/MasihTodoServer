

const express = require('express')
const {getAllTodos, getTodo, createTodo, updateTodo, deleteTodo}  = require('../controllers/todos')
// const Todo = require('../model/Todo')


const router = express.Router()

router.get('/', getAllTodos)
router.get('/:id', getTodo)
router.post('/', createTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)


module.exports = router