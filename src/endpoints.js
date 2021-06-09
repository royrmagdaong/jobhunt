const user = 'user/'
const jobPost = 'job-post/'
export default {
    signIn: user + 'signin',
    signUpApplicant: user + 'create/applicant',
    signUpCompany: user + 'create/company',
    jobPosts: jobPost,
    createJobPost: jobPost + 'create'
}