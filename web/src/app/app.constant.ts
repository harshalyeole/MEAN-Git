export class AppConstant {
    //constant variables
    LogoImage = 'assets/img/app-logo.png';
    DefaultUserImage = 'assets/img/default-user.png';
}
export class Constants {
    FBERROR = 'Facebook has denied authentication, please try again';
    FBALERT = 'Cancelled by user, please try again';
}

/**
 * for http constant
 */
interface HttpConfig{
    baseUrl: string;
    apiKey: string;
}

export const HTTP_CONFIG: HttpConfig = {
    // base url local
     baseUrl: 'http://localhost:3001/',
    // base url server
   // baseUrl: 'http://45.79.103.182:3026/',
    apiKey: 'd71a0600eb536f75c2d6de65f18628b5'
};
