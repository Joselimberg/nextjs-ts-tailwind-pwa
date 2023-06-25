import bcrypt from "bcryptjs";
import User from "../models/user";


export const checkUserEmailPassword = async (email: string, password: string) => {
    const user = await User.findOne({
        where: {
            email,
            status: 1
        }
    });

    if (!user) {
        console.log("Usuario inactivo");
        return null
        // return res.status(400).json({ message: 'Correo o contraseña no válidos' })
    }
    
    if (!bcrypt.compareSync(password, user.getDataValue('password'))) {
        console.log("Usuario contra incorrecta");
        return null
        // return res.status(400).json({ message: 'Correo o contraseña no válidos' })
    }

    const id = user.getDataValue('id');
    const name = user.getDataValue('name');

    return {
        id,
        name,
        email
    }

}