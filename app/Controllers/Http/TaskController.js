'use strict'

const Task = use('App/Models/Task')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index () {
    const tasks = await Task.all()
    return tasks
  }

  /**
   * Render a form to be used for creating a new task.
   * GET tasks/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new task.
   * POST tasks
   */
  async store ({ request}) {
    const data = request.only(['name'])
    const task = await Task.create(data)
    return task
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params, request, response, view }) {
    const task = await Task.find(params.id)
    return task
  }

  /**
   * Render a form to update an existing task.
   * GET tasks/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request, response }) {
    const data = request.only(['name'])
    const task = await Task.find(params.id)

    task.merge(data)

    await task.save()

    return task
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params, request, response }) {
    const task = await Task.find(params.id)
    await task.delete()
  }
}

module.exports = TaskController
