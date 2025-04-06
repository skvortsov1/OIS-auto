
export const configDev = {
    baseURL :  process.env.ENVIRONMENT === 'Dev' 
          ? 'https://mriia-stage-webapp.azurewebsites.net' 
          : "https://mriia-dev-webapp.azurewebsites.net",
    login: "m.zhuravel@thedigital.gov.ua",
    password: "Aa123456!",
}

export const configStage = {
    baseURL :  process.env.ENVIRONMENT === 'Stage' 
          ? 'https://mriia-stage-webapp.azurewebsites.net' 
          : "https://mriia-dev-webapp.azurewebsites.net",
      
    keyFilePath: '/Users/oleksandrskvorcov/Desktop/stage_certs_admin_2025/Фізична особа (з РНОКПП)/Key-6.dat',
    password: "12345",
    lessonForNewMaterialStage: ""

}