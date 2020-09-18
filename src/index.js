import {ApiService} from './js/api.service';
import {App} from './js/app';

window.onload = function init() {
    const apiService = new ApiService();
    const app = new App(apiService);
    app.run();
}
