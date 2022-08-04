export default {
	project_name: 'reactBoilerplate',
	namespace: 'reactBoilerplate',
    api_url:
         process.env.API_ENDPOINT === 'prod'
			? 'http://188.124.203.32:7766/api/v1'
			: process.env.API_ENDPOINT === 'local'
			? 'http://188.124.203.32:7766/api/v1'
			: process.env.NODE_ENV === 'development'
			? 'http://188.124.203.32:7766/api/v1'
			: 'http://188.124.203.32:7766/api/v1',
    image_url:
         process.env.API_ENDPOINT === 'production'
			? '--PROD ENV URL--'
			: process.env.API_ENDPOINT === 'staging'
			? 'http://188.124.203.32:7766/api/v1'
			: 'http://188.124.203.32:7766/api/v1',
};
