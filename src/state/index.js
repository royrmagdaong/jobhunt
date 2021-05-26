import Vuex from 'vuex';
import Vue from 'vue';
import modules from './modules'

Vue.use(Vuex);
// Create Store
const store =  new Vuex.Store({
    modules
});

// this will cycle through every file inside modules folder and run action initStore
for(const moduleName of Object.keys(modules)){
    if(modules[moduleName].actions  && modules[moduleName].actions.initStore){
        store.dispatch(`${moduleName}/initStore`)
    }
}

export default store;