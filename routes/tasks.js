const tasks = require('express').Router();
const db = require ('../model/task');

const showMethod = (req, res) => res.json(`${req.method} tasks/${req.params.taskID}`);
const sendJSONresp = (res, res) => res.json(res.rows);

// tasks/56
tasks.route('/:taskID')
  .get(showMethod)
  .put(showMethod)
  .delete(showMethod);

// /tasks
tasks.route('/')
  .get(db.getTasks)
  .post(showMethod);

module.exports = tasks;
