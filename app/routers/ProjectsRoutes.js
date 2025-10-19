
const createRouter = require('../factories/RouteFactory');
const ProjectController = require('../controllers/ProjectsController');
const ProjectRouter = createRouter(ProjectController, 'id');
module.exports = ProjectRouter;
