import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
let userInfo = JSON.parse(localStorage.getItem('userInfo'))
if(userInfo){
    axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
}
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios