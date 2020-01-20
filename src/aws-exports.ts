// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: 'ap-south-1',
  aws_cognito_identity_pool_id:
    'ap-south-1:33a0a07b-1406-4ed0-a550-fe2b2bc0f812',
  aws_cognito_region: 'ap-south-1',
  aws_user_pools_id: 'ap-south-1_V9E5upOEd',
  aws_user_pools_web_client_id: '6r1eenlevnui1fe4epbp5vjfrn',
  oauth: {
    domain: 'audittool.auth.ap-south-1.amazoncognito.com',

    scope: [
      'phone',
      'email',
      'profile',
      'openid',
      'aws.cognito.signin.user.admin',
    ],

    redirectSignIn: 'http://localhost:4200',

    redirectSignOut: 'http://localhost:4200',

    responseType: 'code',

    options: {
      AdvancedSecurityDataCollectionFlag: false,
    },
  },
};

export default awsmobile;