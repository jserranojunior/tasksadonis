'use strict'

const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
