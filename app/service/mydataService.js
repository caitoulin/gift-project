const Service = require('egg').Service;
class mydataService extends Service {
    async registerUser(userParams) {
        const { ctx } = this;
        const { email, password, username } = userParams;
        const results = await this.ctx.model.User.find({ username });
        return results;
    }
}
module.exports = mydataService;
