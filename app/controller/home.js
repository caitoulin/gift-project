'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async register() {
        const { ctx } = this;
        const userParams = ctx.request.body;
        console.log(userParams);
        const result = await this.ctx.service.mydataService.registerUser(
            userParams
        );
        console.log(result);
        this.ctx.response.body = result;
    }
}

module.exports = HomeController;
