import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/users';

export default class AuthController {

    public async Authenticate({request, response, auth}: HttpContextContract){
        try {
            const { email, password } = request.body();
            const token = await auth.attempt(email, password);
            return response.status(200).json({
                auth: true,
                token
            })
        } catch (error) {
            return response.json({
                auth: false,
                message: "Login ou senha incorretos!"
            })
        }
    }

    public async createUser({ request, response }: HttpContextContract){
        try {
            const body = request.body();
            if(body){
                await Users.create(body);
                return response.status(200).json({
                    error: false, 
                    message: "Criado com sucesso"
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}
