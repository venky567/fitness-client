import { Amplify, Auth } from 'aws-amplify';


Amplify.configure({
    // TODO: ALL THIS BELOW CONFIGURATION MUST COME FROM ENV VARIABLES
    Auth: {
        region: "eu-west-2",
        userPoolId: 'eu-west-2_sTuGPvIDz',
        userPoolWebClientId: "2m0qkokh7skf28ro27o0vh1f0g"

    }
})