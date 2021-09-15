const Task = require('./model/Task.js');

class taskController {
    async postTask(req, res) {
        console.log(1);
        const {text, done, like} = req.body;
        try {
            const task = await Task.create({
                text: text,
                done: done,
                like: like
            });
            res.send(task);
            console.log(task);
        } catch(e) {

        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await Task.find();
            res.send(tasks);
        } catch(e) {
            
        }
    }

    async deleteTask(req, res) {
        const id = req.params.id;
        try {
            const task = await Task.findByIdAndRemove(id);
            res.send(task);
        } catch(e) {    
            
        }
    }

    async updateTask(req, res) {
        const id = req.params.id;
        const {done, like} = req.body;
        try {
            if (typeof(done) !== 'undefined') {
                const updateTask = await Task.findByIdAndUpdate(id, {
                    done: done
                }, {
                    new: true
                })
                res.send(updateTask)
            } else if (typeof(like) !== 'undefined') {
                const updateTask = await Task.findByIdAndUpdate(id, {
                    like: like
                }, {
                    new: true
                })
                res.send(updateTask)
            }
        } catch(e) {
            
        }
    }
}

module.exports = new taskController;