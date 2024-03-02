import configVariables from "../configVariables/configVariables";
import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();

    constructor(){
        this.client
        .setEndpoint(configVariables.appWriteUrl) // Your API Endpoint or URL
        .setProject(configVariables.appWriteProjectId);  // Your project ID 
        
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            console.log("Account Creation failed :", error)
            throw error;
        }
    }
    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);

        }
        catch(error){
            console.log('login failed :', error)
            throw error;
        }
    }

    async logout(){
        try{
            return await this.account.deleteSessions()
        }
        catch(error){
            console.log('Error Occurred during logout :', error)
        }
    }

    async getCurrentUser(){
        try{
            return this.account.get()
        }
        catch(error){
            console.log('Current User not found :', error)
        }

        return null;
    }
}

const authService = new AuthService();

export default authService;